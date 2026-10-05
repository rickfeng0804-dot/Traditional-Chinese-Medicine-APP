import { FormulaItem } from '../types/tcm';

export const FORMULA_ROLES_EXPLANATION = [
  {
    role: '君藥 (主藥)',
    symbol: '君',
    meaning: '針對主病或主證起主要治療作用的藥物。',
    characteristics: '在全方中力量最強，藥味用量一般較重，不可或缺，如一軍之元帥。',
    example: '麻黃湯中之麻黃，桂枝湯中之桂枝，四物湯中之熟地黃。'
  },
  {
    role: '臣藥 (輔藥)',
    symbol: '臣',
    meaning: '輔助君藥加強治療主病、主證作用，或針對兼病、兼證起治療作用的藥物。',
    characteristics: '協助君藥發揮最大效能，如同良相輔弼國君。',
    example: '麻黃湯中桂枝助麻黃發汗解表；桂枝湯中白芍合桂枝調和營衛。'
  },
  {
    role: '佐藥 (佐助/佐制/反佐)',
    symbol: '佐',
    meaning: '分為三種重要機制：',
    subtypes: [
      { name: '佐助藥', desc: '配合君臣藥加強治療作用，或直接治療次要兼證。' },
      { name: '佐制藥', desc: '用以消除或減弱君藥、臣藥的毒性或烈性烈烈之偏。' },
      { name: '反佐藥', desc: '病勢危急甚重拒藥時，採用與君藥性味相反但能在體內起協同作用的藥物，以防格拒。' }
    ],
    characteristics: '思維精妙，既可保駕護航，又能拓展戰力，防患未然。',
    example: '桂枝湯中生薑大棗調和脾胃氣血為佐助；生薑佐制半夏之毒；熱因熱用加入少量苦寒藥為反佐。'
  },
  {
    role: '使藥 (引經/調和)',
    symbol: '使',
    meaning: '引導諸藥直達病變部位（引經藥），或協調、平衡全方諸藥烈性（調和藥）。',
    characteristics: '如軍中嚮導或外交使臣，使諸藥步調一致、靶向明確。',
    example: '桔梗載藥上浮入肺；牛膝引血下行；甘草調和諸藥藥性。'
  }
];

