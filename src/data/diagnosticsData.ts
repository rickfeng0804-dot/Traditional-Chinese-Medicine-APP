import { TongueSample, PulseSample, DiagnosticMethod, EightPrinciplesCase } from '../types/tcm';

export const DIAGNOSTIC_METHODS: DiagnosticMethod[] = [
  {
    id: 'wang',
    name: '望診 (望而知之謂之神)',
    title: '視覺觀察患者之神色形態與局部徵候',
    meaning: '中醫以「司外揣內」為核心哲理。人體內在臟腑氣血之盛衰，必外現於形體神色與舌象。',
    coreConcepts: [
      { title: '望神氣', content: '得神（兩目精彩、神志清晰、面色榮潤，預後良）；失神（目暗菁華已竭、精神萎靡、面色晦暗，病重）；假神（垂危之際突然目轉光亮、想吃思飲，為殘陽外越之迴光返照）。' },
      { title: '望面色 (五色主病)', content: '青色主寒證、痛證、瘀血、驚風；赤色主熱證（滿面通紅為實熱，午後兩顴潮紅為虛熱）；黃色主脾虛、濕證（黃而鮮明如橘皮為陽黃濕熱，黃而晦暗如煙燻為陰黃寒濕）；白色主虛證、寒證、失血；黑色主腎虛、寒證、水飲、血瘀。' },
      { title: '望舌質與舌苔 (舌診樞紐)', content: '舌質候臟腑氣血之虛實；舌苔候邪氣之深淺、病邪性質與胃氣存亡。正常舌象為「淡紅舌、薄白苔」，柔軟靈活。' },
      { title: '望形態與局部', content: '體胖能食為形盛氣充，體胖少食多痰濕；形瘦食少多脾胃虛弱，形瘦多食多陰虛火旺。小兒指紋看三關（風關病輕、氣關病深、命關危急）。' }
    ]
  },
  {
    id: 'wen',
    name: '聞診 (聞而知之謂之聖)',
    title: '聽聲音與嗅氣味以推斷病變性質',
    meaning: '人體聲音高低清濁與分泌排泄物氣味，能直接反映內臟功能及病邪之寒熱虛實。',
    coreConcepts: [
      { title: '聽語聲與氣息', content: '語聲高亢洪亮、多言狂躁者多屬實證、熱證；語聲低微細小、少言懶語者多屬虛證、寒證。呼吸急促喘逆伴痰鳴多屬實熱痰阻；氣微息弱呼吸不續多屬肺腎兩虛。' },
      { title: '聽咳嗽與呃逆', content: '咳聲重濁有力多屬風寒外束或痰濕；咳聲清脆少痰多屬燥邪或肺陰虛；頓咳（百日咳）咳如雞鳴。呃逆（打嗝）高亢有力多為胃火或食滯，呃逆低微斷續多為胃氣衰敗。' },
      { title: '嗅病體與病室氣味', content: '口臭如腐多為胃熱食滯或齲齒；咳吐膿血腥臭多為肺癰；病室有爛蘋果樣酸臭味（消渴晚期、酮症）；病室有尿臊味（水腫晚期關格、尿毒症）。' }
    ]
  },
  {
    id: 'wen_ask',
    name: '問診 (問而知之謂之工)',
    title: '詢問患者之自覺症狀、起病經過與生活習慣',
    meaning: '問診是全面掌握病史、誘因與自覺痛苦的最直接手段，尤以明代張景岳《十問歌》為臨床圭臬。',
    coreConcepts: [
      { title: '張景岳《十問歌》傳承', content: '「一問寒熱二問汗，三問頭身四問便，五問飲食六問胸，七聾八渴俱當辨，九問舊病十問因，再兼服藥參機變；婦女尤必問經期，遲速閉崩皆可見，小兒天花麻疹看。」' },
      { title: '問寒熱', content: '惡寒發熱（外感表證：發熱重惡寒輕為風熱表證，惡寒重發熱輕為風寒表證）；但寒不熱（裡寒虛寒）；但熱不寒（裡熱實熱）；寒熱往來（半表半裡少陽證或瘧疾）。' },
      { title: '問汗出', content: '表證有汗為表虛（太陽中風）或表熱；表證無汗為表實（太陽傷寒）；自汗（清醒時汗自出，動則尤甚，屬氣虛）；盜汗（入睡汗出醒則汗止，屬陰虛火旺）；絕汗（大汗淋漓如珠或冷汗不止，亡陰亡陽）。' },
      { title: '問二便與飲食', content: '小便清長多寒，短赤多熱；大便溏薄多脾虛濕盛，秘結燥硬多腸胃實熱或陰血虧虛。口渴喜冷飲屬實熱，渴喜熱飲或不欲飲屬寒濕或陽虛。' }
    ]
  },
  {
    id: 'qie',
    name: '切診 (切而知之謂之巧)',
    title: '切脈按診，體察脈象動態與體表胸腹虛實',
    meaning: '以手指觸摸患者橈動脈寸關尺三部，感知脈象之位、數、形、勢；並按撫肌表胸腹腧穴。',
    coreConcepts: [
      { title: '寸關尺三部與臟腑分屬', content: '兩手各分寸、關、尺三部。左手：寸候心與膻中，關候肝膽，尺候腎與小腹。右手：寸候肺與胸中，關候脾胃，尺候命門腎與少腹。' },
      { title: '正常脈象 (平脈)', content: '有胃（從容和緩、不浮不沉、節律整齊）、有神（應指有力而不剛暴）、有根（尺脈沉取有力）。一息四至至五至（每分鐘約60~80次）。' },
      { title: '按胸腹與經穴', content: '按肌表以辨寒熱潤燥；按胸腹痛處：拒按（痛甚不欲手觸）多為實證，喜按（撫按則痛減）多為虛證；腹部按之如囊裹水為水臌。' }
    ]
  }
];

