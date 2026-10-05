import { FiveElementDetail, OrganDetail, VitalSubstance } from '../types/tcm';

export const FIVE_ELEMENTS: FiveElementDetail[] = [
  {
    id: 'wood',
    name: '木',
    chinese: '木曰曲直',
    color: '#166534',
    organZang: '肝',
    organFu: '膽',
    season: '春季 (生發)',
    direction: '東方',
    flavor: '酸',
    colorWord: '青 (綠)',
    emotion: '怒 (大怒傷肝)',
    senseOrgan: '目 (肝開竅於目)',
    tissue: '筋 (肝主筋，其華在爪)',
    generates: 'fire',
    controls: 'earth',
    characteristics: '生長、升發、舒暢、條達之性。如樹木枝條生長發育、伸展曲折。',
    clinicalSignificance: '肝失疏泄則氣機鬱滯，易生暴躁、胸脅脹痛或婦科經亂；木旺乘土可致肝脾不和、腹脹便溏。'
  },
  {
    id: 'fire',
    name: '火',
    chinese: '火曰炎上',
    color: '#991B1B',
    organZang: '心',
    organFu: '小腸',
    season: '夏季 (蕃秀)',
    direction: '南方',
    flavor: '苦',
    colorWord: '赤 (紅)',
    emotion: '喜 (過喜傷心)',
    senseOrgan: '舌 (心開竅於舌)',
    tissue: '脈 (心主血脈，其華在面)',
    generates: 'earth',
    controls: 'metal',
    characteristics: '溫熱、升騰、光明、向上之性。如烈火熊熊向上燃燒溫暖萬物。',
    clinicalSignificance: '心主神明與血脈，火過旺則心煩失眠、口舌生瘡、脈數；火不足則心陽虛衰、畏寒肢冷。'
  },
  {
    id: 'earth',
    name: '土',
    chinese: '土爰稼穡',
    color: '#B45309',
    organZang: '脾',
    organFu: '胃',
    season: '長夏 (化育)',
    direction: '中央',
    flavor: '甘 (甜)',
    colorWord: '黃',
    emotion: '思 (思慮傷脾)',
    senseOrgan: '口 (脾開竅於口)',
    tissue: '肉 (脾主肌肉四肢，其華在唇)',
    generates: 'metal',
    controls: 'water',
    characteristics: '生化、承載、受納之性。土為萬物之母，播種收穫，化生萬物。',
    clinicalSignificance: '脾為「後天之本、氣血生化之源」。脾虛則水濕不化、食少納呆、倦怠乏力、面色萎黃。'
  },
  {
    id: 'metal',
    name: '金',
    chinese: '金曰從革',
    color: '#475569',
    organZang: '肺',
    organFu: '大腸',
    season: '秋季 (收斂)',
    direction: '西方',
    flavor: '辛',
    colorWord: '白',
    emotion: '悲/憂 (悲憂傷肺)',
    senseOrgan: '鼻 (肺開竅於鼻)',
    tissue: '皮毛 (肺主皮毛，其華在毛)',
    generates: 'water',
    controls: 'wood',
    characteristics: '肅殺、收斂、沉降、變革之性。如秋風肅爽、清潔蕭降、金屬堅硬變革。',
    clinicalSignificance: '肺主氣司呼吸，通調水道，朝百脈。肺失宣肅則咳嗽喘促、痰飲、易感外邪、皮膚乾枯。'
  },
  {
    id: 'water',
    name: '水',
    chinese: '水曰潤下',
    color: '#1E3A8A',
    organZang: '腎',
    organFu: '膀胱',
    season: '冬季 (閉藏)',
    direction: '北方',
    flavor: '鹹',
    colorWord: '黑',
    emotion: '恐 (恐則氣下，驚恐傷腎)',
    senseOrgan: '耳及二陰 (腎開竅於耳)',
    tissue: '骨 (腎主骨生髓，其華在髮)',
    generates: 'wood',
    controls: 'fire',
    characteristics: '滋潤、下行、閉藏、寒涼之性。如江河水流向下潤澤滋養大地。',
    clinicalSignificance: '腎為「先天之本」，藏真陰真陽。腎虛則腰膝酸軟、遺精耳鳴、水腫或虛火上炎、早衰。'
  }
];

