import { FiveElement } from '../types/tcm';

export interface BiaoLiPair {
  id: string;
  name: string;
  element: FiveElement;
  elementName: string;
  zang: {
    name: string;
    nature: string;
    role: string;
  };
  fu: {
    name: string;
    nature: string;
    role: string;
  };
  meridianLink: string; // 經絡絡屬
  physiologicalSynergy: string; // 生理協作
  pathologyTransmission: {
    zangToFu: {
      title: string;
      mechanism: string;
      symptoms: string[];
      classicFormula: string;
    };
    fuToZang: {
      title: string;
      mechanism: string;
      symptoms: string[];
      classicFormula: string;
    };
  };
  clinicalKey: string; // 臨床啟發
}

export interface ZangInterrelation {
  id: string;
  organs: [string, string];
  title: string; // 如：心腎相交（水火既濟）
  mechanism: string; // 生理機理
  pathologyTitle: string; // 如：心腎不交
  pathologyDesc: string; // 病理說明
  symptoms: string[]; // 典型徵象
  classicPrinciple: string; // 治法與代表方
}

export interface FuStep {
  id: string;
  stepNumber: number;
  organName: string;
  fuCategory: string;
  tcmConcept: string; // 如：受納腐熟水穀
  modernAnalogy: string;
  functionDetail: string;
  clinicalSignificance: string;
  pathologyIfBlocked: string;
}

