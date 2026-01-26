export enum GamePhase {
  SETUP = 'SETUP',
  PLAYING_EXPLAIN = 'PLAYING_EXPLAIN', // During 60s timer
  PLAYING_RESULT = 'PLAYING_RESULT',   // Success/Fail decision
  WINNER = 'WINNER'
}

export enum Difficulty {
  BASIC = 'בסיסית',
  INTERMEDIATE = 'בינונית',
  ADVANCED = 'מתקדמת'
}

export interface Team {
  id: number;
  name: string;
  color: string; // Tailwind color class prefix (e.g., 'blue', 'green')
  position: number; // Index on board (0 to 30)
  score: number;
}

export interface GeneticTerm {
  term: string;
  difficulty: Difficulty;
  category: string;
  forbiddenWords?: string[]; // Optional: for strict mode
  description?: string; // Optional: context for teacher
}

export interface GameSettings {
  turnDuration: number; // in seconds
  winningScore: number; // Board steps
  selectedDifficulty: Difficulty | 'ALL';
  topicId: string;
  grade: string;
}

export interface GameTopic {
  id: string;
  name: string;
  description: string;
  terms: GeneticTerm[];
}