export const ZANG_ORGANS: OrganDetail[] = [
  {
    id: 'heart',
    name: '心 (君主之官)',
    type: 'zang',
    element: 'fire',
    officialRole: '君主之官，神明出焉',
    mainFunctions: [
      '主血脈：推動血液在脈管中循環，灌注全身五臟六腑。',
      '主神明 (藏神)：統馭人的精神、意識、思維活動與情志感知。',
      '在體合脈，其華在面：面色紅潤反映心血充盈。',
      '開竅於舌：舌為心之苗，心氣心血通於舌。',
      '在液為汗：汗為心之液，津血同源，大汗傷心陽。'
    ],
    physiologicalCharacteristics: '心為陽臟，其氣通於夏，主動主熱，喜樂而惡憂愁。',
    pairedOrgan: '小腸 (心熱可移於小腸，見尿赤灼痛)',
    manifestation: '其華在面，開竅於舌',
    pathologySymptoms: ['心悸怔忡', '心痛徹背', '失眠多夢', '面色無華或青紫', '健忘狂妄']
  },
  {
    id: 'liver',
    name: '肝 (將軍之官)',
    type: 'zang',
    element: 'wood',
    officialRole: '將軍之官，謀慮出焉',
    mainFunctions: [
      '主疏泄：調暢人體全身氣機，促進脾胃運化，調暢精神情志。',
      '主藏血：貯藏血液並調節人體各部分血液分配量。',
      '在體合筋，其華在爪：筋力強健、爪甲堅韌依賴肝血滋養。',
      '開竅於目：目受血而能視，肝陰肝血濡養雙眼。',
      '在志為怒，在液為淚：怒則氣上，肝病多見急躁易怒。'
    ],
    physiologicalCharacteristics: '體陰而用陽，喜條達而惡抑鬱抑遏，性剛強急躁。',
    pairedOrgan: '膽 (肝膽相照，同司疏泄，膽汁由肝之餘氣所化)',
    manifestation: '其華在爪，開竅於目',
    pathologySymptoms: ['胸脅或少腹脹痛', '急躁易怒', '頭痛眩暈', '目赤目眩', '月經不調', '肢體拘急或抽搐']
  },
  {
    id: 'spleen',
    name: '脾 (諫議/倉廩之官)',
    type: 'zang',
    element: 'earth',
    officialRole: '倉廩之官，五味出焉；後天之本',
    mainFunctions: [
      '主運化：運化水穀精微（消化吸收營養）與運化水液（轉輸水濕）。',
      '主統血：固攝血液在脈管內運行，防止溢出脈外而出血。',
      '主升清：將水穀精微物質上輸心肺，維持人體內臟固定位置。',
      '主肌肉、主四肢：人體肌肉豐滿與四肢輕靈皆源於脾之濡養。',
      '開竅於口，其華在唇：脾氣健旺則知饑飽，唇色紅潤光澤。'
    ],
    physiologicalCharacteristics: '脾為陰中之至陰，喜燥而惡濕，宜升則健。',
    pairedOrgan: '胃 (胃主受納腐熟、喜潤惡燥宜降；脾主運化升清喜燥，二者燥濕相濟升降相因)',
    manifestation: '其華在唇，開竅於口',
    pathologySymptoms: ['腹脹納呆', '便溏泄瀉', '肢體倦怠困重', '水腫', '內臟下垂 (胃下垂、子宮脫垂)', '便血崩漏']
  },
  {
    id: 'lung',
    name: '肺 (相傅之官)',
    type: 'zang',
    element: 'metal',
    officialRole: '相傅之官，治節出焉；華蓋之臟',
    mainFunctions: [
      '主氣，司呼吸：主呼吸之氣（吐故納新），並主管一身之總氣。',
      '主宣發與肅降：宣散衛氣水穀精微至皮毛；向下肅清通調呼吸與水道。',
      '通調水道：為「水之上源」，推動水液下輸膀胱。',
      '朝百脈，主治節：全身血液通過經脈匯聚於肺，經氣體交換後布散全身。',
      '在體合皮，其華在毛，開竅於鼻：合為人體第一道防衛外邪之屏障。'
    ],
    physiologicalCharacteristics: '肺為嬌臟，不耐寒熱；位居最高，如華蓋般覆蓋諸臟。',
    pairedOrgan: '大腸 (肺氣肅降推動大腸傳導，肺燥則大腸便秘)',
    manifestation: '其華在毛，開竅於鼻',
    pathologySymptoms: ['咳嗽氣喘', '少氣懶言', '咯痰呼吸不利', '鼻塞流涕', '自汗惡風', '小便不利或水腫']
  },
  {
    id: 'kidney',
    name: '腎 (作強之官)',
    type: 'zang',
    element: 'water',
    officialRole: '作強之官，伎巧出焉；先天之本',
    mainFunctions: [
      '藏精，主生長、發育與生殖：藏先天之精與後天水穀之精。',
      '主水：主管調節體內津液輸布與排泄之代謝全過程。',
      '主納氣：攝納肺所吸入之清氣，防止呼吸淺表（肺為氣之主，腎為氣之根）。',
      '主骨、生髓、充腦：骨骼堅韌與大腦髓海充盛皆本於腎精。',
      '開竅於耳及二陰，其華在髮：毛髮生機根源於腎精腎血。'
    ],
    physiologicalCharacteristics: '腎為水火之臟，內寓真陰真陽（命門之火），主閉藏封蟄。',
    pairedOrgan: '膀胱 (腎陽氣化推動膀胱儲尿與排尿)',
    manifestation: '其華在髮，開竅於耳及二陰',
    pathologySymptoms: ['腰膝酸軟', '畏寒肢冷或五心煩熱', '耳鳴耳聾', '遺精滑泄、早泄', '尿頻尿遺或小便不利', '呼多吸少動則喘促']
  }
];