export const BIAO_LI_PAIRS: BiaoLiPair[] = [
  {
    id: 'heart-small-intestine',
    name: '心與小腸相表裡',
    element: 'fire',
    elementName: '火',
    zang: {
      name: '心 (臟·屬陰)',
      nature: '居上焦，主血脈、藏神明，性炎上。',
      role: '君主之官，神明出焉'
    },
    fu: {
      name: '小腸 (腑·屬陽)',
      nature: '居中下焦，受盛化物，泌別清濁。',
      role: '受盛之官，化物出焉'
    },
    meridianLink: '手少陰心經起於心中下絡小腸；手太陽小腸經起於小指絡心循咽下膈抵胃屬小腸。',
    physiologicalSynergy: '心主血脈，小腸化物化生精微以充養心血；心陽下溫小腸助其化物分清，小腸泌別清濁將津液滲入膀胱化生尿液。',
    pathologyTransmission: {
      zangToFu: {
        title: '心熱下移小腸',
        mechanism: '心火熾盛，沿經脈下移於小腸，小腸受熱，灼傷津液。',
        symptoms: ['心煩失眠', '口舌生瘡、舌尖紅刺', '小便短赤、灼熱刺痛', '尿血'],
        classicFormula: '導赤散（生地黃、木通/通草、竹葉、甘草梢）'
      },
      fuToZang: {
        title: '小腸熱盛上熏心神',
        mechanism: '小腸積熱壅滯，熱氣循經脈上熏心包與心神。',
        symptoms: ['小腹脹痛', '小便赤澀', '煩躁不安', '夜寐多驚'],
        classicFormula: '清心蓮子飲加減'
      }
    },
    clinicalKey: '小便赤痛莫專治下焦，當察舌尖心火；口糜心煩當思清熱導赤通利小便。'
  },
  {
    id: 'liver-gallbladder',
    name: '肝與膽相表裡',
    element: 'wood',
    elementName: '木',
    zang: {
      name: '肝 (臟·屬陰)',
      nature: '居右脅，主疏泄、藏血，喜條達惡抑鬱。',
      role: '將軍之官，謀慮出焉'
    },
    fu: {
      name: '膽 (腑·屬陽/奇恆之腑)',
      nature: '附於肝葉，貯藏排泄膽汁，主決斷。',
      role: '中正之官，決斷出焉'
    },
    meridianLink: '足厥陰肝經屬肝絡膽；足少陽膽經屬膽絡肝，同出入於脅肋。',
    physiologicalSynergy: '肝之餘氣化生膽汁，肝氣疏泄直接促成膽汁正常排泄以助脾胃運化；肝主謀慮，膽主決斷，謀慮周詳加決斷果敢方能情志健全。',
    pathologyTransmission: {
      zangToFu: {
        title: '肝氣鬱滯影響膽汁',
        mechanism: '情志抑鬱，肝失疏泄，膽道失和，膽汁排泄受阻。',
        symptoms: ['胸脅脹痛或竄痛', '口苦泛酸', '食慾不振、腹脹', '煩躁善太息'],
        classicFormula: '柴胡疏肝散、溫膽湯'
      },
      fuToZang: {
        title: '膽腑濕熱下逼肝經',
        mechanism: '濕熱蘊結膽腑，上蒸肝膽經絡，膽汁外溢泛於肌膚。',
        symptoms: ['身目發黃（陽黃）如橘子色', '右脅劇烈脹痛', '口苦咽乾', '膽怯心悸、夜臥驚恐'],
        classicFormula: '茵陳蒿湯、大柴胡湯'
      }
    },
    clinicalKey: '「肝膽相照」，凡脅痛、黃疸、眩暈、膽怯失眠，肝膽同調，疏肝利膽並施。'
  },
  {
    id: 'spleen-stomach',
    name: '脾與胃相表裡',
    element: 'earth',
    elementName: '土',
    zang: {
      name: '脾 (臟·屬陰)',
      nature: '居中焦，喜燥惡濕，主升清、運化水穀。',
      role: '倉廩之官，五味出焉；後天之本'
    },
    fu: {
      name: '胃 (腑·屬陽)',
      nature: '居中焦，喜潤惡燥，主受納腐熟、降濁。',
      role: '水穀之海，主通降'
    },
    meridianLink: '足太陰脾經入腹屬脾絡胃；足陽明胃經下膈屬胃絡脾，交錯相貫。',
    physiologicalSynergy: '「脾胃為後天之本」。脾升則健，胃降則和；脾喜燥胃喜潤，燥濕相濟，陰陽互補，共同完成食物受納、腐熟、吸收與轉輸。',
    pathologyTransmission: {
      zangToFu: {
        title: '脾虛濕盛累及胃降',
        mechanism: '脾虛不能運化水濕，濕濁中阻，胃氣失和不能順降。',
        symptoms: ['食少納呆', '脘腹痞脹，食後尤甚', '噁心嘔逆、噯氣', '大便溏爛'],
        classicFormula: '香砂六君子湯、平胃散'
      },
      fuToZang: {
        title: '胃熱傷陰殃及脾運',
        mechanism: '飲食辛辣過食燥熱，胃熱消穀化津，耗損脾陰。',
        symptoms: ['嘈雜易飢（消穀善飢）', '口乾唇乾、飲水不解', '大便秘結難解', '胃脘灼痛隱痛'],
        classicFormula: '益胃湯、麻子仁丸'
      }
    },
    clinicalKey: '治中焦必調升降燥濕：脾病當益氣健脾助升清，胃病當和胃清熱促通降。'
  },
  {
    id: 'lung-large-intestine',
    name: '肺與大腸相表裡',
    element: 'metal',
    elementName: '金',
    zang: {
      name: '肺 (臟·屬陰)',
      nature: '居上焦，華蓋之臟，主氣司呼吸、宣發肅降。',
      role: '相傅之官，治節出焉'
    },
    fu: {
      name: '大腸 (腑·屬陽)',
      nature: '居下焦，傳化糟粕，主吸收津液。',
      role: '傳導之官，變化出焉'
    },
    meridianLink: '手太陰肺經下絡大腸；手陽明大腸經入缺盆絡肺屬大腸。',
    physiologicalSynergy: '肺氣肅降推動津液下行，大腸傳導賴肺氣之推動與水液滋潤；大腸傳導通暢，無濁氣上蒸，肺氣肅降自順。',
    pathologyTransmission: {
      zangToFu: {
        title: '肺熱肺燥下移大腸',
        mechanism: '肺熱熾盛耗傷津液，肅降無力，大腸失於濡潤。',
        symptoms: ['咳嗽胸悶、咽喉乾痛', '大便秘結乾燥如羊矢', '舌紅少津'],
        classicFormula: '潤腸丸、清燥救肺湯'
      },
      fuToZang: {
        title: '大腸腑實上蒸肺氣',
        mechanism: '大腸燥屎內結，腑氣不通，濁氣上攻，致肺氣上逆。',
        symptoms: ['咳喘胸滿，痰多黏稠', '腹滿硬痛、大便數日不通', '發熱煩渴、舌苔黃燥'],
        classicFormula: '宣白承氣湯（生石膏、大黃、杏仁、栝蔞皮）'
      }
    },
    clinicalKey: '「提壺揭蓋」法：老人習慣性便秘常兼宣肺；肺熱咳喘痰稠久不愈常兼通腑瀉下。'
  },
  {
    id: 'kidney-bladder',
    name: '腎與膀胱相表裡',
    element: 'water',
    elementName: '水',
    zang: {
      name: '腎 (臟·屬陰)',
      nature: '居下焦，先天之本，藏真精，主水司氣化。',
      role: '作強之官，伎巧出焉'
    },
    fu: {
      name: '膀胱 (腑·屬陽)',
      nature: '居下焦小腹中央，貯存排泄尿液。',
      role: '州都之官，津液藏焉，氣化則能出矣'
    },
    meridianLink: '足少陰腎經貫脊屬腎絡膀胱；足太陽膀胱經入循膂絡腎屬膀胱。',
    physiologicalSynergy: '腎主水司氣化，膀胱貯尿排尿。水液代謝後濁液下注膀胱，賴腎之真陽氣化固攝，開闔自如（氣化則能出，固攝則不漏）。',
    pathologyTransmission: {
      zangToFu: {
        title: '腎虛氣化失司影響膀胱',
        mechanism: '腎陽虛弱無力氣化或腎氣不固，膀胱失其開闔約束之權。',
        symptoms: ['夜尿頻多、清長如水', '小便失禁、遺尿', '或小便不利、水腫腰冷'],
        classicFormula: '金匱腎氣丸、縮泉丸（益智仁、烏藥、山藥）'
      },
      fuToZang: {
        title: '膀胱濕熱逆傳累腎',
        mechanism: '下焦濕熱蘊結膀胱，久留不解，循經上犯腎府。',
        symptoms: ['尿頻、尿急、尿痛（淋證）', '尿色混濁或尿血', '腰痛發熱、小腹脹痛'],
        classicFormula: '八正散、知柏地黃丸加減'
      }
    },
    clinicalKey: '膀胱病變多求諸腎；治淋澀先清膀胱濕熱，治夜尿頻數尿失禁必溫補腎陽固攝腎氣。'
  },
  {
    id: 'pericardium-sanjiao',
    name: '心包與三焦相表裡',
    element: 'fire',
    elementName: '相火',
    zang: {
      name: '心包絡 (臟·代心受邪)',
      nature: '包衛於心臟之外，護衛心君。',
      role: '臣使之官，代君受病'
    },
    fu: {
      name: '三焦 (腑·孤府/六腑之大者)',
      nature: '上中下三焦之統稱，元氣之別使，水液之道路。',
      role: '決瀆之官，水道出焉'
    },
    meridianLink: '手厥陰心包經下膈歷絡三焦；手少陽三焦經入缺盆布膻中絡心包。',
    physiologicalSynergy: '心包居胸中，三焦統管全身水液與氣機通道。二者同具相火，通調上中下三焦氣血津液，代心宣達生機。',
    pathologyTransmission: {
      zangToFu: {
        title: '熱入心包逆傳三焦',
        mechanism: '溫熱邪氣深入心包，神昏譫語，熱毒蔓延三焦水道。',
        symptoms: ['高熱神昏、舌蹇肢厥', '狂躁譫語、小便短赤', '舌絳少苔'],
        classicFormula: '安宮牛黃丸、紫雪丹'
      },
      fuToZang: {
        title: '三焦氣化失常火鬱內攻',
        mechanism: '三焦水道不利，相火鬱結，上逼心包。',
        symptoms: ['身熱夜甚、心悸煩躁', '胸悶痞結、少腹硬滿', '小便不利'],
        classicFormula: '黃連解毒湯、清營湯'
      }
    },
    clinicalKey: '外感熱病「熱入心包」搶救神昏要穴；水腫痰飲當通利三焦決瀆水道。'
  }
];

