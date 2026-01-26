import { Difficulty, GeneticTerm, GameTopic } from './types';
import { 
  Dna, Activity, Grid3x3, Copy, Scissors, GitFork, Bug, Component as ComponentIcon, 
  Layers, ShieldCheck, Shuffle, Leaf, Globe, Thermometer, Droplets, Users, 
  HeartPulse, Brain, Microscope, FlaskConical, Atom, Telescope, Book, 
  Landmark, Gavel, Flag, Map, Calculator, Computer, Briefcase, Music, 
  Palette, Dumbbell, Scroll, Zap, Scale, Coins
} from 'lucide-react';

export const TOTAL_STEPS = 70;

export const TEAM_COLORS = [
  { name: 'כחול', value: 'blue', hex: '#2563eb', shadow: '#1e40af', text: 'white' },
  { name: 'ירוק', value: 'green', hex: '#16a34a', shadow: '#15803d', text: 'white' },
  { name: 'אדום', value: 'red', hex: '#dc2626', shadow: '#991b1b', text: 'white' },
  { name: 'צהוב', value: 'yellow', hex: '#ca8a04', shadow: '#854d0e', text: 'white' },
  { name: 'לבן', value: 'white', hex: '#f1f5f9', shadow: '#94a3b8', text: 'black' },
  { name: 'סגול', value: 'purple', hex: '#9333ea', shadow: '#6b21a8', text: 'white' },
];

export const AVAILABLE_GRADES = [
  'חטיבת ביניים (ז׳-ט׳)',
  'תיכון (י׳-י״ב)',
  'מבוגרים / העשרה'
];

// --- Topic 1: Genetics (Original) ---
const GENETICS_TERMS: GeneticTerm[] = [
  { term: 'DNA', difficulty: Difficulty.BASIC, category: 'מולקולרי' },
  { term: 'גן', difficulty: Difficulty.BASIC, category: 'מולקולרי' },
  { term: 'כרומוזום', difficulty: Difficulty.BASIC, category: 'מבנה' },
  { term: 'אלל', difficulty: Difficulty.BASIC, category: 'תורשה' },
  { term: 'גרעין התא', difficulty: Difficulty.BASIC, category: 'מבנה' },
  { term: 'מוטציה', difficulty: Difficulty.BASIC, category: 'שינוי' },
  { term: 'גנוטיפ', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'פנוטיפ', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'הומוזיגוט', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'הטרוזיגוט', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'דומיננטי', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'רצסיבי', difficulty: Difficulty.INTERMEDIATE, category: 'תורשה' },
  { term: 'מיוזה', difficulty: Difficulty.INTERMEDIATE, category: 'חלוקה' },
  { term: 'שעתוק', difficulty: Difficulty.INTERMEDIATE, category: 'תהליך' },
  { term: 'תרגום', difficulty: Difficulty.INTERMEDIATE, category: 'תהליך' },
  { term: 'ריבוע פנט', difficulty: Difficulty.ADVANCED, category: 'כלי' },
  { term: 'תאחיזה', difficulty: Difficulty.ADVANCED, category: 'תורשה' },
  { term: 'כרומוזום הומולוגי', difficulty: Difficulty.ADVANCED, category: 'מבנה' },
  { term: 'שחלוף', difficulty: Difficulty.ADVANCED, category: 'תהליך' },
  { term: 'אנמיה חרמשית', difficulty: Difficulty.ADVANCED, category: 'מחלה' },
];

// --- Topic 2: Ecology ---
const ECOLOGY_TERMS: GeneticTerm[] = [
  { term: 'מערכת אקולוגית', difficulty: Difficulty.BASIC, category: 'סביבה' },
  { term: 'שרשרת מזון', difficulty: Difficulty.BASIC, category: 'אנרגיה' },
  { term: 'יצרן', difficulty: Difficulty.BASIC, category: 'תפקיד' },
  { term: 'צרכן', difficulty: Difficulty.BASIC, category: 'תפקיד' },
  { term: 'פוטוסינתזה', difficulty: Difficulty.INTERMEDIATE, category: 'תהליך' },
  { term: 'התחממות גלובלית', difficulty: Difficulty.INTERMEDIATE, category: 'סביבה' },
  { term: 'מין פולש', difficulty: Difficulty.INTERMEDIATE, category: 'אוכלוסיה' },
  { term: 'מגוון ביולוגי', difficulty: Difficulty.ADVANCED, category: 'סביבה' },
  { term: 'סימביוזה', difficulty: Difficulty.ADVANCED, category: 'יחסי גומלין' },
  { term: 'טביעת רגל פחמנית', difficulty: Difficulty.ADVANCED, category: 'סביבה' },
];

