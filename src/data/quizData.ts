import { QuizQuestion } from '../types/tcm';

export const TCM_QUIZZES: QuizQuestion[] = [
  // Basic Theory
  {
    id: 'bt-1',
    discipline: 'basic-theory',
    question: '五行學說中，「木」所對應的五臟、五志與五味分別是？',
    options: [
      '心、喜、苦',
      '肝、怒、酸',
      '脾、思、甘',
      '肺、悲、辛'
    ],
    correctIndex: 1,
    explanation: '木曰曲直，東方生風，風生木，木生酸，酸生肝，肝主筋，在志為怒。因此肝屬木，五志為怒，五味為酸。'
  },
  {
    id: 'bt-2',
    discipline: 'basic-theory',
    question: '中醫稱哪一個臟為「後天之本、氣血生化之源」？',
    options: [
      '心臟',
      '腎臟',
      '脾臟',
      '肝臟'
    ],
    correctIndex: 2,
    explanation: '脾主運化水穀精微，人體出生後賴脾胃消化吸收飲食營養以化生氣血津液，故稱脾為「後天之本」；而腎藏先天之精，為「先天之本」。'
  },
  {
    id: 'bt-3',
    discipline: 'basic-theory',
    question: '行於脈外，具有溫養肌肉、司汗孔開闔、防禦外邪功能之氣稱為？',
    options: [
      '元氣',
      '宗氣',
      '營氣',
      '衛氣'
    ],
    correctIndex: 3,
    explanation: '衛氣者，慓疾滑利，不能入於脈也，循皮膚之中，分肉之間，熏於肓膜，散於胸腹；司汗孔開闔，護衛肌表以禦外邪。'
  },
  // Diagnostics
  {
    id: 'diag-1',
    discipline: 'diagnostics',
    question: '根據舌面臟腑分區，舌尖部主要反映哪兩個臟器的病變？',
    options: [
      '心與肺',
      '脾與胃',
      '肝與膽',
      '腎與膀胱'
    ],
    correctIndex: 0,
    explanation: '舌面臟腑分區規律：舌尖屬心肺，舌中屬脾胃，舌兩側屬肝膽，舌根屬腎。'
  },
  {
    id: 'diag-2',
    discipline: 'diagnostics',
    question: '切脈時指下感覺「往來流利，應指圓滑，如珠走盤」，最可能為哪種脈象？',
    options: [
      '弦脈',
      '滑脈',
      '澀脈',
      '沉脈'
    ],
    correctIndex: 1,
    explanation: '滑脈往來流利，如盤走珠，應指圓滑，主痰飲、食滯、實熱，亦見於健康青壯年或懷孕婦女。'
  },
  {
    id: 'diag-3',
    discipline: 'diagnostics',
    question: '患者畏寒肢冷、面色蒼白、大便清稀、喜溫喜按、舌淡苔白、脈遲無力，屬於八綱辨證中的？',
    options: [
      '表熱實證',
      '裡寒虛證',
      '表寒實證',
      '裡熱虛證'
    ],
    correctIndex: 1,
    explanation: '病位在內（裡），見畏寒冷痛喜溫屬寒（寒），喜按且脈無力屬正氣不足（虛），綜合診斷為「裡寒虛證」（如脾胃虛寒）。'
  },
  // Materia Medica
  {
    id: 'herb-1',
    discipline: 'materia-medica',
    question: '五味中具有「能散、能行」，主要用於發散表邪與行氣活血的是？',
    options: [
      '酸味',
      '苦味',
      '辛味',
      '鹹味'
    ],
    correctIndex: 2,
    explanation: '辛能散、能行。如生薑麻黃辛散解表，川芎辛香走竄行氣活血。酸主收澀，苦主瀉燥，鹹主軟堅瀉下。'
  },
  {
    id: 'herb-2',
    discipline: 'materia-medica',
    question: '「當歸補血湯」中黃耆與當歸的最佳經典配伍比例為？',
    options: [
      '1 : 1',
      '5 : 1 (黃耆一兩，當歸二錢)',
      '1 : 5',
      '3 : 2'
    ],
    correctIndex: 1,
    explanation: '李東垣《內外傷辨惑論》當歸補血湯，重用黃耆一兩，當歸二錢（比例5:1），旨在「陽生陰長，氣旺血生」，體現大補脾肺之氣以生血之精微。'
  },
  // Formulary
  {
    id: 'form-1',
    discipline: 'formulary',
    question: '在方劑配伍中，「君臣佐使」裡負責引導諸藥直達病位，或調和諸藥藥性的是？',
    options: [
      '君藥',
      '臣藥',
      '佐藥',
      '使藥'
    ],
    correctIndex: 3,
    explanation: '使藥有二：一為引經藥，引領諸藥直達病所；二為調和藥，調和全方諸藥烈性寒溫（如甘草）。'
  },
  {
    id: 'form-2',
    discipline: 'formulary',
    question: '被譽為「群方之祖」的桂枝湯中，桂枝與芍藥的配伍比例及主要用意是？',
    options: [
      '桂枝倍於芍藥，專事發汗散寒',
      '桂枝與芍藥等量 (一散一收，調和營衛)',
      '芍藥倍於桂枝，專主斂陰止汗',
      '純粹利用芍藥緩和桂枝之熱毒'
    ],
    correctIndex: 1,
    explanation: '桂枝湯中桂枝三兩、芍藥三兩（等量配伍）。桂枝辛溫通衛散邪，芍藥酸苦斂陰和營；一散一收，散表寒而不傷陰，斂營陰而不留邪，深得調和營衛之妙。'
  },
  // Acupuncture
  {
    id: 'acu-1',
    discipline: 'acupuncture',
    question: '中醫著名針灸《四總穴歌》中，「肚腹」與「面口」分別對應哪兩個主治要穴？',
    options: [
      '肚腹三里留，面口合谷收',
      '肚腹委中求，面口列缺收',
      '肚腹內關謀，面口太衝收',
      '肚腹三陰交，面口百會收'
    ],
    correctIndex: 0,
    explanation: '《四總穴歌》傳承：「肚腹三里留，腰背委中求，頭項尋列缺，面口合谷收。」肚腹疾患首選足三里，面口五官疾患首選合谷。'
  },
  {
    id: 'acu-2',
    discipline: 'acupuncture',
    question: '下列何穴為孕婦「絕對禁針」之要穴，因其催產下胎、興奮子宮之效極強？',
    options: [
      '足三里與百會',
      '合谷穴與三陰交穴',
      '內關與大椎',
      '神門與太淵'
    ],
    correctIndex: 1,
    explanation: '合谷行氣活血通經，三陰交統攝肝脾腎三經陰血，兩穴合用有強烈的下胎催產作用，孕婦針刺極易誘發子宮劇烈收縮導致流產，故為孕期大忌。'
  }
];
