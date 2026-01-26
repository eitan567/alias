import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';

import { Team } from '../types';
import { TOTAL_STEPS, TEAM_COLORS } from '../constants';

// Fix for TypeScript not recognizing R3F elements in JSX.IntrinsicElements
// Augmenting both global JSX and React.JSX to ensure compatibility
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      group: any;
      circleGeometry: any;
      meshBasicMaterial: any;
      ringGeometry: any;
      planeGeometry: any;
      cylinderGeometry: any;
      sphereGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
  
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        mesh: any;
        boxGeometry: any;
        meshStandardMaterial: any;
        group: any;
        circleGeometry: any;
        meshBasicMaterial: any;
        ringGeometry: any;
        planeGeometry: any;
        cylinderGeometry: any;
        sphereGeometry: any;
        ambientLight: any;
        pointLight: any;
      }
    }
  }
}

interface BoardProps {
  teams: Team[];
  currentTeamId: number;
}

// Generates equidistant points along a multi-segment path
const generateSpiralPath = (count: number) => {
  // Define the waypoints for the spiral (outer rect -> inner rect -> center)
  // Board size is roughly 28x18.
  const waypoints = [
    new THREE.Vector3(-12.5, 0, -7.5), // Top-Left Start
    new THREE.Vector3(12.5, 0, -7.5),  // Top-Right
    new THREE.Vector3(12.5, 0, 7.5),   // Bottom-Right
    new THREE.Vector3(-12.5, 0, 7.5),  // Bottom-Left
    new THREE.Vector3(-12.5, 0, -4),   // Inner Top-Left
    new THREE.Vector3(9.5, 0, -4),     // Inner Top-Right
    new THREE.Vector3(9.5, 0, 4),      // Inner Bottom-Right
    new THREE.Vector3(-9.5, 0, 4),     // Inner Bottom-Left
    new THREE.Vector3(-9.5, 0, -1),    // Center Left
    new THREE.Vector3(5, 0, -1),       // Center Finish
  ];

  // Calculate total length
  let totalLength = 0;
  const segmentLengths = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const dist = waypoints[i].distanceTo(waypoints[i+1]);
    totalLength += dist;
    segmentLengths.push(dist);
  }

  const positions = [];
  const stepSize = totalLength / count;
  
  let currentDist = 0;
  let currentSegment = 0;
  let distInSegment = 0;

  for (let i = 0; i <= count; i++) {
    // Find exact position at distance 'currentDist'
    while (distInSegment > segmentLengths[currentSegment] && currentSegment < segmentLengths.length - 1) {
      distInSegment -= segmentLengths[currentSegment];
      currentSegment++;
    }

    const start = waypoints[currentSegment];
    const end = waypoints[currentSegment + 1];
    const alpha = distInSegment / (segmentLengths[currentSegment] || 1); // Avoid division by zero
    
    const pos = new THREE.Vector3().lerpVectors(start, end, alpha);
    
    // Calculate rotation (direction of the segment)
    const dir = new THREE.Vector3().subVectors(end, start).normalize();
    const angle = Math.atan2(dir.x, dir.z); // Angle relative to North (Z-)

    positions.push({ x: pos.x, z: pos.z, rotation: angle, id: i });
    
    currentDist += stepSize;
    distInSegment += stepSize;
  }
  
  return positions;
};

// 1. The Ultra-Thin Board Base
const FlatBoardBase: React.FC = () => (
  <mesh rotation={[0, 0, 0]} position={[0, -0.026, 0]} receiveShadow>
    <boxGeometry args={[29, 0.05, 19]} /> 
    <meshStandardMaterial color="#dc2626" roughness={0.6} />
  </mesh>
);

// 2. The Center Logo (Alias)
// Using 3D Text is more reliable for visibility on the board than HTML overlays
const BoardLogo: React.FC = () => (
  <group position={[0, 0.04, 1.5]}>
    <Text
      rotation={[-Math.PI / 2, 0, 0]}
      fontSize={4}
      color="white"
      anchorX="center"
      anchorY="middle"
      font="https://fonts.gstatic.com/s/rubik/v21/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-GWi1OE8.woff2"
      characters="אליאס"
      outlineWidth={0.05}
      outlineColor="#991b1b"
    >
      אליאס
    </Text>
  </group>
);