// --- Topic 3: Human Body ---
const BODY_TERMS: GeneticTerm[] = [
  { term: 'לב', difficulty: Difficulty.BASIC, category: 'איברים' },
  { term: 'ריאות', difficulty: Difficulty.BASIC, category: 'איברים' },
  { term: 'מוח', difficulty: Difficulty.BASIC, category: 'איברים' },
  { term: 'מערכת העיכול', difficulty: Difficulty.BASIC, category: 'מערכות' },
  { term: 'עורק', difficulty: Difficulty.INTERMEDIATE, category: 'כלי דם' },
  { term: 'וריד', difficulty: Difficulty.INTERMEDIATE, category: 'כלי דם' },
  { term: 'תא דם אדום', difficulty: Difficulty.INTERMEDIATE, category: 'תאים' },
  { term: 'מערכת החיסון', difficulty: Difficulty.INTERMEDIATE, category: 'מערכות' },
  { term: 'הורמון', difficulty: Difficulty.ADVANCED, category: 'ביוכימיה' },
  { term: 'נוירון', difficulty: Difficulty.ADVANCED, category: 'תאים' },
];

// --- Topic 4: The Cell ---
const CELL_TERMS: GeneticTerm[] = [
  { term: 'קרום התא', difficulty: Difficulty.BASIC, category: 'אברונים' },
  { term: 'ציטופלזמה', difficulty: Difficulty.BASIC, category: 'מבנה' },
  { term: 'מיטוכונדריה', difficulty: Difficulty.INTERMEDIATE, category: 'אברונים' },
  { term: 'ריבוזום', difficulty: Difficulty.INTERMEDIATE, category: 'אברונים' },
  { term: 'כלורופלסט', difficulty: Difficulty.INTERMEDIATE, category: 'אברונים' },
  { term: 'דופן התא', difficulty: Difficulty.INTERMEDIATE, category: 'מבנה' },
  { term: 'אוסמוזה', difficulty: Difficulty.ADVANCED, category: 'תהליך' },
  { term: 'דיפוזיה', difficulty: Difficulty.ADVANCED, category: 'תהליך' },
  { term: 'ATP', difficulty: Difficulty.ADVANCED, category: 'אנרגיה' },
  { term: 'אנזים', difficulty: Difficulty.ADVANCED, category: 'חלבון' },
];

// --- Topic 5: Chemistry ---
const CHEMISTRY_TERMS: GeneticTerm[] = [
  { term: 'אטום', difficulty: Difficulty.BASIC, category: 'חומר' },
  { term: 'מולקולה', difficulty: Difficulty.BASIC, category: 'חומר' },
  { term: 'מצב צבירה', difficulty: Difficulty.BASIC, category: 'תכונות' },
  { term: 'חמצן', difficulty: Difficulty.BASIC, category: 'יסודות' },
  { term: 'טבלה מחזורית', difficulty: Difficulty.INTERMEDIATE, category: 'כלי' },
  { term: 'קשר כימי', difficulty: Difficulty.INTERMEDIATE, category: 'מבנה' },
  { term: 'חומצה', difficulty: Difficulty.INTERMEDIATE, category: 'חומר' },
  { term: 'בסיס', difficulty: Difficulty.INTERMEDIATE, category: 'חומר' },
  { term: 'תגובה כימית', difficulty: Difficulty.ADVANCED, category: 'תהליך' },
  { term: 'איזוטופ', difficulty: Difficulty.ADVANCED, category: 'מבנה' },
];