export const TONGUE_SAMPLES: TongueSample[] = [
  {
    id: 'normal',
    name: '正常舌象 (淡紅舌 薄白苔)',
    tongueBody: '淡紅鮮明，榮潤光澤，胖瘦適中，活動自如。',
    tongueCoating: '白苔薄薄一層，均勻鋪於舌面，乾濕適中，顆粒均勻，不黏不膩。',
    clinicalMeaning: '氣血充盈，臟腑協調，胃氣充盛之健康象徵。亦可見於外感病初起邪尚在表。',
    features: ['淡紅舌質', '薄白均勻', '潤澤不燥', '活動靈活'],
    recommendedPrinciple: '養生調攝，順應天時。'
  },
  {
    id: 'pale-white',
    name: '淡白舌 薄白潤苔',
    tongueBody: '舌色較正常舌淡，甚至全無血色，舌質嬌嫩，邊有輕度齒痕。',
    tongueCoating: '薄白而水滑潤澤。',
    clinicalMeaning: '主氣血兩虛或陽虛水泛。氣血虧虛無法充榮舌脈；陽氣虛弱則不能化氣行水。',
    features: ['色淡面白', '舌體嬌嫩或有齒痕', '苔水滑不乾'],
    recommendedPrinciple: '補氣健脾、溫陽養血 (如當歸補血湯、理中丸)。'
  },
  {
    id: 'red-yellow',
    name: '紅舌/絳舌 黃厚膩苔',
    tongueBody: '舌質深紅甚至絳紅（比紅舌更深），舌面多見紅刺或裂紋。',
    tongueCoating: '黃厚而黏膩，顆粒緻密，揩之不去，刮之不脫。',
    clinicalMeaning: '主濕熱內蘊、痰熱交阻、腸胃實熱或食積化火。黃越深熱越盛，苔越厚邪越實。',
    features: ['深紅舌質', '黃厚黏膩', '熱象顯著', '中焦濕濁'],
    recommendedPrinciple: '清熱利濕、化濁開竅 (如甘露消毒丹、白虎湯加味、黃連解毒湯)。'
  },
  {
    id: 'purplish',
    name: '紫暗舌/瘀斑舌 薄白或澀苔',
    tongueBody: '舌質暗紫或青紫，舌尖或舌邊有散在或成片的青紫色瘀點、瘀斑；舌下絡脈曲張粗紫。',
    tongueCoating: '薄白或白糙。',
    clinicalMeaning: '主氣滯血瘀、寒凝血脈或熱入營血。血液運行不暢，凝聚於脈絡。',
    features: ['暗紫舌色', '青紫瘀斑', '舌底絡脈怒張', '刺痛固定'],
    recommendedPrinciple: '活血化瘀、理氣通絡 (如血府逐瘀湯、少腹逐瘀湯)。'
  },
  {
    id: 'mirror',
    name: '鏡面舌 (光剝無苔)',
    tongueBody: '舌質紅絳如鏡，舌面完全無苔，光滑光潔無顆粒。',
    tongueCoating: '舌苔全無剝落。',
    clinicalMeaning: '主胃陰枯竭、腎陰大傷。胃無生氣化生津液以長舌苔，病重難愈之徵。',
    features: ['光亮如鏡', '毫無舌苔', '舌質乾絳', '陰液大虧'],
    recommendedPrinciple: '甘寒滋陰、大益胃陰 (如益胃湯、麥門冬湯、玉女煎)。'
  }
];

