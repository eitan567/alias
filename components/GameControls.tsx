import React, { useEffect } from 'react';
import { Team, GeneticTerm, GamePhase } from '../types';
import { Timer, Check, X, CircleHelp, Eye, EyeOff, Play, Info } from 'lucide-react';
import { CATEGORY_ICONS, TEAM_COLORS } from '../constants';

interface GameControlsProps {
  currentTeam: Team;
  phase: GamePhase;
  currentCard: GeneticTerm | null;
  timeLeft: number;
  onStartTurn: () => void;
  onSuccess: () => void;
  onFail: () => void;
  onTimerTick: () => void;
  isTeacherMode: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({
  currentTeam,
  phase,
  currentCard,
  timeLeft,
  onStartTurn,
  onSuccess,
  onFail,
  onTimerTick,
  isTeacherMode
}) => {
  const [showAnswer, setShowAnswer] = React.useState(true); 

  useEffect(() => {
    setShowAnswer(true);
  }, [currentCard]);

  useEffect(() => {
    let interval: any;
    if (phase === GamePhase.PLAYING_EXPLAIN && currentCard && timeLeft > 0) {
      interval = setInterval(onTimerTick, 1000);
    }
    return () => clearInterval(interval);
  }, [phase, currentCard, timeLeft, onTimerTick]);

  const Icon = currentCard && CATEGORY_ICONS[currentCard.category] ? CATEGORY_ICONS[currentCard.category] : CircleHelp;
  const colorDef = TEAM_COLORS.find(c => c.value === currentTeam.color) || TEAM_COLORS[0];
  const isWaitingToStart = phase === GamePhase.PLAYING_EXPLAIN && !currentCard;

  return (
    <div className="w-full h-full flex flex-col p-2 lg:p-6 bg-slate-50">
      
      {/* Top HUD - Compact */}
      <div className="flex justify-between items-center mb-1 lg:mb-6 shrink-0">
          <div className="bg-white shadow-sm rounded-lg p-1.5 lg:p-3 flex items-center gap-2 border border-slate-200 min-w-[110px] lg:min-w-[200px]">
             <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold text-white text-xs lg:text-lg"
                  style={{ backgroundColor: colorDef.hex }}>
                  {currentTeam.name[0]}
             </div>
             <div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wide leading-none mb-0.5">תור נוכחי</div>
                <div className="text-xs lg:text-xl font-black text-slate-800 leading-none">{currentTeam.name}</div>
             </div>
          </div>

          <div className={`bg-white shadow-sm rounded-lg px-2 py-1 lg:px-4 lg:py-3 border border-slate-200 flex items-center gap-1.5 ${timeLeft < 10 ? 'bg-red-50 border-red-200' : ''}`}>
             <Timer className={`w-4 h-4 lg:w-6 lg:h-6 ${timeLeft < 10 ? 'text-red-600 animate-pulse' : 'text-slate-400'}`} />
             <span className={`text-xl lg:text-3xl font-mono font-black ${timeLeft < 10 ? 'text-red-600' : 'text-slate-800'}`}>
                {timeLeft}
             </span>
          </div>
      </div>

      {/* Center Interactive Area */}
      <div className="flex-1 flex items-center justify-center relative">
        
        {isWaitingToStart && (
            <div className="animate-float-in">
                <button 
                    onClick={onStartTurn}
                    className="group bg-red-600 text-white w-32 h-32 lg:w-64 lg:h-64 rounded-full shadow-xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105 active:scale-95 border-4 lg:border-8 border-white/20"
                >
                    <Play className="w-8 h-8 lg:w-16 lg:h-16 fill-current" />
                    <span className="text-xl lg:text-4xl font-black">התחל</span>
                </button>
            </div>
        )}

        {phase === GamePhase.PLAYING_EXPLAIN && currentCard && (
           <div className="animate-float-in w-full max-w-sm lg:max-w-md z-10 h-full flex flex-col justify-center">
             <div className="bg-white rounded-2xl shadow-lg border-2 lg:border-4 border-slate-200 overflow-hidden flex flex-col max-h-full">
                {/* Compact Card Content */}
                <div className="p-3 lg:p-8 text-center relative flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1 lg:mb-4 absolute top-2 left-2 right-2 lg:static">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[9px] lg:text-xs font-bold border border-slate-200 flex items-center gap-1">
                            <Icon size={12} className="lg:w-4 lg:h-4" />{currentCard.category}
                        </span>
                        <button onClick={() => setShowAnswer(!showAnswer)} className="text-slate-300 hover:text-slate-500">
                          {showAnswer ? <EyeOff size={16} className="lg:w-5 lg:h-5"/> : <Eye size={16} className="lg:w-5 lg:h-5"/>}
                        </button>
                    </div>
                    
                    <div className="min-h-[60px] lg:min-h-[160px] flex items-center justify-center my-4 lg:my-0">
                        {showAnswer ? (
                            <h2 className="text-2xl lg:text-5xl font-black text-slate-900 leading-tight px-1">{currentCard.term}</h2>
                        ) : (
                            <div className="w-full h-12 lg:h-20 bg-slate-50 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200">
                                <span className="text-slate-300 font-bold text-xs lg:text-sm">מושג מוסתר</span>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Compact Buttons */}
                <div className="bg-slate-50 p-2 lg:p-6 flex gap-2 border-t border-slate-100 shrink-0">
                    <button onClick={onFail} className="flex-1 bg-white border border-slate-200 text-slate-400 py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold text-xs lg:text-lg">דילוג</button>
                    <button onClick={onSuccess} className="flex-[2] bg-green-500 text-white py-2 lg:py-3 rounded-lg lg:rounded-xl font-black text-sm lg:text-xl shadow-md flex items-center justify-center gap-1">
                        <Check size={16} className="lg:w-5 lg:h-5" /> הצלחנו!
                    </button>
                </div>
             </div>
           </div>
        )}

        {phase === GamePhase.PLAYING_RESULT && (
            <div className="bg-white p-4 lg:p-10 rounded-2xl shadow-xl text-center max-w-xs lg:max-w-sm border-2 lg:border-4 border-red-500 animate-in zoom-in duration-300">
                <h3 className="text-xl lg:text-3xl font-black text-slate-900 mb-1 lg:mb-2">נגמר הזמן!</h3>
                <p className="text-xs lg:text-lg text-slate-500 mb-4 lg:mb-6">האם הקבוצה הצליחה?</p>
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                    <button onClick={onFail} className="bg-slate-100 text-slate-600 py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold text-xs lg:text-sm">לא</button>
                    <button onClick={onSuccess} className="bg-green-500 text-white py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold text-xs lg:text-sm">כן!</button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
export default GameControls;