// --- Topic 6: Physics ---
const PHYSICS_TERMS: GeneticTerm[] = [
  { term: 'כוח', difficulty: Difficulty.BASIC, category: 'מכניקה' },
  { term: 'מהירות', difficulty: Difficulty.BASIC, category: 'תנועה' },
  { term: 'אנרגיה', difficulty: Difficulty.BASIC, category: 'אנרגיה' },
  { term: 'מסה', difficulty: Difficulty.BASIC, category: 'חומר' },
  { term: 'כוח משיכה', difficulty: Difficulty.INTERMEDIATE, category: 'כוחות' },
  { term: 'חשמל', difficulty: Difficulty.INTERMEDIATE, category: 'חשמל' },
  { term: 'מגנט', difficulty: Difficulty.INTERMEDIATE, category: 'מגנטיות' },
  { term: 'חיכוך', difficulty: Difficulty.INTERMEDIATE, category: 'כוחות' },
  { term: 'אנרגיה קינטית', difficulty: Difficulty.ADVANCED, category: 'אנרגיה' },
  { term: 'חוקי ניוטון', difficulty: Difficulty.ADVANCED, category: 'חוקים' },
];

// --- Topic 7: Space ---
const SPACE_TERMS: GeneticTerm[] = [
  { term: 'שמש', difficulty: Difficulty.BASIC, category: 'כוכבים' },
  { term: 'ירח', difficulty: Difficulty.BASIC, category: 'לוויינים' },
  { term: 'כדור הארץ', difficulty: Difficulty.BASIC, category: 'כוכבי לכת' },
  { term: 'מערכת השמש', difficulty: Difficulty.BASIC, category: 'מערכות' },
  { term: 'כוכב לכת', difficulty: Difficulty.INTERMEDIATE, category: 'גופים' },
  { term: 'אסטרונאוט', difficulty: Difficulty.INTERMEDIATE, category: 'אדם' },
  { term: 'גלקסיה', difficulty: Difficulty.INTERMEDIATE, category: 'מבנה' },
  { term: 'ליקוי חמה', difficulty: Difficulty.ADVANCED, category: 'תופעות' },
  { term: 'חור שחור', difficulty: Difficulty.ADVANCED, category: 'גופים' },
  { term: 'שנת אור', difficulty: Difficulty.ADVANCED, category: 'מידות' },
];

// --- Topic 8: Tanakh (Bible) ---
const BIBLE_TERMS: GeneticTerm[] = [
  { term: 'אברהם אבינו', difficulty: Difficulty.BASIC, category: 'אבות' },
  { term: 'משה רבנו', difficulty: Difficulty.BASIC, category: 'מנהיגים' },
  { term: 'יציאת מצרים', difficulty: Difficulty.BASIC, category: 'אירועים' },
  { term: 'תיבת נוח', difficulty: Difficulty.BASIC, category: 'סיפורים' },
  { term: 'דוד המלך', difficulty: Difficulty.INTERMEDIATE, category: 'מלכים' },
  { term: 'עשרת הדיברות', difficulty: Difficulty.INTERMEDIATE, category: 'חוקים' },
  { term: 'נביא', difficulty: Difficulty.INTERMEDIATE, category: 'תפקיד' },
  { term: 'בית המקדש', difficulty: Difficulty.INTERMEDIATE, category: 'מקומות' },
  { term: 'שיבת ציון', difficulty: Difficulty.ADVANCED, category: 'אירועים' },
  { term: 'פלשתים', difficulty: Difficulty.ADVANCED, category: 'עמים' },
];