// 3. Flat Bubble Step
const FlatBubbleStep: React.FC<{ pos: { x: number, z: number, rotation: number }, index: number }> = ({ pos, index }) => {
  const isStart = index === 0;
  const isFinish = index === TOTAL_STEPS;
  // Sequence 1-8 repeating
  const displayNumber = isStart ? '1' : ((index) % 8) + 1;
  const isHighlighted = (index + 1) % 8 === 1 || (index + 1) % 8 === 5; 

  if (isFinish) {
      return (
        <group position={[pos.x, 0.02, pos.z]}>
             <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[1.2, 32]} />
                <meshBasicMaterial color="#b91c1c" />
            </mesh>
             <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,0.001,0]}>
                <ringGeometry args={[1.1, 1.2, 32]} />
                <meshBasicMaterial color="white" />
            </mesh>
            {/* Victory Icon - Using Text for best visibility */}
            <Text
              position={[0, 0.05, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              fontSize={1.5}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              ✌️
            </Text>
        </group>
      )
  }

  const radius = isStart ? 0.85 : 0.6;
  const tailPos = isStart ? 0.8 : 0.55;

  return (
    <group position={[pos.x, 0.02, pos.z]}>
      
      {/* Glow for Start */}
      {isStart && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
           <circleGeometry args={[1.3, 32]} />
           <meshBasicMaterial color="#f97316" transparent opacity={0.6} />
        </mesh>
      )}

      {/* Bubble Body */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[radius, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
      
      {/* Tail */}
      <mesh rotation={[-Math.PI / 2, 0, pos.rotation + Math.PI / 2]} position={[0, 0, 0]}>
          <mesh position={[tailPos, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
             <planeGeometry args={[0.3, 0.3]} />
             <meshBasicMaterial color="white" />
          </mesh>
      </mesh>

      {/* Highlight Ring */}
      {isHighlighted && !isStart && (
         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
            <ringGeometry args={[radius - 0.1, radius, 32]} />
            <meshBasicMaterial color="#dc2626" />
         </mesh>
      )}

      {/* Number - Significantly increased size */}
      <Text
        position={[0, 0.02, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={isStart ? 0.9 : 0.65} 
        fontWeight="bold"
        color="#dc2626"
        anchorX="center"
        anchorY="middle"
        characters="0123456789"
      >
        {displayNumber}
      </Text>
    </group>
  );
};

// 4. Player Pawn
const MeeplePawn: React.FC<{ team: Team; isCurrent: boolean; targetPos: { x: number, z: number } }> = ({ team, isCurrent, targetPos }) => {
  const colorDef = TEAM_COLORS.find(c => c.value === team.color) || TEAM_COLORS[0];
  const jitterX = useMemo(() => (Math.random() - 0.5) * 0.4, []);
  const jitterZ = useMemo(() => (Math.random() - 0.5) * 0.4, []);

  return (
    <group position={[targetPos.x + jitterX, 0.05, targetPos.z + jitterZ]}>
      <group scale={isCurrent ? 1 : 0.8}> 
        <mesh castShadow position={[0, 0.5, 0]}>
             <cylinderGeometry args={[0.2, 0.4, 0.8, 16]} />
             <meshStandardMaterial color={colorDef.hex} />
        </mesh>
        <mesh castShadow position={[0, 1.0, 0]}>
            <sphereGeometry args={[0.28, 32, 32]} />
            <meshStandardMaterial color={colorDef.hex} />
        </mesh>
      </group>
      {isCurrent && (
         <Html position={[0, 2.5, 0]} center zIndexRange={[100, 0]}>
            <div className="bg-white/95 px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-slate-200 whitespace-nowrap text-slate-900">
                {team.name}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-b border-r border-slate-200"></div>
            </div>
         </Html>
      )}
    </group>
  );
};

const Board: React.FC<BoardProps> = ({ teams, currentTeamId }) => {
  const stepPositions = useMemo(() => generateSpiralPath(TOTAL_STEPS), []);
  const finishPosition = stepPositions[stepPositions.length - 1];

  return (
    <div className="w-full h-full bg-[#1e293b]">
      <Canvas shadows camera={{ position: [0, 28, 0], fov: 35 }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[0, 20, 0]} intensity={0.4} />
        
        <Suspense fallback={null}>
            <group>
                <FlatBoardBase />
                <Suspense fallback={null}>
                  <BoardLogo />
                </Suspense>
                {stepPositions.map((pos, idx) => (
                    <FlatBubbleStep key={idx} pos={pos} index={idx} />
                ))}
            </group>

            {teams.map((team) => {
                const safeIdx = Math.min(team.position, stepPositions.length - 1);
                return <MeeplePawn key={team.id} team={team} isCurrent={team.id === currentTeamId} targetPos={stepPositions[safeIdx]} />;
            })}
        </Suspense>

        <OrbitControls 
            minPolarAngle={0} 
            minDistance={10} 
            maxDistance={50}
            enablePan={true}
            maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};

export default Board;