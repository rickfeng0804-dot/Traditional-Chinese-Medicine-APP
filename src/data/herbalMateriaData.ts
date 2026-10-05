import { HerbItem } from '../types/tcm';

export const HERB_NATURE_THEORY = {
  fourNatures: [
    { name: '寒/涼', property: '陰', action: '清熱、瀉火、涼血、解毒', indication: '熱證、陽證 (如高熱煩渴、目赤腫痛、咽喉腫痛、吐血衄血)', examples: '石膏、黃連、金銀花、大黃' },
    { name: '溫/熱', property: '陽', action: '溫裡、散寒、通絡、回陽救逆', indication: '寒證、陰證 (如畏寒肢冷、腹痛泄瀉、亡陽虛脫、風寒濕痹)', examples: '附子、乾薑、肉桂、花椒' },
    { name: '平性', property: '平和', action: '性質沖和、寒熱偏向不明顯，作用廣泛', indication: '虛損、水濕、健脾安神等病證，四季皆宜', examples: '茯苓、甘草、黨參、山藥' }
  ],
  fiveFlavors: [
    { name: '辛', action: '能散、能行', mechanism: '發散風寒風熱、行氣解鬱、活血通經', clinical: '治表證、氣滯、血瘀。辛散太過易耗氣傷陰。', examples: '麻黃、生薑、川芎、薄荷' },
    { name: '甘', action: '能補、能和、能緩', mechanism: '補益臟腑精氣、調和諸藥藥性、緩急止痛', clinical: '治虛證、痛證、調和脾胃。甘滯太過易生濕生滿。', examples: '人參、黃耆、熟地黃、甘草' },
    { name: '酸', action: '能收、能澀', mechanism: '收斂固澀、生津止渴、防耗損正氣', clinical: '治自汗盜汗、久瀉久痢、遺精帶下。有外邪者慎用以防斂邪。', examples: '五味子、烏梅、山茱萸、白芍' },
    { name: '苦', action: '能泄、能燥、能堅', mechanism: '苦寒清熱通便（通泄）、降逆止嘔止咳（降泄）、苦溫苦寒燥濕（燥濕）、堅陰瀉火', clinical: '治熱證、便秘、喘咳、濕熱濕濁。苦寒太過易敗胃傷陰。', examples: '大黃、黃連、黃柏、杏仁' },
    { name: '鹹', action: '能下、能軟', mechanism: '瀉下通腸、軟堅散結、化痰核瘰癧', clinical: '治大便燥結、瘰癧痰核、癭瘤腫塊。水腫少尿者忌過量。', examples: '芒硝、海藻、昆布、牡蠣' }
  ],
  directions: [
    { name: '升浮 (向上 向外)', nature: '性溫熱、味辛甘者多主升浮；質地輕浮之花、葉、皮', role: '升陽舉陷、發散解表、透疹、催吐、開竅', examples: '麻黃、柴胡、升麻、薄荷' },
    { name: '沉降 (向下 向內)', nature: '性寒涼、味苦酸鹹者多主沉降；質地重墜之礦石、貝殼、種子', role: '瀉下通便、清熱降火、平肝潛陽、止咳平喘、利水滲濕', examples: '大黃、代赭石、磁石、牛膝、車前子' }
  ],
  channelTropism: {
    definition: '藥物對人體某些臟腑或經絡有選擇性的親和與治療作用。',
    clinicalSignificance: '如同樣是清熱藥，黃連善清心胃之火，黃芩善清肺火，黃柏善清下焦相火；引導醫者定向精準靶向用藥。'
  }
};