// --- Topic 9: Jewish History ---
const HISTORY_TERMS: GeneticTerm[] = [
  { term: 'הצהרת בלפור', difficulty: Difficulty.INTERMEDIATE, category: 'ציונות' },
  { term: 'השואה', difficulty: Difficulty.BASIC, category: 'אירועים' },
  { term: 'מלחמת העצמאות', difficulty: Difficulty.BASIC, category: 'מלחמות' },
  { term: 'דוד בן גוריון', difficulty: Difficulty.BASIC, category: 'אישים' },
  { term: 'הרצל', difficulty: Difficulty.BASIC, category: 'אישים' },
  { term: 'העלייה הראשונה', difficulty: Difficulty.INTERMEDIATE, category: 'עליות' },
  { term: 'המנדט הבריטי', difficulty: Difficulty.INTERMEDIATE, category: 'תקופות' },
  { term: 'הכרזת העצמאות', difficulty: Difficulty.INTERMEDIATE, category: 'מסמכים' },
  { term: 'מבצע אנטבה', difficulty: Difficulty.ADVANCED, category: 'מבצעים' },
  { term: 'הסכמי אוסלו', difficulty: Difficulty.ADVANCED, category: 'הסכמים' },
];

// --- Topic 10: Civics ---
const CIVICS_TERMS: GeneticTerm[] = [
  { term: 'דמוקרטיה', difficulty: Difficulty.BASIC, category: 'עקרונות' },
  { term: 'בחירות', difficulty: Difficulty.BASIC, category: 'תהליך' },
  { term: 'כנסת', difficulty: Difficulty.BASIC, category: 'מוסדות' },
  { term: 'ממשלה', difficulty: Difficulty.BASIC, category: 'רשויות' },
  { term: 'ראש הממשלה', difficulty: Difficulty.BASIC, category: 'תפקיד' },
  { term: 'מגילת העצמאות', difficulty: Difficulty.INTERMEDIATE, category: 'מסמכים' },
  { term: 'זכויות האדם', difficulty: Difficulty.INTERMEDIATE, category: 'זכויות' },
  { term: 'הפרדת רשויות', difficulty: Difficulty.ADVANCED, category: 'עקרונות' },
  { term: 'בג״ץ', difficulty: Difficulty.ADVANCED, category: 'מוסדות' },
  { term: 'קואליציה', difficulty: Difficulty.ADVANCED, category: 'פוליטיקה' },
];

// --- Topic 11: Geography of Israel ---
const ISRAEL_GEO_TERMS: GeneticTerm[] = [
  { term: 'ירושלים', difficulty: Difficulty.BASIC, category: 'ערים' },
  { term: 'ים המלח', difficulty: Difficulty.BASIC, category: 'ימים' },
  { term: 'הכנרת', difficulty: Difficulty.BASIC, category: 'ימים' },
  { term: 'החרמון', difficulty: Difficulty.BASIC, category: 'הרים' },
  { term: 'הנגב', difficulty: Difficulty.BASIC, category: 'אזורים' },
  { term: 'מישור החוף', difficulty: Difficulty.INTERMEDIATE, category: 'אזורים' },
  { term: 'נחל הירקון', difficulty: Difficulty.INTERMEDIATE, category: 'נחלים' },
  { term: 'הגליל', difficulty: Difficulty.INTERMEDIATE, category: 'אזורים' },
  { term: 'מכתש רמון', difficulty: Difficulty.ADVANCED, category: 'תופעות' },
  { term: 'השבר הסורי אפריקאי', difficulty: Difficulty.ADVANCED, category: 'גיאולוגיה' },
];

// --- Topic 12: Hebrew Language ---
const LANGUAGE_TERMS: GeneticTerm[] = [
  { term: 'נושא', difficulty: Difficulty.BASIC, category: 'תחביר' },
  { term: 'נשוא', difficulty: Difficulty.BASIC, category: 'תחביר' },
  { term: 'שם עצם', difficulty: Difficulty.BASIC, category: 'חלקי דיבר' },
  { term: 'פועל', difficulty: Difficulty.BASIC, category: 'חלקי דיבר' },
  { term: 'בניינים', difficulty: Difficulty.INTERMEDIATE, category: 'דקדוק' },
  { term: 'שורש', difficulty: Difficulty.INTERMEDIATE, category: 'דקדוק' },
  { term: 'מילת קישור', difficulty: Difficulty.INTERMEDIATE, category: 'תחביר' },
  { term: 'סמיכות', difficulty: Difficulty.ADVANCED, category: 'דקדוק' },
  { term: 'דימוי', difficulty: Difficulty.ADVANCED, category: 'אמצעים ספרותיים' },
  { term: 'ניב', difficulty: Difficulty.ADVANCED, category: 'אוצר מילים' },
];

