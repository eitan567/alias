import React, { useState, useCallback } from 'react';
import { GamePhase, Team, GameSettings, GeneticTerm } from './types';
import { GAME_CONTENT, TOTAL_STEPS } from './constants';
import SetupScreen from './components/SetupScreen';
import Board from './components/Board';
import GameControls from './components/GameControls';
import WinnerModal from './components/WinnerModal';
import { GraduationCap, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [phase, setPhase] = useState<GamePhase>(GamePhase.SETUP);
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [currentCard, setCurrentCard] = useState<GeneticTerm | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [usedTerms, setUsedTerms] = useState<Set<string>>(new Set());

  const currentTeam = teams[currentTeamIndex];

  const startGame = (initialTeams: Team[], gameSettings: GameSettings) => {
    setTeams(initialTeams);
    setSettings(gameSettings);
    setTimeLeft(gameSettings.turnDuration);
    setPhase(GamePhase.PLAYING_EXPLAIN); 
    setCurrentTeamIndex(0);
    setCurrentCard(null);
    setUsedTerms(new Set()); // Reset used terms when starting new game
  };

  const handleStartTurn = () => {
    if (!settings) return;
    
    // 1. Get Base Pool for Topic & Difficulty
    const topic = GAME_CONTENT[settings.topicId] || GAME_CONTENT['genetics'];
    let pool = topic.terms;

    if (settings.selectedDifficulty !== 'ALL') {
      pool = pool.filter(t => t.difficulty === settings.selectedDifficulty);
    }
    
    // Safety check - if pool is empty (e.g. strict filtering), revert to all terms
    if (pool.length === 0) {
        pool = topic.terms;
    }

    // 2. Filter out terms that have already been used
    let available = pool.filter(t => !usedTerms.has(t.term));
    
    // 3. If deck is exhausted, reset used terms (shuffle deck)
    let newUsedTerms = new Set(usedTerms);
    if (available.length === 0) {
        available = pool;
        newUsedTerms.clear();
    }

    // 4. Pick random card
    const card = available[Math.floor(Math.random() * available.length)];
    
    // 5. Update state
    newUsedTerms.add(card.term);
    setUsedTerms(newUsedTerms);
    setCurrentCard(card);
    setTimeLeft(settings.turnDuration);
    setPhase(GamePhase.PLAYING_EXPLAIN);
  };

  const handleTimerTick = () => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        setPhase(GamePhase.PLAYING_RESULT);
        return 0;
      }
      return prev - 1;
    });
  };

  const handleTurnSuccess = () => {
    if (!currentTeam) return;
    const newTeams = [...teams];
    newTeams[currentTeamIndex].position = Math.min(newTeams[currentTeamIndex].position + 1, TOTAL_STEPS);
    newTeams[currentTeamIndex].score += 1;
    setTeams(newTeams);
    if (newTeams[currentTeamIndex].position >= TOTAL_STEPS) {
      setPhase(GamePhase.WINNER);
    } else {
      nextTurn();
    }
  };

  const handleTurnFail = () => nextTurn();

  const nextTurn = () => {
    setCurrentCard(null);
    setPhase(GamePhase.PLAYING_EXPLAIN);
    setCurrentTeamIndex((prev) => (prev + 1) % teams.length);
    if (settings) setTimeLeft(settings.turnDuration);
  };

  const restartGame = () => {
    setPhase(GamePhase.SETUP);
    setTeams([]);
    setSettings(null);
    setUsedTerms(new Set());
  };

  if (phase === GamePhase.SETUP) {
    return <SetupScreen onStartGame={startGame} />;
  }

  const currentTopicName = settings ? GAME_CONTENT[settings.topicId]?.name : 'גנטיקה';

  return (
    <div className="w-full h-screen bg-slate-50 relative flex flex-col lg:flex-row overflow-hidden" dir="rtl">
      
      {/* 3D Board - Larger area (65vh on mobile, 3/4 on desktop) */}
      <div className="w-full h-[65vh] lg:h-full lg:w-3/4 relative z-0 border-b lg:border-b-0 lg:border-l border-slate-200">
        <Board teams={teams} currentTeamId={currentTeam?.id || 0} />
      </div>
      
      {/* Controls - Compact area (35vh on mobile, 1/4 on desktop) */}
      <div className="w-full h-[35vh] lg:h-full lg:w-1/4 relative z-10 shadow-2xl bg-white overflow-hidden">
        <GameControls 
          currentTeam={currentTeam}
          phase={phase}
          currentCard={currentCard}
          timeLeft={timeLeft}
          onStartTurn={handleStartTurn}
          onSuccess={handleTurnSuccess}
          onFail={handleTurnFail}
          onTimerTick={handleTimerTick}
          isTeacherMode={isTeacherMode}
        />
      </div>

       {/* Top Bar (Overlay) */}
       <div className="absolute top-0 right-0 left-0 p-3 lg:p-4 z-20 flex justify-between items-start pointer-events-none">
         <h1 className="text-xl lg:text-2xl font-black text-white/20 select-none">אליאס {currentTopicName}</h1>
         <div className="flex gap-2 lg:gap-4 pointer-events-auto">
            <button 
               onClick={() => setIsTeacherMode(!isTeacherMode)}
               className={`flex items-center gap-1 lg:gap-2 text-[10px] lg:text-sm font-bold ${isTeacherMode ? 'text-red-500' : 'text-white'} bg-black/60 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1.5 lg:py-2 shadow-lg border border-white/10`}
             >
                <GraduationCap size={16} />
                <span className="hidden xs:inline">מצב מורה {isTeacherMode ? '(פעיל)' : ''}</span>
             </button>
             <button
               onClick={restartGame}
               className="flex items-center gap-1 lg:gap-2 text-[10px] lg:text-sm font-bold text-white bg-black/60 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1.5 lg:py-2 shadow-lg border border-white/10"
             >
                <ArrowLeft size={16} />
                <span className="hidden xs:inline">הגדרות</span>
             </button>
         </div>
      </div>

      {/* Winner Modal */}
      {phase === GamePhase.WINNER && (
        <WinnerModal winner={currentTeam} onRestart={restartGame} />
      )}
    </div>
  );
};

export default App;