export const VITAL_SUBSTANCES: VitalSubstance[] = [
  {
    id: 'qi',
    name: '氣 (生命的原動力)',
    definition: '人體內活力極強、運行不息的極細微物質，是構成人體和維持生命活動的最基本物質。',
    classification: [
      { name: '元氣 (真氣)', source: '稟受於父母先天之精，靠後天水穀精氣充養', function: '激發和推動人體各臟腑組織器官的全部生理活動' },
      { name: '宗氣', source: '肺吸入之自然清氣 + 脾胃運化之水穀精氣於胸中結合', function: '走息道行呼吸，貫心脈以行氣血，關係呼吸強弱與語聲心跳' },
      { name: '營氣', source: '水穀精微中最富營養之精華部分', function: '循脈管內運行，化生血液，營養濡潤周身臟腑' },
      { name: '衛氣', source: '水穀精氣中慓疾滑利之部分', function: '行於脈外，溫養肌肉肌膚，司汗孔開闔，抵禦外邪侵襲' }
    ],
    functions: [
      '推動作用：推動血液、津液運行，激發臟腑生化運化。',
      '溫煦作用：維持人體正常體溫與各組織器官機能溫度。',
      '防禦作用：護衛肌表，抵禦外邪（風寒暑濕燥火）入侵。',
      '固攝作用：固攝體內液態物質（防止血液溢出、汗液過泄、失精遺尿）。',
      '氣化作用：體內精氣血津液相互轉化與代謝的生理生化過程。'
    ],
    relationshipWithOthers: '氣為血之帥（氣能生血、氣能行血、氣能攝血）；氣能生津、行津、攝津。',
    clinicalPatterns: [
      { name: '氣虛證', symptoms: '少氣懶言、神疲乏力、自汗、動則氣喘、脈虛無力', principle: '補氣健脾益肺 (如四君子湯、補中益氣湯)' },
      { name: '氣滯證', symptoms: '胸脅脘腹脹悶疼痛、痛無定處、噯氣或矢氣後痛減', principle: '行氣疏肝理氣 (如柴胡疏肝散、越鞠丸)' },
      { name: '氣逆證', symptoms: '肺氣上逆見咳喘、胃氣上逆見嘔吐呃逆、肝氣上逆見頭痛眩暈昏厥', principle: '降氣平逆 (如旋覆代赭湯、蘇子降氣湯)' }
    ]
  },
  {
    id: 'blood',
    name: '血 (滋榮生命的源泉)',
    definition: '循行於脈管中富有營養和滋潤作用的紅色液體，是維持人體生命活動不可或缺的基礎物質。',
    classification: [
      { name: '血的生成', source: '脾胃為氣血生化之源；腎藏精，精血同源', function: '水穀精微經脾胃吸收上輸於心肺，與肺清氣結合，在心陽氣化作用下化赤為血' }
    ],
    functions: [
      '濡養滋潤：周流全身，濡養五臟六腑、四肢百骸、皮毛爪甲。',
      '神明之物質基礎：血盛則神清氣爽、思維敏捷、睡眠安穩；血虛則心神失養、失眠多夢、健忘驚悸。'
    ],
    relationshipWithOthers: '血為氣之母（血能載氣、血能養氣）。氣隨血脫：大出血可導致氣無所依附而暴脫。',
    clinicalPatterns: [
      { name: '血虛證', symptoms: '面色蒼白或萎黃、唇甲淡白、頭暈眼花、心悸失眠、手足發麻、舌淡脈細', principle: '養血補血 (如四物湯、當歸補血湯)' },
      { name: '血瘀證', symptoms: '局部刺痛固定不移、夜間尤甚、肌膚甲錯、唇舌紫暗或有瘀斑瘀點、脈澀', principle: '活血化瘀 (如血府逐瘀湯、桃紅四物湯)' },
      { name: '血熱證', symptoms: '身熱夜甚、煩躁譫妄、吐血衄血、便血尿血、斑疹紫黑、舌絳脈數', principle: '清熱涼血 (如犀角地黃湯)' }
    ]
  },
  {
    id: 'body-fluid',
    name: '津液 (潤澤身心的水液)',
    definition: '人體一切正常水液的總稱。清稀者為津，稠厚者為液。包括臟腑內外之津液及汗、涕、淚、涎、唾五液。',
    classification: [
      { name: '津 (較清稀)', source: '流動性大，布散於體表皮膚、肌肉和孔竅', function: '溫潤肌肉、充盈皮膚、滋潤官竅、化生汗液' },
      { name: '液 (較稠厚)', source: '流動性小，灌注於骨節、臟腑、腦髓、孔竅深處', function: '滑利關節、補益腦髓、滋養臟腑、濡養孔竅' }
    ],
    functions: [
      '滋潤濡養：潤澤眼耳口鼻、關節腔隙、筋骨肌肉。',
      '化生血液：津液滲入脈中，成為血液的重要組成部分。',
      '調節機體陰陽與體溫：熱則汗出以散熱，寒則閉汗化尿以藏溫。'
    ],
    relationshipWithOthers: '津血同源，汗血同源（奪血者無汗，奪汗者無血）。氣能生津、行津、攝津；水停氣滯，氣虛水腫。',
    clinicalPatterns: [
      { name: '津液不足 (燥證)', symptoms: '口乾舌燥、咽乾口渴、皮膚乾澀起屑、便秘溲短、舌紅少津、脈細數', principle: '生津潤燥 (如增液湯、沙參麥冬湯)' },
      { name: '水濕痰飲 (停積)', symptoms: '面目浮腫、脘痞苔膩、咳喘吐白稀痰或稠黏痰、腹部水聲漉漉', principle: '利水滲濕、溫陽化飲 (如五苓散、苓桂朮甘湯、二陳湯)' }
    ]
  }
];