// --- Topic 13: Literature ---
const LIT_TERMS: GeneticTerm[] = [
  { term: 'חרוז', difficulty: Difficulty.BASIC, category: 'שירה' },
  { term: 'משל', difficulty: Difficulty.BASIC, category: 'סוגות' },
  { term: 'גיבור', difficulty: Difficulty.BASIC, category: 'דמויות' },
  { term: 'סיפור קצר', difficulty: Difficulty.BASIC, category: 'סוגות' },
  { term: 'אנטיגונה', difficulty: Difficulty.INTERMEDIATE, category: 'מחזות' },
  { term: 'הנסיך הקטן', difficulty: Difficulty.INTERMEDIATE, category: 'ספרים' },
  { term: 'חיים נחמן ביאליק', difficulty: Difficulty.INTERMEDIATE, category: 'יוצרים' },
  { term: 'מוטיב', difficulty: Difficulty.ADVANCED, category: 'ניתוח' },
  { term: 'מטאפורה', difficulty: Difficulty.ADVANCED, category: 'אמצעים' },
  { term: 'טרגדיה', difficulty: Difficulty.ADVANCED, category: 'סוגות' },
];

// --- Topic 14: Math ---
const MATH_TERMS: GeneticTerm[] = [
  { term: 'משולש', difficulty: Difficulty.BASIC, category: 'גיאומטריה' },
  { term: 'מעגל', difficulty: Difficulty.BASIC, category: 'גיאומטריה' },
  { term: 'חיבור', difficulty: Difficulty.BASIC, category: 'פעולות' },
  { term: 'כפל', difficulty: Difficulty.BASIC, category: 'פעולות' },
  { term: 'שבר', difficulty: Difficulty.INTERMEDIATE, category: 'מספרים' },
  { term: 'אחוזים', difficulty: Difficulty.INTERMEDIATE, category: 'מספרים' },
  { term: 'משוואה', difficulty: Difficulty.INTERMEDIATE, category: 'אלגברה' },
  { term: 'פונקציה', difficulty: Difficulty.ADVANCED, category: 'אלגברה' },
  { term: 'משפט פיתגורס', difficulty: Difficulty.ADVANCED, category: 'משפטים' },
  { term: 'נגזרת', difficulty: Difficulty.ADVANCED, category: 'חדו״א' },
];

// --- Topic 15: Computer Science ---
const CS_TERMS: GeneticTerm[] = [
  { term: 'אלגוריתם', difficulty: Difficulty.BASIC, category: 'יסודות' },
  { term: 'אינטרנט', difficulty: Difficulty.BASIC, category: 'רשתות' },
  { term: 'מקלדת', difficulty: Difficulty.BASIC, category: 'חומרה' },
  { term: 'מסך', difficulty: Difficulty.BASIC, category: 'חומרה' },
  { term: 'קוד', difficulty: Difficulty.INTERMEDIATE, category: 'תכנות' },
  { term: 'באג', difficulty: Difficulty.INTERMEDIATE, category: 'תכנות' },
  { term: 'לולאה', difficulty: Difficulty.INTERMEDIATE, category: 'תכנות' },
  { term: 'בינה מלאכותית', difficulty: Difficulty.ADVANCED, category: 'טכנולוגיה' },
  { term: 'שרת', difficulty: Difficulty.ADVANCED, category: 'רשתות' },
  { term: 'הצפנה', difficulty: Difficulty.ADVANCED, category: 'אבטחה' },
];