export const CLASSIC_FORMULAS: FormulaItem[] = [
  {
    id: 'guizhi-tang',
    name: '桂枝湯 (群方之祖 · 仲景第一方)',
    source: '漢代 · 張仲景《傷寒論》',
    category: '辛溫解表劑 · 和解營衛',
    actions: '解肌發表，調和營衛。',
    indications: '外感風寒表虛證。惡風發熱，汗出，頭痛，鼻鳴乾嘔，苔薄白，脈浮緩。',
    tongueAndPulse: '舌淡紅，苔薄白而潤，脈浮而緩。',
    composition: [
      { role: '君', herbs: ['桂枝 (三兩)'], purpose: '辛溫解肌，溫經散寒，通助衛陽以散外感風寒。' },
      { role: '臣', herbs: ['芍藥 (三兩)'], purpose: '苦酸微寒，益陰養血，斂汗和營，與桂枝配伍一散一收，營衛和調。' },
      { role: '佐', herbs: ['生薑 (三兩)', '大棗 (十二枚)'], purpose: '生薑辛散助桂枝解表並止嘔；大棗甘溫益氣滋陰助芍藥和營；薑棗相配升騰脾胃之氣。' },
      { role: '使', herbs: ['炙甘草 (二兩)'], purpose: '甘溫益氣，調和諸藥，合桂枝辛甘化陽，合芍藥酸甘化陰。' }
    ],
    synergyAnalysis: '桂枝辛散衛分風邪，芍藥酸收營分陰液；散中有收，補中有發；辛甘化陽以充衛氣，酸甘化陰以滋營血。全方調和營衛、平衡陰陽，被尊為「群方之祖」。',
    clinicalApplication: '不僅用於風寒表虛感冒，凡營衛不和之自汗、冷熱不調、婦科產後低熱、虛人雜病皆可化裁加減運用。'
  },
  {
    id: 'siwu-tang',
    name: '四物湯 (婦科補血第一名方)',
    source: '宋代 · 《太平惠民和劑局方》',
    category: '補益劑 · 補血通劑',
    actions: '補血和血，活血調經。',
    indications: '營血虛滯證。面色無華，唇爪淡白，頭暈眼花，心悸失眠；婦女月經不調，臍腹疼痛，量少色淡，或崩漏經閉。',
    tongueAndPulse: '舌質淡白，脈細弱或細澀。',
    composition: [
      { role: '君', herbs: ['熟地黃'], purpose: '滋陰補血，益精填髓，為補血之主將。' },
      { role: '臣', herbs: ['當歸'], purpose: '補血養肝，活血調經，既能補血又能行血。' },
      { role: '佐', herbs: ['白芍'], purpose: '養血斂陰，柔肝緩急止痛，助熟地滋補營血。' },
      { role: '使', herbs: ['川芎'], purpose: '辛溫走竄，行氣活血，引藥上達頭面、下行血海，使地黃白芍補而不滯。' }
    ],
    synergyAnalysis: '熟地、白芍為陰柔之品，專主補血斂陰；當歸、川芎為辛溫之藥，專司活血行氣。動靜相兼，補血而不留瘀，行血而不傷血，調血之神方。',
    clinicalApplication: '為一切血虛血瘀病證的基礎方。貧血、產後調理、痛經、偏頭痛等均廣泛化裁。'
  },
  {
    id: 'buzhong-yiqi-tang',
    name: '補中益氣湯 (甘溫除熱 · 升陽舉陷)',
    source: '金代 · 李東垣《內外傷辨惑論》',
    category: '補益劑 · 補氣升陽',
    actions: '補中益氣，升陽舉陷。',
    indications: '脾胃氣虛證及氣虛下陷證。身倦乏力，少氣懶言，食少便溏；或脫肛、子宮脫垂、胃下垂；或氣虛發熱（內傷低熱）。',
    tongueAndPulse: '舌淡胖，苔薄白，脈虛大無力。',
    composition: [
      { role: '君', herbs: ['黃耆'], purpose: '重用補中益氣，升陽固表，為全方君藥。' },
      { role: '臣', herbs: ['人參', '白朮', '炙甘草'], purpose: '助黃耆大補脾肺之氣，增強健脾運化功能。' },
      { role: '佐', herbs: ['當歸', '陳皮'], purpose: '當歸養血和營，陳皮理氣化滯，使補而不膩，氣血相生。' },
      { role: '使', herbs: ['升麻', '柴胡'], purpose: '升提下陷之清陽之氣，引諸補氣藥向上升發，直達顛頂。' }
    ],
    synergyAnalysis: '以甘溫培補中焦為主，配以少許升麻、柴胡辛散升浮之品，如四兩撥千斤，巧妙地將沉陷之陽氣托舉而起。',
    clinicalApplication: '現代用於慢性疲勞綜合徵、胃下垂、脫肛、重症肌無力、低血壓、反覆感冒等。'
  },
  {
    id: 'liuwei-dihuang-wan',
    name: '六味地黃丸 (三補三瀉 · 滋補腎陰)',
    source: '宋代 · 錢乙《小兒藥證直訣》',
    category: '補益劑 · 滋陰降火',
    actions: '滋補肝腎之陰。',
    indications: '肝腎陰虛證。腰膝酸軟，頭暈耳鳴，盜汗遺精，骨蒸潮熱，手足心熱，消渴口乾，足跟痛。',
    tongueAndPulse: '舌紅少苔或無苔，脈細數。',
    composition: [
      { role: '君', herbs: ['熟地黃 (八錢)'], purpose: '滋陰補腎，填精益髓，為補腎水真陰之首領。' },
      { role: '臣', herbs: ['山茱萸 (四錢)', '山藥 (四錢)'], purpose: '山茱萸溫補肝腎並收斂固澀；山藥健脾補肺以益後天之本。' },
      { role: '佐', herbs: ['澤瀉 (三錢)', '牡丹皮 (三錢)', '茯苓 (三錢)'], purpose: '澤瀉瀉腎濁降相火防地黃之滋膩；丹皮清泄肝火制山茱萸之溫澀；茯苓淡滲利濕助山藥之健運。' },
      { role: '使', herbs: ['水泛為丸或淡鹽水送服'], purpose: '引藥下行入腎經。' }
    ],
    synergyAnalysis: '「三補三瀉」奇妙結構：熟地補腎、山茱萸補肝、山藥補脾（三補）；澤瀉瀉腎、丹皮瀉肝、茯苓瀉脾（三瀉）。補多於瀉，瀉中寓補，補而不滯，滋陰而不留邪。',
    clinicalApplication: '亞健康慢性疲勞、糖尿病、高血壓陰虛型、更年期綜合徵、慢性腎小球腎炎陰虛者。'
  },
  {
    id: 'xiaochaihu-tang',
    name: '小柴胡湯 (少陽樞機 · 和解表裡)',
    source: '漢代 · 張仲景《傷寒論》',
    category: '和解劑 · 和解少陽',
    actions: '和解少陽，疏肝利膽。',
    indications: '傷寒少陽病證。往來寒熱，胸脅苦滿，默默不欲飲食，心煩喜嘔，口苦，咽乾，目眩。',
    tongueAndPulse: '舌苔薄白或微黃，脈弦。',
    composition: [
      { role: '君', herbs: ['柴胡 (半斤)'], purpose: '透泄少陽之邪熱，疏暢少陽鬱滯之氣機。' },
      { role: '臣', herbs: ['黃芩 (三兩)'], purpose: '清瀉少陽相火，一透一清，合柴胡解少陽半表半裡之邪。' },
      { role: '佐', herbs: ['半夏 (半升)', '生薑 (三兩)', '人參 (三兩)', '大棗 (十二枚)'], purpose: '半夏、生薑降逆和胃止嘔；人參、大棗扶助正氣，健脾補中，防邪氣內傳。' },
      { role: '使', herbs: ['炙甘草 (二兩)'], purpose: '調和諸藥，合人參益氣扶正。' }
    ],
    synergyAnalysis: '寒溫並用，攻補兼施，升降協調。柴芩解少陽邪熱，參草棗補益脾胃，半夏生薑降胃止嘔。運轉少陽樞機，解百鬱之要劑。',
    clinicalApplication: '肝膽疾患、慢性肝炎、感冒寒熱往來期、神經衰弱、中耳炎、月經期感冒。'
  }
];