export const PULSE_SAMPLES: PulseSample[] = [
  {
    id: 'fu',
    name: '浮脈 (如水漂木)',
    feelDescription: '輕按即得，重按反稍減而不空，如水上漂木之狀。',
    clinicalMeaning: '主表證，亦主虛陽外越之浮大無根。',
    mechanism: '邪襲肌表，衛氣抗邪於外，氣血外鼓，脈管擴張故輕按即應。',
    category: '位 (脈位表裡)'
  },
  {
    id: 'chen',
    name: '沉脈 (如石投水)',
    feelDescription: '輕取不應，按至肌肉甚至推尋筋骨方得，如石沉水底。',
    clinicalMeaning: '主裡證。沉而有力為裡實，沉而無力為裡虛。',
    mechanism: '病邪深入臟腑，或陽氣內鬱，不能鼓動血行於外，脈道沉伏深部。',
    category: '位 (脈位表裡)'
  },
  {
    id: 'chi',
    name: '遲脈 (一息不及四至)',
    feelDescription: '脈搏跳動遲慢，一息不及四至（每分鐘少於60次）。',
    clinicalMeaning: '主寒證。遲而有力為實寒，遲而無力為虛寒。',
    mechanism: '寒性凝滯，血得寒則凝，陽氣受損無力推動血行，故脈來遲緩。',
    category: '數 (脈搏快慢)'
  },
  {
    id: 'shuo',
    name: '數脈 (一息五至以上)',
    feelDescription: '脈搏跳動急促，一息五至至六至（每分鐘約90~110次）。',
    clinicalMeaning: '主熱證。數而有力為實熱，數而細弱為虛熱。',
    mechanism: '火熱之邪亢盛，迫血妄行，陽氣亢張鼓動心脈，故脈來急數。',
    category: '數 (脈搏快慢)'
  },
  {
    id: 'hua',
    name: '滑脈 (如盤走珠)',
    feelDescription: '往來流利，應指圓滑，如珠走盤般流暢圓潤。',
    clinicalMeaning: '主痰飲、食滯、實熱；亦見於青壯年或婦女妊娠（滑利而尺脈充實）。',
    mechanism: '氣血充盛，營衛充足，或痰食化熱迫使血行滑利衝和。',
    category: '形 (脈體形態流暢度)'
  },
  {
    id: 'se',
    name: '澀脈 (輕刀刮竹)',
    feelDescription: '往來艱澀，遲滯不暢，如輕刀刮竹般不流利。',
    clinicalMeaning: '主氣滯、血瘀、精傷、血少。澀而有力為氣滯血瘀，澀而無力為精血枯涸。',
    mechanism: '精虧血少不能充盈脈道；或氣滯血瘀痰濁阻滯脈絡，血行阻滯不通。',
    category: '形 (脈體形態流暢度)'
  },
  {
    id: 'xian',
    name: '弦脈 (端直以長如按琴弦)',
    feelDescription: '端直而長，挺然指下，如按琴弦般挺拔勁急。',
    clinicalMeaning: '主肝膽病、諸痛、痰飲、瘧疾；老年人脈硬化亦多見。',
    mechanism: '肝失疏泄，氣機鬱滯，氣鬱化火，或寒凝筋脈痛甚，脈道拘急緊斂。',
    category: '勢 (脈力張力與氣勢)'
  },
  {
    id: 'xi',
    name: '細脈 (細小如線)',
    feelDescription: '脈細如線，但應指明顯，起伏柔和。',
    clinicalMeaning: '主氣血兩虛、諸虛勞損，亦主濕病（濕邪阻遏脈道）。',
    mechanism: '營血虧虛不能充盈脈管，氣虛無力鼓動脈搏，致使脈道拘窄細小。',
    category: '形 (脈體粗細)'
  }
];

