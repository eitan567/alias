import React from 'react';
import { Team } from '../types';
import { Trophy, RefreshCw } from 'lucide-react';

interface WinnerModalProps {
  winner: Team;
  onRestart: () => void;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ winner, onRestart }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-12 max-w-lg w-full text-center shadow-2xl border-4 border-yellow-400 relative overflow-hidden animate-in zoom-in duration-300">
        
        {/* Confetti Background (Simulated with circles) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute rounded-full" 
                     style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        background: ['#ef4444', '#3b82f6', '#eab308', '#22c55e'][Math.floor(Math.random() * 4)]
                     }}
                />
            ))}
        </div>

        <div className="relative z-10">
            <div className="inline-block p-6 rounded-full bg-yellow-100 mb-6">
                <Trophy className="w-16 h-16 text-yellow-600" />
            </div>
            
            <h2 className="text-4xl font-black text-slate-800 mb-2">יש לנו מנצחים!</h2>
            <p className="text-xl text-slate-600 mb-8">כל הכבוד על הידע הגנטי המרשים.</p>
            
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg mb-8 transform scale-110">
                <span className="block text-sm opacity-90 mb-1">הקבוצה המנצחת</span>
                <span className="text-4xl font-black tracking-wider">{winner.name}</span>
            </div>

            <button 
                onClick={onRestart}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
                <RefreshCw size={20} />
                משחק חדש
            </button>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;