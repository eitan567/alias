import { Difficulty, GeneticTerm } from './types';
import { Dna, Activity, Grid3x3, Copy, Scissors, GitFork, Bug, Component as ComponentIcon, Layers, ShieldCheck, Shuffle } from 'lucide-react';

export const TOTAL_STEPS = 70; // 8 series of 8 (64) + final 6 steps = 70

export const TEAM_COLORS = [
  { name: 'כחול', value: 'blue', hex: '#2563eb', shadow: '#1e40af', text: 'white' },
  { name: 'ירוק', value: 'green', hex: '#16a34a', shadow: '#15803d', text: 'white' },
  { name: 'אדום', value: 'red', hex: '#dc2626', shadow: '#991b1b', text: 'white' },
  { name: 'צהוב', value: 'yellow', hex: '#ca8a04', shadow: '#854d0e', text: 'white' }, // Darker yellow for better contrast
  { name: 'לבן', value: 'white', hex: '#f1f5f9', shadow: '#94a3b8', text: 'black' },
];

// Content Database - High School Genetics (11th-12th Grade)
export const GENETICS_TERMS: GeneticTerm[] = [
  // Basic
  { term: 'DNA', difficulty: Difficulty.BASIC, category: 'מולקולרי' },
  { term: 'גן', difficulty: Difficulty.BASIC, category: 'מולקולרי' },
  { term: 'כרומוזום', difficulty: Difficulty.BASIC, category: 'מבנה' },
  { term: 'אלל', difficulty: Difficulty.BASIC, category: 'תורשה' },
  { term: 'תא', difficulty: Difficulty.BASIC, category: 'מבנה' },
  { term: 'גרעין התא', difficulty: Difficulty.BASIC, category: 'מבנה' },
  { term: 'חלבון', difficulty: Difficulty.BASIC, category: 'מולקולרי' },
  { term: 'מוטציה', difficulty: Difficulty.BASIC, category: 'שינוי' },
  
  // Intermediate
  { term: 'גנוטיפ', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'פנוטיפ', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'הומוזיגוט', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'הטרוזיגוט', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'דומיננטי', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'רצסיבי', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'מיוזה', difficulty: Difficulty.INTERMEDIATE, category: 'חלוקה' },
  { term: 'מיטוזה', difficulty: Difficulty.INTERMEDIATE, category: 'חלוקה' },
  { term: 'ריבוזום', difficulty: Difficulty.INTERMEDIATE, category: 'מולקולרי' },
  { term: 'שעתוק', difficulty: Difficulty.INTERMEDIATE, category: 'תהליך' },
  { term: 'תרגום', difficulty: Difficulty.INTERMEDIATE, category: 'תהליך' },
  
  // Advanced
  { term: 'ריבוע פנט', difficulty: Difficulty.ADVANCED, category: 'כלי' },
  { term: 'קודון', difficulty: Difficulty.ADVANCED, category: 'מולקולרי' },
  { term: 'אנזים', difficulty: Difficulty.ADVANCED, category: 'חלבון' },
  { term: 'תאחיזה', difficulty: Difficulty.ADVANCED, category: 'תורשה' },
  { term: 'כרומוזום הומולוגי', difficulty: Difficulty.ADVANCED, category: 'מבנה' },
  { term: 'שחלוף (Crossing Over)', difficulty: Difficulty.ADVANCED, category: 'תהליך' },
  { term: 'RNA שליח (mRNA)', difficulty: Difficulty.ADVANCED, category: 'מולקולרי' },
  { term: 'פולימורפיזם', difficulty: Difficulty.ADVANCED, category: 'שונות' },
  { term: 'אפיגנטיקה', difficulty: Difficulty.ADVANCED, category: 'בקרה' },
  { term: 'הנדסה גנטית', difficulty: Difficulty.ADVANCED, category: 'טכנולוגיה' },
  { term: 'קריוטיפ', difficulty: Difficulty.ADVANCED, category: 'כלי' },
  { term: 'תסמונת דאון', difficulty: Difficulty.ADVANCED, category: 'מחלה' },
  { term: 'אנמיה חרמשית', difficulty: Difficulty.ADVANCED, category: 'מחלה' },
  { term: 'סוג דם', difficulty: Difficulty.ADVANCED, category: 'תכונה' },
];

export const CATEGORY_ICONS: Record<string, any> = {
  'מולקולרי': Dna,
  'מבנה': ComponentIcon,
  'תורשה': GitFork,
  'שינוי': Shuffle,
  'שונות': Shuffle,
  'חלוקה': Scissors,
  'תהליך': Activity,
  'כלי': Grid3x3,
  'חלבון': Layers,
  'בקרה': ShieldCheck,
  'טכנולוגיה': Bug,
  'מחלה': Activity,
  'תכונה': Copy
};