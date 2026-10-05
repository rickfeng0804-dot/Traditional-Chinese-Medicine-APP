export type DisciplineId = 
  | 'basic-theory'
  | 'diagnostics'
  | 'materia-medica'
  | 'formulary'
  | 'acupuncture';

export interface DisciplineMeta {
  id: DisciplineId;
  name: string;
  englishName: string;
  summary: string;
  tagline: string;
  iconName: string;
  color: string;
  accentBg: string;
  topics: { id: string; title: string; desc: string }[];
}

// Basic Theory
export type FiveElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export interface FiveElementDetail {
  id: FiveElement;
  name: string;
  chinese: string;
  color: string;
  organZang: string; // 臟 (肝、心、脾、肺、腎)
  organFu: string;   // 腑 (膽、小腸、胃、大腸、膀胱)
  season: string;    // 季 (春、夏、長夏、秋、冬)
  direction: string; // 方位 (東、南、中、西、北)
  flavor: string;    // 味 (酸、苦、甘、辛、鹹)
  colorWord: string; // 色 (青、赤、黃、白、黑)
  emotion: string;   // 志 (怒、喜、思、悲、恐)
  senseOrgan: string;// 竅 (目、舌、口、鼻、耳)
  tissue: string;    // 體 (筋、脈、肉、皮毛、骨)
  generates: FiveElement; // 生
  controls: FiveElement;  // 剋
  characteristics: string;
  clinicalSignificance: string;
}

export interface OrganDetail {
  id: string;
  name: string;
  type: 'zang' | 'fu';
  element: FiveElement;
  officialRole: string; // 官職 (君主之官、將軍之官等)
  mainFunctions: string[];
  physiologicalCharacteristics: string;
  pairedOrgan: string; // 表裡臟腑
  manifestation: string; // 其華在、開竅於
  pathologySymptoms: string[];
}

export interface VitalSubstance {
  id: string;
  name: string;
  definition: string;
  classification?: { name: string; source: string; function: string }[];
  functions: string[];
  relationshipWithOthers: string;
  clinicalPatterns: { name: string; symptoms: string; principle: string }[];
}

// Diagnostics
export interface TongueSample {
  id: string;
  name: string;
  tongueBody: string; // 舌質
  tongueCoating: string; // 舌苔
  clinicalMeaning: string; // 主病
  features: string[];
  recommendedPrinciple: string;
}

export interface PulseSample {
  id: string;
  name: string;
  feelDescription: string; // 指下感覺 (比喻)
  clinicalMeaning: string; // 主病
  mechanism: string; // 機理
  category: string;
}

export interface DiagnosticMethod {
  id: 'wang' | 'wen' | 'wen_ask' | 'qie';
  name: string;
  title: string;
  meaning: string;
  coreConcepts: { title: string; content: string }[];
}

export interface EightPrinciplesCase {
  id: string;
  title: string;
  symptoms: string[];
  tongue: string;
  pulse: string;
  yinYang: '陰證' | '陽證';
  exteriorInterior: '表證' | '裡證';
  coldHeat: '寒證' | '熱證';
  deficiencyExcess: '虛證' | '實證';
  conclusion: string;
  analysis: string;
  treatmentPrinciple: string;
}

// Materia Medica
export type HerbNature = '寒' | '熱' | '溫' | '涼' | '平' | '微溫' | '微寒' | '大寒' | '大熱' | '苦寒' | '大熱 (有毒)' | '平 (炙溫)' | string;
export type HerbFlavor = '辛' | '甘' | '酸' | '苦' | '鹹' | '微苦' | '淡' | '澀' | string;
export type HerbDirection = '升' | '降' | '浮' | '沉' | '中' | string;

export interface HerbItem {
  id: string;
  name: string;
  pinyin: string;
  category: string;
  nature: HerbNature;
  flavors: HerbFlavor[];
  channels: string[]; // 歸經
  direction: HerbDirection;
  actions: string[];
  indications: string[];
  keyPairing: string;
  cautions: string;
  classicalQuote?: string;
}

// Formulary
export interface FormulaRole {
  role: '君' | '臣' | '佐' | '使';
  herbs: string[];
  purpose: string;
}

export interface FormulaItem {
  id: string;
  name: string;
  source: string; // 出處
  category: string;
  composition: FormulaRole[];
  actions: string; // 功用
  indications: string; // 主治
  tongueAndPulse: string; // 舌脈
  synergyAnalysis: string; // 配伍特點
  clinicalApplication: string; // 臨床發揮
}

// Acupuncture
export interface MeridianDetail {
  id: string;
  name: string;
  abbreviation: string;
  category: '正經' | '奇經';
  element?: FiveElement;
  pathway: string;
  organRelation: string;
  activeTime: string; // 子午流注時辰
  keyPoints: string[];
}

export interface AcupointItem {
  id: string;
  name: string;
  pinyin: string;
  meridian: string;
  location: string;
  findingMethod: string;
  actions: string[];
  indications: string[];
  needlingGuide: string;
  mnemonic?: string; // 歌訣
  bodyArea: '頭頸部' | '胸腹部' | '背腰部' | '上肢部' | '下肢部';
}

// Quiz
export interface QuizQuestion {
  id: string;
  discipline: DisciplineId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
