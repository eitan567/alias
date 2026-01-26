import React, { useState } from 'react';
import { Team, Difficulty, GameSettings } from '../types';
import { Users, Play, Trash2 } from 'lucide-react';
import { TEAM_COLORS, GAME_CONTENT, AVAILABLE_GRADES } from '../constants';

interface SetupScreenProps {
  onStartGame: (teams: Team[], settings: GameSettings) => void;
}

const SetupScreen: React.FC<SetupScreenProps> = ({ onStartGame }) => {
  const [teams, setTeams] = useState<Omit<Team, 'position' | 'score'>[]>([
    { id: 1, name: 'קבוצה א׳', color: 'blue' },
    { id: 2, name: 'קבוצה ב׳', color: 'green' }
  ]);
  
  const [difficulty, setDifficulty] = useState<Difficulty | 'ALL'>('ALL');
  const [duration, setDuration] = useState(60);
  const [selectedTopicId, setSelectedTopicId] = useState<string>('genetics');
  const [selectedGrade, setSelectedGrade] = useState<string>(AVAILABLE_GRADES[1]); // Default to High School

  const addTeam = () => {
    if (teams.length >= 6) return;
    const nextColor = TEAM_COLORS.find(c => !teams.some(t => t.color === c.value)) || TEAM_COLORS[0];
    setTeams([...teams, { id: Date.now(), name: `קבוצה ${teams.length + 1}`, color: nextColor.value }]);
  };

  const removeTeam = (id: number) => {
    if (teams.length <= 2) return;
    setTeams(teams.filter(t => t.id !== id));
  };

  const updateTeam = (id: number, field: keyof Team, value: any) => {
    setTeams(teams.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const handleStart = () => {
    const finalTeams: Team[] = teams.map(t => ({ ...t, position: 0, score: 0 }));
    onStartGame(finalTeams, {
        turnDuration: duration,
        winningScore: 25,
        selectedDifficulty: difficulty,
        topicId: selectedTopicId,
        grade: selectedGrade
    });
  };

  const currentTopic = GAME_CONTENT[selectedTopicId];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8" dir="rtl">
      <div className="bg-white max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Panel - Dynamic Info */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 lg:p-12 flex flex-col justify-between text-white md:w-1/3 transition-all duration-300">
           <div>
             <h1 className="text-4xl lg:text-6xl font-black mb-1">אליאס</h1>
             <h2 className="text-2xl lg:text-3xl font-light opacity-90">{currentTopic.name}</h2>
             <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] lg:text-xs font-medium uppercase tracking-wider">
               {selectedGrade}
             </div>
           </div>
           <div className="hidden md:block text-sm opacity-80 leading-relaxed mt-10">
             {currentTopic.description}
             <br/><br/>
             התקדמו על הלוח, הסבירו מושגים והובילו את הקבוצה לניצחון!
           </div>
        </div>

        {/* Right Panel - Settings */}
        <div className="p-6 lg:p-10 flex-1 flex flex-col h-full">
           
           <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
               {/* Team Setup */}
               <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
                 <Users className="text-red-600 w-5 h-5" />
                 הגדרת קבוצות
               </h3>

               <div className="space-y-3 mb-8">
                 {teams.map((team, index) => (
                   <div key={team.id} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
                     <input 
                       type="text" 
                       value={team.name} 
                       onChange={(e) => updateTeam(team.id, 'name', e.target.value)}
                       className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm lg:text-base text-slate-800 outline-none focus:border-red-500"
                     />
                     <div className="flex gap-1">
                        {TEAM_COLORS.map(c => (
                            <button
                              key={c.value}
                              onClick={() => updateTeam(team.id, 'color', c.value)}
                              className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 ${team.color === c.value ? 'border-slate-800 scale-110' : 'border-transparent opacity-40'}`}
                              style={{ backgroundColor: c.hex }}
                            />
                        ))}
                     </div>
                     <button onClick={() => removeTeam(team.id)} className="text-slate-300 hover:text-red-500 p-1" disabled={teams.length <= 2}>
                       <Trash2 size={16} />
                     </button>
                   </div>
                 ))}
                 {teams.length < 6 && (
                    <button onClick={addTeam} className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm font-medium hover:border-red-200 hover:text-red-500">
                      + הוסף קבוצה
                    </button>
                 )}
               </div>

               {/* Game Options */}
               <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-4 pt-2 border-t border-slate-100">
                 אפשרויות משחק
               </h3>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-4">
                  <div>
                     <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">נושא</label>
                     <select 
                        value={selectedTopicId} 
                        onChange={(e) => setSelectedTopicId(e.target.value)} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-red-500"
                     >
                       {Object.values(GAME_CONTENT).map(topic => (
                           <option key={topic.id} value={topic.id}>{topic.name}</option>
                       ))}
                     </select>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">כיתה</label>
                     <select 
                        value={selectedGrade} 
                        onChange={(e) => setSelectedGrade(e.target.value)} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-red-500"
                     >
                       {AVAILABLE_GRADES.map(g => (
                           <option key={g} value={g}>{g}</option>
                       ))}
                     </select>
                  </div>
               
                  <div>
                     <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">רמת קושי</label>
                     <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as any)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-red-500">
                       <option value="ALL">כל הרמות</option>
                       {Object.values(Difficulty).map(d => <option key={d} value={d}>{d}</option>)}
                     </select>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">זמן לסיבוב</label>
                     <select value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-red-500">
                       <option value={45}>45 שניות</option>
                       <option value={60}>60 שניות</option>
                       <option value={90}>90 שניות</option>
                     </select>
                  </div>
               </div>
           </div>

           <button onClick={handleStart} className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 rounded-2xl shadow-xl shadow-red-100 transition-all flex items-center justify-center gap-3 active:scale-95 shrink-0">
             <Play size={24} className="fill-current" />
             התחל משחק
           </button>
        </div>
      </div>
    </div>
  );
};
export default SetupScreen;