export const ZANG_INTERRELATIONS: ZangInterrelation[] = [
  {
    id: 'xin-shen',
    organs: ['心', '腎'],
    title: '心腎相交 (水火既濟)',
    mechanism: '心居上屬陽火，腎居下屬陰水。心火下溫腎水，使腎水不寒；腎水上濟心火，使心火不亢。水火互濟，精神充沛，夜寐安寧。',
    pathologyTitle: '心腎不交 (水火失濟)',
    pathologyDesc: '腎水虧虛不能上濟心火，心火獨亢於上；或心陽不足不能下溫腎水。',
    symptoms: ['心煩失眠、驚悸多夢', '頭暈耳鳴、腰膝酸軟', '潮熱盜汗、五心煩熱', '男子遺精、舌紅少苔脈細數'],
    classicPrinciple: '滋陰降火、交通心腎。代表方：交泰丸（黃連、肉桂）、六味地黃丸合黃連阿膠湯。'
  },
  {
    id: 'xin-gan',
    organs: ['心', '肝'],
    title: '心肝同調 (主血與藏血 / 神志情志)',
    mechanism: '心主血脈，肝藏血儲備；心藏神明，肝主疏泄調暢情志。心血充盈則肝有所藏，肝疏泄正常則氣機調達、心神寧靜。',
    pathologyTitle: '心肝血虛 / 心肝火旺',
    pathologyDesc: '血液虧少則心神無依、肝體失榮；情志暴怒鬱結則肝火引動心火。',
    symptoms: ['失眠健忘、心悸怔忡', '面色無華、爪甲乾枯脆薄', '急躁易怒、目赤眩暈', '婦女月經量少色淡'],
    classicPrinciple: '養血安神或清瀉肝心之火。代表方：酸棗仁湯（酸棗仁、知母、茯苓、川芎、甘草）、龍膽瀉肝湯。'
  },
  {
    id: 'xin-pi',
    organs: ['心', '脾'],
    title: '心脾資生 (生血統血 / 陽土相生)',
    mechanism: '脾為後天之本、氣血生化之源，統攝血液在脈中運行；心主血脈，心陽溫煦中焦脾土。脾健則血源充足，心榮則脈絡通暢。',
    pathologyTitle: '心脾兩虛 (思慮過度傷心脾)',
    pathologyDesc: '思慮過度，暗耗心血，同時鬱滯脾氣，運化失常，氣血雙虧。',
    symptoms: ['心悸怔忡、健忘失眠', '食少納呆、腹脹便溏', '面色萎黃、神疲乏力', '婦女崩漏經亂'],
    classicPrinciple: '益氣健脾、養心補血。代表方：歸脾湯（人參、黃耆、白朮、茯神、酸棗仁、龍眼肉、當歸、遠志等）。'
  },
  {
    id: 'xin-fei',
    organs: ['心', '肺'],
    title: '心肺相通 (氣血同源 / 宗氣行血)',
    mechanism: '心主一身之血脈，肺主一身之氣。肺朝百脈，助心行血；心推動血液，濡養肺臟。「氣為血之帥，血為氣之母」，氣行則血行。',
    pathologyTitle: '心肺氣虛 / 氣滯血瘀',
    pathologyDesc: '肺氣虛則無力助心行血致血瘀；心陽心氣虛則血行遲滯致肺失肅降咳喘。',
    symptoms: ['心悸氣短、動則益甚', '胸悶咳嗽、咳吐白沫', '面色蒼白或青紫唇暗', '舌暗紫或有瘀點'],
    classicPrinciple: '益氣活血、補心宣肺。代表方：補肺湯、生脈散合血府逐瘀湯加減。'
  },
  {
    id: 'gan-pi',
    organs: ['肝', '脾'],
    title: '肝脾和調 (疏泄與運化 / 木土調暢)',
    mechanism: '肝屬木主疏泄，脾屬土主運化。肝氣疏泄正常，膽汁排泄暢通，促進脾胃消化吸收；脾胃運化健旺，生化氣血，涵養肝木柔和。',
    pathologyTitle: '肝脾不調 / 肝木乘脾 (肝鬱脾虛)',
    pathologyDesc: '情志抑鬱肝失條達，肝氣橫逆剋伐脾土；或脾虛失運，濕盛土壅反侮肝木。',
    symptoms: ['胸脅脹痛或串痛、善太息', '精神抑鬱或急躁易怒', '脘腹脹滿、納呆食少', '腸鳴腹痛、痛隨瀉減（痛瀉）'],
    classicPrinciple: '抑木扶土、疏肝健脾。代表方：逍遙散、痛瀉要方（白朮、白芍、陳皮、防風）。'
  },
  {
    id: 'gan-fei',
    organs: ['肝', '肺'],
    title: '肝肺升降 (左升右降 / 氣機樞紐)',
    mechanism: '人體氣機運動，肝氣從人體左側升發，肺氣從人體右側肅降。一升一降，升降相協，使全身氣機循環流暢。',
    pathologyTitle: '肝火犯肺 (木火刑金)',
    pathologyDesc: '肝氣鬱結化火，鬱火循經脈上炎灼傷肺絡；或肺陰不足，清肅不行。',
    symptoms: ['胸脅灼痛、急躁易怒', '咳嗽陣作、痰黃黏稠', '痰中帶血或咯血', '舌紅苔薄黃脈弦數'],
    classicPrinciple: '清肝瀉火、潤肺止咳。代表方：黛蛤散合瀉白散加減。'
  },
  {
    id: 'gan-shen',
    organs: ['肝', '腎'],
    title: '肝腎同源 (乙癸同源 / 精血互化)',
    mechanism: '肝藏血，腎藏精，精血同源互化；肝屬木（乙），腎屬水（癸）。腎水滋養肝木（水生木），使肝陽不亢；肝血充足下藏益腎精。',
    pathologyTitle: '肝腎陰虛 / 肝陽上亢',
    pathologyDesc: '腎水虧竭不能涵養肝木，水不涵木，致使肝陽偏亢暴烈。',
    symptoms: ['頭目眩暈、耳鳴健忘', '腰膝酸軟無力', '五心煩熱、午後顴紅', '烘熱面赤、急躁失眠、舌紅少苔脈弦細數'],
    classicPrinciple: '滋養肝腎、育陰潛陽。代表方：杞菊地黃丸、一貫煎、鎮肝熄風湯。'
  },
  {
    id: 'pi-fei',
    organs: ['脾', '肺'],
    title: '脾肺相生 (培土生金 / 氣與痰源)',
    mechanism: '脾屬土，肺屬金，土生金（母子相生）。脾胃運化水穀精微上輸於肺以化生一身之氣；肺司呼吸，助脾水精四布。',
    pathologyTitle: '脾肺兩虛 / 脾虛生痰貯於肺',
    pathologyDesc: '脾氣虛弱無力運化水濕，濕聚成痰，隨氣機上貯於肺，即古云「脾為生痰之源，肺為貯痰之器」。',
    symptoms: ['面色萎黃、倦怠懶言', '咳聲低弱、咯吐白黏痰', '食少納呆、便溏腹脹', '易感冒、自汗乏力'],
    classicPrinciple: '健脾益肺、培土生金。代表方：參苓白朮散、補中益氣湯、六君子湯。'
  },
  {
    id: 'pi-shen',
    organs: ['脾', '腎'],
    title: '脾腎互資 (先天與後天 / 水火互根)',
    mechanism: '脾為後天之本，腎為先天之本。脾陽依賴腎命門之真火溫煦方能健運腐熟；腎精依賴脾胃後天水穀精微不斷充養方能源源不絕。',
    pathologyTitle: '脾腎陽虛 (命門火衰土虛寒)',
    pathologyDesc: '腎陽虛不能溫煦脾土，或脾陽久虛損及腎陽，導致兩臟陽氣衰微。',
    symptoms: ['畏寒肢冷、面色晄白', '腹部冷痛、喜溫喜按', '黎明前臍腹作痛腸鳴泄瀉（五更瀉）', '小便不利、肢體浮腫、舌淡胖苔白滑'],
    classicPrinciple: '溫補脾腎、溫陽化水。代表方：附子理中丸、真武湯、四神丸（補骨脂、肉豆蔻、吳茱萸、五味子）。'
  },
  {
    id: 'fei-shen',
    organs: ['肺', '腎'],
    title: '肺腎相資 (金水相生 / 呼吸水液通道)',
    mechanism: '肺屬金，腎屬水，金水相生。呼吸層面：肺主出氣為氣之主，腎主納氣為氣之根；水液層面：肺通調水道為水之上源，腎主水化氣為水之樞紐。',
    pathologyTitle: '肺腎陰虛 / 腎不納氣',
    pathologyDesc: '肺燥傷津久延及腎陰，或腎氣不足不能攝納肺氣，見虛喘呼吸不續。',
    symptoms: ['乾咳無痰或痰少而黏，甚至痰中帶血', '潮熱盜汗、咽乾口渴、腰膝酸軟', '呼多吸少、動則喘促呼吸淺短', '舌紅少苔脈細數或微弱'],
    classicPrinciple: '滋陰潤肺補腎，或補腎固攝納氣。代表方：百合固金湯、麥味地黃丸、人參蛤蚧散。'
  }
];