export const FORMULA_LAB_CHALLENGES = [
  {
    id: 'challenge-1',
    scenarioTitle: '外感風寒表虛證 (惡風汗出)',
    patientSummary: '病患張某，受涼後發熱、惡風、微汗出，頸項拘急不適，脈浮而緩。中醫診為風寒表虛營衛不調證。',
    goal: '請依照「君臣佐使」組建治療該證之經典第一方 (桂枝湯)。',
    options: [
      { id: 'guizhi', name: '桂枝', correctRole: '君', tip: '辛溫解肌、溫通經脈散寒' },
      { id: 'shaoyao', name: '白芍', correctRole: '臣', tip: '酸甘微寒、斂陰和營止汗' },
      { id: 'shengjiang_dazao', name: '生薑 + 大棗', correctRole: '佐', tip: '調和脾胃、生津助營衛' },
      { id: 'zhigancao', name: '炙甘草', correctRole: '使', tip: '調和諸藥、甘溫和中' }
    ]
  },
  {
    id: 'challenge-2',
    scenarioTitle: '血虛血瘀兼見證 (月經不調)',
    patientSummary: '林女士，面色蒼白，常覺頭暈眼花，月經後期量少色淡，伴有少腹隱痛，唇甲淡白，脈細澀。中醫辨為血虛血滯證。',
    goal: '請依照「君臣佐使」組建補血調經第一方 (四物湯)。',
    options: [
      { id: 'shoudi', name: '熟地黃', correctRole: '君', tip: '滋陰補血、填精益髓為主將' },
      { id: 'danggui', name: '當歸', correctRole: '臣', tip: '補血養血且能活血調經' },
      { id: 'baishao', name: '白芍', correctRole: '佐', tip: '柔肝斂陰緩急止痛' },
      { id: 'chuanxiong', name: '川芎', correctRole: '使', tip: '辛溫行氣活血、走竄引經防滋膩' }
    ]
  }
];