export const EIGHT_PRINCIPLES_CASES: EightPrinciplesCase[] = [
  {
    id: 'case-1',
    title: '風寒束表案 (外感初起)',
    symptoms: ['發熱惡寒，惡寒尤甚', '無汗，頭痛身痛', '鼻塞流清涕', '口不渴'],
    tongue: '舌質淡紅，舌苔薄白乾淨',
    pulse: '脈浮緊有力',
    yinYang: '陽證',
    exteriorInterior: '表證',
    coldHeat: '寒證',
    deficiencyExcess: '實證',
    conclusion: '表寒實證 (風寒表實)',
    analysis: '風寒之邪外襲肌表，衛陽被遏，故惡寒發熱、無汗身痛；邪在皮毛故為表證；脈浮緊、苔薄白為典型表寒實之象。',
    treatmentPrinciple: '辛溫解表、宣肺散寒 (代表方：麻黃湯、荊防敗毒散)'
  },
  {
    id: 'case-2',
    title: '脾胃陽虛案 (中焦虛冷)',
    symptoms: ['脘腹冷痛，喜溫喜按', '大便溏瀉清稀', '四肢不溫，面色白', '食欲不振納呆'],
    tongue: '舌質淡胖嬌嫩，邊有齒痕，苔白水滑',
    pulse: '脈沉細遲無力',
    yinYang: '陰證',
    exteriorInterior: '裡證',
    coldHeat: '寒證',
    deficiencyExcess: '虛證',
    conclusion: '裡寒虛證 (脾胃虛寒)',
    analysis: '病位在中焦脾胃屬「裡」；陽氣不足溫煦失職，故喜溫喜按、畏寒腹冷痛屬「寒」；脾失運化，正氣不足故為「虛」；舌淡白齒痕脈沉遲皆為陰寒內盛之候。',
    treatmentPrinciple: '溫中祛寒、健脾益氣 (代表方：理中丸、附子理中丸)'
  },
  {
    id: 'case-3',
    title: '陽明腑實案 (腸胃實熱)',
    symptoms: ['高熱不退，午後日晡潮熱', '大便秘結數日不通', '腹部脹滿硬痛，拒按', '煩躁譫語，口渴大飲冷水'],
    tongue: '舌質紅絳，苔黃燥起芒刺裂紋',
    pulse: '脈沉實有力或滑數',
    yinYang: '陽證',
    exteriorInterior: '裡證',
    coldHeat: '熱證',
    deficiencyExcess: '實證',
    conclusion: '裡熱實證 (腸胃燥屎實結)',
    analysis: '邪熱深入陽明腸腑屬「裡」；高熱口渴為「熱」；燥屎內結拒按為「實」；熱實互結，故稱陽明腑實陽熱盛證。',
    treatmentPrinciple: '瀉熱通便、蕩滌燥結 (代表方：大承氣湯、調胃承氣湯)'
  },
  {
    id: 'case-4',
    title: '肝腎陰虛案 (真陰虧損)',
    symptoms: ['頭暈目眩，耳鳴如蟬', '腰膝酸軟無力', '五心煩熱，午後潮熱', '盜汗口乾，失眠多夢'],
    tongue: '舌質鮮紅，舌苔少或剝落無苔',
    pulse: '脈細數無力',
    yinYang: '陰證',
    exteriorInterior: '裡證',
    coldHeat: '熱證',
    deficiencyExcess: '虛證',
    conclusion: '裡虛熱證 (陰虛內熱)',
    analysis: '病在肝腎臟腑屬「裡」；肝腎精血陰液虧損屬「虛」；陰不制陽，虛陽浮動生內熱，見五心煩熱潮熱盜汗屬「虛熱」。',
    treatmentPrinciple: '滋養肝腎、育陰潛陽 (代表方：六味地黃丸、知柏地黃丸)'
  }
];