export const FU_TRANSMISSION_STEPS: FuStep[] = [
  {
    id: 'step-stomach',
    stepNumber: 1,
    organName: '胃 (胃腑)',
    fuCategory: '水穀之海',
    tcmConcept: '受納腐熟水穀 · 喜潤惡燥 · 主通降',
    modernAnalogy: '人體的食物初加工與發酵磨碎器',
    functionDetail: '飲食入口經食道入胃，胃氣將水穀容納並腐熟消化為食糜。胃氣以「順降」為正常，降則將食糜順暢推送至小腸。',
    clinicalSignificance: '胃氣充足則生機活潑，胃失通降則見噯氣呃逆、嘔吐反胃、食積胃痞。',
    pathologyIfBlocked: '胃氣上逆：嘔吐、噁心、打嗝呃逆、胃痛胃脹拒按。'
  },
  {
    id: 'step-gallbladder',
    stepNumber: 2,
    organName: '膽 (膽腑)',
    fuCategory: '中清之府 · 奇恆之腑',
    tcmConcept: '貯藏排泄膽汁 · 注入腸道助消化',
    modernAnalogy: '高效消化酶催化庫與精神決斷閥',
    functionDetail: '膽汁由肝之餘氣所化生，儲存於膽囊。受胃腸飲食信號刺激與肝氣疏泄推動，膽適時排放黃綠精純膽汁入腸中，促進油膩飲食消化。',
    clinicalSignificance: '膽既為六腑之一主通降排泄，又為奇恆之腑藏精汁不藏濁物。膽通則消化健全、睡眠安和。',
    pathologyIfBlocked: '膽汁外溢或逆流：口苦、泛黃疸、脅痛、厭油膩食少便結。'
  },
  {
    id: 'step-small-intestine',
    stepNumber: 3,
    organName: '小腸 (受盛化物)',
    fuCategory: '受盛之官 · 化物出焉',
    tcmConcept: '泌別清濁 · 清者上輸脾肺 · 濁者下注大腸與膀胱',
    modernAnalogy: '精密全效營養提純與水液分流樞紐',
    functionDetail: '小腸承接胃腐熟下傳之食糜（受盛），進一步徹底分解化生精微物質（化物）。並行使「泌別清濁」：將水穀精微吸收上輸於脾；水液滲入膀胱化為尿；食物糟粕推入大腸。',
    clinicalSignificance: '「小腸主液」。清濁不分則水走大腸致腹瀉水瀉，小便不利短赤。',
    pathologyIfBlocked: '清濁混淆：腹瀉便溏、水腫少尿、脘腹絞痛腸鳴。'
  },
  {
    id: 'step-large-intestine',
    stepNumber: 4,
    organName: '大腸 (傳導之官)',
    fuCategory: '傳導之官 · 變化出焉',
    tcmConcept: '傳導糟粕 · 吸收殘餘津液 · 形成大便排泄',
    modernAnalogy: '固體廢物成型輸送與水分終端回收器',
    functionDetail: '大腸承接小腸傳下之食糜殘渣，吸收其中的剩餘水液（大腸主津），使殘渣固化成形為大便，在肺氣肅降推動下經肛門（魄門）排出體外。',
    clinicalSignificance: '大腸以通順降下為順。傳導失職則為便秘；濕熱下注則為下痢赤白、暴注下瀉。',
    pathologyIfBlocked: '傳導糟粕不利：便秘燥結數日不通、腸癰腹痛、腹滿脹滿。'
  },
  {
    id: 'step-bladder',
    stepNumber: 5,
    organName: '膀胱 (州都之官)',
    fuCategory: '州都之官 · 津液藏焉',
    tcmConcept: '貯存尿液 · 依賴腎陽氣化出之',
    modernAnalogy: '液態廢棄物儲水池與自動壓力排泄閥',
    functionDetail: '水液經小腸泌別、大腸主津吸收後，多餘濁液下注膀胱。在腎陽蒸騰氣化作用下，膀胱開闔有度，將尿液適時排出體外。',
    clinicalSignificance: '「氣化則能出矣」。氣化失常則小便不利、癃閉；固攝無權則尿失禁、遺尿。',
    pathologyIfBlocked: '氣化不利或開闔失常：小便癃閉點滴不通、淋漓不盡、小腹急痛。'
  },
  {
    id: 'step-sanjiao',
    stepNumber: 6,
    organName: '三焦 (決瀆之官)',
    fuCategory: '孤府 · 總管元氣與水液',
    tcmConcept: '上中下三焦氣化總道 · 決瀆水道出焉',
    modernAnalogy: '人體全身能量管網、微循環與水液總立交',
    functionDetail: '上焦如霧（心肺宣發布散），中焦如漚（脾胃熟腐化生），下焦如瀆（大腸膀胱排泄決瀆）。三焦為元氣通行與水液流布之總體腔道網絡。',
    clinicalSignificance: '三焦氣化通暢，全身臟腑皆受其溫養滋潤；三焦不通則水腫、腹水、痰飲遍身。',
    pathologyIfBlocked: '三焦氣化壅阻：水腫臌脹、胸悶腹脹、上下氣機阻絕（關格）。'
  }
];