// --- Topic 16: Israeli Culture ---
const CULTURE_TERMS: GeneticTerm[] = [
  { term: 'פלאפל', difficulty: Difficulty.BASIC, category: 'אוכל' },
  { term: 'חומוס', difficulty: Difficulty.BASIC, category: 'אוכל' },
  { term: 'אירוויזיון', difficulty: Difficulty.BASIC, category: 'מוזיקה' },
  { term: 'יום העצמאות', difficulty: Difficulty.BASIC, category: 'חגים' },
  { term: 'שבת', difficulty: Difficulty.BASIC, category: 'מסורת' },
  { term: 'קיבוץ', difficulty: Difficulty.INTERMEDIATE, category: 'חברה' },
  { term: 'צבא (צה״ל)', difficulty: Difficulty.INTERMEDIATE, category: 'חברה' },
  { term: 'נועה קירל', difficulty: Difficulty.INTERMEDIATE, category: 'אישים' },
  { term: 'הגשש החיוור', difficulty: Difficulty.ADVANCED, category: 'בידור' },
  { term: 'נעמי שמר', difficulty: Difficulty.ADVANCED, category: 'מוזיקה' },
];

// --- Topic 17: Historical Figures (General) ---
const FIGURES_TERMS: GeneticTerm[] = [
  { term: 'אלברט איינשטיין', difficulty: Difficulty.BASIC, category: 'מדע' },
  { term: 'לאונרדו דה וינצ׳י', difficulty: Difficulty.BASIC, category: 'אומנות' },
  { term: 'וויליאם שייקספיר', difficulty: Difficulty.INTERMEDIATE, category: 'ספרות' },
  { term: 'אברהם לינקולן', difficulty: Difficulty.INTERMEDIATE, category: 'מנהיגים' },
  { term: 'מארי קירי', difficulty: Difficulty.INTERMEDIATE, category: 'מדע' },
  { term: 'נפוליאון', difficulty: Difficulty.INTERMEDIATE, category: 'מנהיגים' },
  { term: 'מרטין לותר קינג', difficulty: Difficulty.ADVANCED, category: 'מנהיגים' },
  { term: 'קליאופטרה', difficulty: Difficulty.ADVANCED, category: 'מנהיגים' },
  { term: 'גליליאו גליליי', difficulty: Difficulty.ADVANCED, category: 'מדע' },
  { term: 'מוצרט', difficulty: Difficulty.ADVANCED, category: 'מוזיקה' },
];

// --- Topic 18: Security & IDF ---
const IDF_TERMS: GeneticTerm[] = [
  { term: 'טירונות', difficulty: Difficulty.BASIC, category: 'מסלול' },
  { term: 'מדים', difficulty: Difficulty.BASIC, category: 'ציוד' },
  { term: 'מפקד', difficulty: Difficulty.BASIC, category: 'דרגות' },
  { term: 'כיפת ברזל', difficulty: Difficulty.INTERMEDIATE, category: 'אמצעי לחימה' },
  { term: 'צו ראשון', difficulty: Difficulty.INTERMEDIATE, category: 'גיוס' },
  { term: 'חיל האוויר', difficulty: Difficulty.INTERMEDIATE, category: 'חילות' },
  { term: 'גולני', difficulty: Difficulty.INTERMEDIATE, category: 'חטיבות' },
  { term: 'רמטכ״ל', difficulty: Difficulty.ADVANCED, category: 'תפקיד' },
  { term: 'סיירת מטכ״ל', difficulty: Difficulty.ADVANCED, category: 'יחידות' },
  { term: 'מודיעין', difficulty: Difficulty.ADVANCED, category: 'חילות' },
];

// --- Topic 19: Economics ---
const ECON_TERMS: GeneticTerm[] = [
  { term: 'כסף', difficulty: Difficulty.BASIC, category: 'כללי' },
  { term: 'בנק', difficulty: Difficulty.BASIC, category: 'מוסדות' },
  { term: 'מחיר', difficulty: Difficulty.BASIC, category: 'מסחר' },
  { term: 'משכורת', difficulty: Difficulty.BASIC, category: 'עבודה' },
  { term: 'אינפלציה', difficulty: Difficulty.INTERMEDIATE, category: 'מושגים' },
  { term: 'ריבית', difficulty: Difficulty.INTERMEDIATE, category: 'בנקאות' },
  { term: 'בורסה', difficulty: Difficulty.INTERMEDIATE, category: 'שוק ההון' },
  { term: 'תקציב', difficulty: Difficulty.INTERMEDIATE, category: 'ניהול' },
  { term: 'היצע וביקוש', difficulty: Difficulty.ADVANCED, category: 'עקרונות' },
  { term: 'מס הכנסה', difficulty: Difficulty.ADVANCED, category: 'מיסים' },
];