export const HERBS_CATALOG: HerbItem[] = [
  {
    id: 'renshen',
    name: '人參',
    pinyin: 'Rén Shēn',
    category: '補虛藥 · 補氣之聖藥',
    nature: '溫',
    flavors: ['甘', '微苦'],
    channels: ['脾經', '肺經', '心經'],
    direction: '升',
    actions: ['大補元氣', '復脈固脫', '補脾益肺', '生津養血', '安神益智'],
    indications: ['氣虛欲脫、脈微欲絕', '脾虛食少便溏、倦怠無力', '肺虛喘咳', '津傷口渴、消渴', '失眠健忘'],
    keyPairing: '配附子 (參附湯：回陽救逆固脫)；配白朮、茯苓 (四君子湯：健脾益氣)。',
    cautions: '不宜與萊菔子（白蘿蔔子）、五靈脂同用；畏五靈脂，反藜蘆。實證熱證忌用。',
    classicalQuote: '《神農本草經》：主補五臟，安精神，定魂魄，止驚悸，除邪氣，明目開心益智。'
  },
  {
    id: 'huangqi',
    name: '黃耆',
    pinyin: 'Huáng Qí',
    category: '補虛藥 · 補氣固表之王',
    nature: '微溫',
    flavors: ['甘'],
    channels: ['脾經', '肺經'],
    direction: '升',
    actions: ['補氣升陽', '固表止汗', '利水消腫', '生津養血', '托毒排膿生肌'],
    indications: ['脾胃氣虛、中氣下陷 (內臟脫垂)', '肺氣虛弱、表虛自汗', '氣虛水腫', '氣血虧虛瘡瘍難潰'],
    keyPairing: '配當歸 (當歸補血湯：黃耆五兩當歸一兩，陽生陰長，氣旺血生)；配防風、白朮 (玉屏風散：益氣固表止汗)。',
    cautions: '表實邪盛、氣滯濕阻、陰虛陽亢及瘡瘍初起毒盛者忌服。',
    classicalQuote: '《本草綱目》：為補藥之長，故名「耆」，長老也。補諸虛不足，又治虛勞自汗。'
  },
  {
    id: 'danggui',
    name: '當歸',
    pinyin: 'Dāng Guī',
    category: '補虛藥 · 補血聖藥與婦科要藥',
    nature: '溫',
    flavors: ['甘', '辛'],
    channels: ['肝經', '心經', '脾經'],
    direction: '升',
    actions: ['補血活血', '調經止痛', '潤腸通便'],
    indications: ['血虛萎黃、眩暈心悸', '月經不調、經閉痛經', '虛寒腹痛、跌打損傷', '腸燥便秘'],
    keyPairing: '配熟地黃、白芍、川芎 (四物湯：調血補血通劑)；配肉桂、乾薑 (溫經散寒止痛)。',
    cautions: '濕盛中滿、大便溏泄者慎服。',
    classicalQuote: '《景岳全書》：其味甘而重，故專能補血；其氣輕而辛，故又能行血；補中有動，行中有補。'
  },
  {
    id: 'shoudihuang',
    name: '熟地黃',
    pinyin: 'Shú Dì Huáng',
    category: '補虛藥 · 滋陰補血純粹之品',
    nature: '微溫',
    flavors: ['甘'],
    channels: ['肝經', '腎經'],
    direction: '沉',
    actions: ['補血滋陰', '益精填髓'],
    indications: ['血虛萎黃、心悸怔忡', '月經不調、崩漏下血', '腎陰虧虛、潮熱盜汗、腰膝酸軟、遺精消渴'],
    keyPairing: '配山茱萸、山藥 (六味地黃丸：三補三瀉，填補真陰)；配當歸 (補血調營)。',
    cautions: '性質黏膩滋潤，容易阻礙脾胃運化，脾胃氣虛便溏濕濁痰多者慎服；常佐陳皮、砂仁以防滋膩滯胃。',
    classicalQuote: '《本草正義》：專入肝腎，為滋陰補血第一要藥，大補五臟真陰。'
  },
  {
    id: 'chaihu',
    name: '柴胡',
    pinyin: 'Chái Hú',
    category: '解表藥 · 少陽疏肝樞機之藥',
    nature: '微寒',
    flavors: ['苦', '辛'],
    channels: ['肝經', '膽經', '心包經', '三焦經'],
    direction: '升',
    actions: ['和解少陽', '疏肝解鬱', '升舉陽氣'],
    indications: ['傷寒邪在少陽、寒熱往來、胸脅苦滿', '肝鬱氣滯、胸脅脹痛、月經不調', '氣虛下陷、脫肛子宮脫垂'],
    keyPairing: '配黃芩 (小柴胡湯：和解少陽半表半裡樞機)；配白芍、當歸、薄荷 (逍遙散：疏肝健脾解鬱)。',
    cautions: '性升散，真陰虧損、肝陽上亢、氣機上逆者慎用。',
    classicalQuote: '《傷寒論》：少陽之為病，口苦、咽乾、目眩也，小柴胡湯主之。'
  },
  {
    id: 'mahuang',
    name: '麻黃',
    pinyin: 'Má Huáng',
    category: '解表藥 · 發汗解表第一峻藥',
    nature: '溫',
    flavors: ['辛', '微苦'],
    channels: ['肺經', '膀胱經'],
    direction: '升',
    actions: ['發汗解表', '宣肺平喘', '利水消腫'],
    indications: ['外感風寒表實證 (惡寒發熱、無汗脈浮緊)', '肺氣壅遏、咳逆喘促', '風水浮腫、小便不利'],
    keyPairing: '配桂枝 (相須為用，麻黃湯：峻汗解表散寒)；配石膏 (大青龍湯/麻杏石甘湯：清宣肺熱而不散涼)。',
    cautions: '發汗力強，體虛自汗、盜汗及高血壓、失眠心悸者慎用。',
    classicalQuote: '《神農本草經》：主中風傷寒頭痛，溫瘧，發表出汗，去邪熱氣，止咳逆上氣。'
  },
  {
    id: 'guizhi',
    name: '桂枝',
    pinyin: 'Guì Zhī',
    category: '解表藥 · 溫通經脈之良藥',
    nature: '溫',
    flavors: ['辛', '甘'],
    channels: ['心經', '肺經', '膀胱經'],
    direction: '升',
    actions: ['發汗解肌', '溫通經脈', '助陽化氣', '平衝降逆'],
    indications: ['風寒感冒 (表虛有汗或表實無汗)', '胸痹心痛、虛寒腹痛', '風寒濕痹關節冷痛', '陽虛水飲、奔豚氣'],
    keyPairing: '配白芍 (桂枝湯：一散一收，散表寒而和營衛)；配茯苓、白朮 (苓桂朮甘湯：溫陽化飲健脾)。',
    cautions: '溫熱之品，溫病高熱熱盛、陰虛火旺、血熱妄行者禁用，孕婦慎用。',
    classicalQuote: '《本草思辨錄》：桂枝善入營分，能升能散，溫通心陽，外達皮毛以解肌。'
  },
  {
    id: 'dahuang',
    name: '大黃',
    pinyin: 'Dà Huáng',
    category: '瀉下藥 · 將軍之號降熱逐瘀',
    nature: '苦寒',
    flavors: ['苦'],
    channels: ['脾經', '胃經', '大腸經', '肝經', '心包經'],
    direction: '沉',
    actions: ['瀉下攻積', '清熱瀉火', '涼血解毒', '逐瘀通經', '利濕退黃'],
    indications: ['腸胃積滯、大便燥結、熱結便秘', '血熱吐衄、目赤咽痛、牙齦腫痛', '熱毒瘡瘍、燒燙傷', '瘀血經閉、產後瘀阻', '濕熱黃疸'],
    keyPairing: '配芒硝、厚朴、枳實 (大承氣湯：峻下熱結)；配牡丹皮、桃仁 (下瘀血湯)。',
    cautions: '藥力峻烈，孕婦、月經期、哺乳期及脾胃虛弱者禁用。不可久煎（久煎瀉下力減）。',
    classicalQuote: '《本草綱目》：大黃氣味重濁，下走腸胃，蕩滌滌除宿垢，推陳致新，其力猛烈，如戡定禍亂，故有將軍之稱。'
  },
  {
    id: 'huanglian',
    name: '黃連',
    pinyin: 'Huáng Lián',
    category: '清熱藥 · 苦寒瀉火燥濕至極',
    nature: '大寒',
    flavors: ['苦'],
    channels: ['心經', '脾經', '胃經', '肝經', '大腸經'],
    direction: '降',
    actions: ['清熱燥濕', '瀉火解毒', '清心除煩'],
    indications: ['濕熱痞滿、嘔吐泄瀉、濕熱下痢 (痢疾要藥)', '高熱心煩、神昏譫語', '胃火牙痛、消渴多飲', '目赤口瘡、疔毒癰疽'],
    keyPairing: '配吳茱萸 (左金丸 6:1：清瀉肝火而降逆止嘔)；配肉桂 (交泰丸：心腎相交，治水火不濟失眠)。',
    cautions: '大苦大寒，極易敗胃傷陰，脾胃虛寒及陰液不足者忌用；不宜長服久服。',
    classicalQuote: '《本草正》：黃連大苦大寒，專清心火，厚腸胃，能瀉六經實火。'
  },
  {
    id: 'fuzi',
    name: '附子 (製附片)',
    pinyin: 'Fù Zǐ',
    category: '溫裡藥 · 回陽救逆第一品',
    nature: '大熱 (有毒)',
    flavors: ['辛', '甘'],
    channels: ['心經', '腎經', '脾經'],
    direction: '升',
    actions: ['回陽救逆', '補火助陽', '散寒止痛'],
    indications: ['亡陽虛脫、四肢厥冷、脈微欲絕', '心腎陽虛、水腫畏寒', '脾腎陽虛久瀉', '風寒濕痹頑痛'],
    keyPairing: '配乾薑、甘草 (四逆湯：回陽救逆鐵三角)；配肉桂、熟地黃 (金匱腎氣丸：補命門真陽)。',
    cautions: '有大毒，必須久煎 (1小時以上以水解烏頭鹼)；陰虛陽亢、真熱假寒、孕婦禁用。',
    classicalQuote: '《本草備要》：為回陽救逆第一品，走十二經無所不至，引補血藥以補真陰，引補氣藥以復真陽。'
  },
  {
    id: 'gancao',
    name: '甘草 (炙甘草)',
    pinyin: 'Gān Cǎo',
    category: '補虛藥 · 國老調和百藥',
    nature: '平 (炙溫)',
    flavors: ['甘'],
    channels: ['心經', '肺經', '脾經', '胃經'],
    direction: '中',
    actions: ['補脾益氣', '清熱解毒 (生用)', '祛痰止咳', '緩急止痛', '調和諸藥'],
    indications: ['脾胃虛弱、倦怠乏力', '心虛悸動、脈結代', '咳嗽痰多', '脘腹四肢攣急疼痛', '熱毒瘡瘍、藥物毒性'],
    keyPairing: '配白芍 (芍藥甘草湯：酸甘化陰，緩急止痛)；配人參、白朮 (健脾補虛)；配群藥調和寒溫。',
    cautions: '不宜與海藻、大戟、甘遂、芫花同用 (十八反)；長期大劑量可致水腫鈉滯。',
    classicalQuote: '陶弘景：此草最為眾藥之王，經方少有不用者，能協和諸藥，使之不爭，尊之為「國老」。'
  },
  {
    id: 'fuling',
    name: '茯苓',
    pinyin: 'Fú Líng',
    category: '利水滲濕藥 · 健脾淡滲平補良品',
    nature: '平',
    flavors: ['甘', '淡'],
    channels: ['心經', '脾經', '腎經', '肺經'],
    direction: '降',
    actions: ['利水滲濕', '健脾補中', '寧心安神'],
    indications: ['水腫尿少、痰飲停留', '脾虛泄瀉、食少食少', '心悸失眠、健忘神疲'],
    keyPairing: '配豬苓、澤瀉 (五苓散：利水化氣)；配白朮、黨參 (四君子湯：健脾益氣)。',
    cautions: '陰虛津傷及滑精者慎用。',
    classicalQuote: '《神農本草經》：久服安魂養神，不飢延年，通神明。'
  }
];