// --- Topic 20: World Geography ---
const WORLD_GEO_TERMS: GeneticTerm[] = [
  { term: 'ארצות הברית', difficulty: Difficulty.BASIC, category: 'מדינות' },
  { term: 'סין', difficulty: Difficulty.BASIC, category: 'מדינות' },
  { term: 'פריז', difficulty: Difficulty.BASIC, category: 'ערים' },
  { term: 'לונדון', difficulty: Difficulty.BASIC, category: 'ערים' },
  { term: 'האוורסט', difficulty: Difficulty.INTERMEDIATE, category: 'הרים' },
  { term: 'האמזונס', difficulty: Difficulty.INTERMEDIATE, category: 'נהרות' },
  { term: 'אנטארקטיקה', difficulty: Difficulty.INTERMEDIATE, category: 'יבשות' },
  { term: 'משולש ברמודה', difficulty: Difficulty.ADVANCED, category: 'מקומות' },
  { term: 'תעלת סואץ', difficulty: Difficulty.ADVANCED, category: 'מקומות' },
  { term: 'קו המשווה', difficulty: Difficulty.ADVANCED, category: 'קווי רוחב' },
];


export const GAME_CONTENT: Record<string, GameTopic> = {
  'genetics': { id: 'genetics', name: 'גנטיקה', description: 'תורשה, DNA, ומושגי יסוד.', terms: GENETICS_TERMS },
  'ecology': { id: 'ecology', name: 'אקולוגיה', description: 'סביבה וקיימות.', terms: ECOLOGY_TERMS },
  'body': { id: 'body', name: 'גוף האדם', description: 'מערכות ואיברים.', terms: BODY_TERMS },
  'cell': { id: 'cell', name: 'התא', description: 'מבנה התא ואברונים.', terms: CELL_TERMS },
  'chemistry': { id: 'chemistry', name: 'כימיה', description: 'חומרים ותגובות.', terms: CHEMISTRY_TERMS },
  'physics': { id: 'physics', name: 'פיזיקה', description: 'כוחות ואנרגיה.', terms: PHYSICS_TERMS },
  'space': { id: 'space', name: 'חלל', description: 'מערכת השמש והיקום.', terms: SPACE_TERMS },
  'bible': { id: 'bible', name: 'תנ״ך', description: 'דמויות וסיפורים.', terms: BIBLE_TERMS },
  'history': { id: 'history', name: 'היסטוריה', description: 'ציונות ועם ישראל.', terms: HISTORY_TERMS },
  'civics': { id: 'civics', name: 'אזרחות', description: 'דמוקרטיה וממשל.', terms: CIVICS_TERMS },
  'israel_geo': { id: 'israel_geo', name: 'גיאוגרפיה (ישראל)', description: 'ארץ ישראל.', terms: ISRAEL_GEO_TERMS },
  'language': { id: 'language', name: 'לשון', description: 'דקדוק ותחביר.', terms: LANGUAGE_TERMS },
  'literature': { id: 'literature', name: 'ספרות', description: 'יצירות ומונחים.', terms: LIT_TERMS },
  'math': { id: 'math', name: 'מתמטיקה', description: 'גיאומטריה ואלגברה.', terms: MATH_TERMS },
  'cs': { id: 'cs', name: 'מחשבים', description: 'טכנולוגיה וקוד.', terms: CS_TERMS },
  'culture': { id: 'culture', name: 'תרבות ישראל', description: 'הווי ישראלי.', terms: CULTURE_TERMS },
  'figures': { id: 'figures', name: 'אישים', description: 'דמויות היסטוריות.', terms: FIGURES_TERMS },
  'idf': { id: 'idf', name: 'צבא וביטחון', description: 'צה״ל.', terms: IDF_TERMS },
  'economics': { id: 'economics', name: 'כלכלה', description: 'כסף ועסקים.', terms: ECON_TERMS },
  'world_geo': { id: 'world_geo', name: 'גיאוגרפיה (עולם)', description: 'מדינות וערים.', terms: WORLD_GEO_TERMS },
};

export const CATEGORY_ICONS: Record<string, any> = {
  // Science
  'מולקולרי': Dna,
  'מבנה': ComponentIcon,
  'תורשה': GitFork,
  'שינוי': Shuffle,
  'חלוקה': Scissors,
  'תהליך': Activity,
  'כלי': Grid3x3,
  'חלבון': Layers,
  'בקרה': ShieldCheck,
  'טכנולוגיה': Bug,
  'מחלה': HeartPulse,
  'תכונה': Copy,
  'איברים': HeartPulse,
  'מערכות': Activity,
  'כלי דם': Activity,
  'תאים': Microscope,
  'ביוכימיה': FlaskConical,
  'אברונים': ComponentIcon,
  'אנרגיה': Zap,
  'חומר': Atom,
  'תכונות': Layers,
  'יסודות': Atom,
  'מכניקה': Dumbbell,
  'תנועה': Activity,
  'כוחות': Dumbbell,
  'חשמל': Zap,
  'מגנטיות': Zap,
  'חוקים': Scale,
  'כוכבים': Telescope,
  'לוויינים': Telescope,
  'כוכבי לכת': Globe,
  'גופים': Telescope,
  'אדם': Users,
  'תופעות': Activity,
  'מידות': Scale,

  // Humanities
  'אבות': Users,
  'מנהיגים': Landmark,
  'אירועים': Flag,
  'סיפורים': Book,
  'מלכים': Users,
  'מקומות': Map,
  'עמים': Users,
  'ציונות': Flag,
  'מלחמות': ShieldCheck,
  'אישים': Users,
  'עליות': Flag,
  'תקופות': Activity,
  'מסמכים': Scroll,
  'מבצעים': ShieldCheck,
  'הסכמים': Scroll,
  'עקרונות': Scale,
  'מוסדות': Landmark,
  'רשויות': Landmark,
  'תפקיד': Briefcase,
  'זכויות': ShieldCheck,
  'פוליטיקה': Users,

  // Geo
  'ערים': Landmark,
  'ימים': Droplets,
  'הרים': Activity,
  'אזורים': Map,
  'נחלים': Droplets,
  'גיאולוגיה': Activity,
  'נהרות': Droplets,
  'יבשות': Globe,
  'קווי רוחב': Globe,
  'מדינות': Flag,

  // Language & Lit
  'תחביר': Book,
  'חלקי דיבר': Book,
  'דקדוק': Book,
  'אמצעים ספרותיים': Palette,
  'אוצר מילים': Book,
  'שירה': Music,
  'סוגות': Book,
  'דמויות': Users,
  'מחזות': Users,
  'ספרים': Book,
  'יוצרים': Palette,
  'ניתוח': Activity,
  'אמצעים': Palette,

  // Math & CS
  'גיאומטריה': Grid3x3,
  'פעולות': Calculator,
  'מספרים': Calculator,
  'אלגברה': Activity,
  'משפטים': Scroll,
  'חדו״א': Activity,
  'רשתות': Globe,
  'חומרה': Computer,
  'תכנות': Computer,
  'אבטחה': ShieldCheck,

  // General / Culture
  'אוכל': Leaf,
  'מוזיקה': Music,
  'חגים': Flag,
  'מסורת': Scroll,
  'חברה': Users,
  'בידור': Users,
  'מדע': Microscope,
  'אומנות': Palette,
  'ספרות': Book,
  'מסלול': Flag,
  'ציוד': Briefcase,
  'דרגות': ShieldCheck,
  'אמצעי לחימה': ShieldCheck,
  'גיוס': Users,
  'חילות': Flag,
  'חטיבות': Flag,
  'יחידות': Users,
  'כללי': Coins,
  'מסחר': Coins,
  'עבודה': Briefcase,
  'מושגים': Book,
  'בנקאות': Landmark,
  'שוק ההון': Activity,
  'ניהול': Briefcase,
  'מיסים': Coins,

  // Ecology
  'סביבה': Globe,
  'אוכלוסיה': Users,
  'יחסי גומלין': GitFork
};