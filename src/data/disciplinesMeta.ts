import { DisciplineMeta } from '../types/tcm';

export const DISCIPLINES: DisciplineMeta[] = [
  {
    id: 'basic-theory',
    name: '中醫基礎理論',
    englishName: 'Basic Theory of TCM',
    tagline: '陰陽互根 · 五行生剋 · 臟腑氣血',
    summary: '奠定中醫世界觀的基石。系統闡述陰陽五行學說、五臟六腑的生理運行機制，以及維持生命的「氣、血、津液」運化規律。',
    iconName: 'Compass',
    color: 'emerald',
    accentBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    topics: [
      { id: 'yinyang-wuxing', title: '陰陽五行學說', desc: '天人相應、相生相剋、五行歸類推演' },
      { id: 'zangfu', title: '臟腑藏象學說', desc: '五臟六腑官職、生理功能與表裡關聯' },
      { id: 'qixuejinye', title: '氣血津液理論', desc: '元宗營衛之氣、血行津化與生克互根' }
    ]
  },
  {
    id: 'diagnostics',
    name: '中醫診斷學',
    englishName: 'TCM Diagnostics',
    tagline: '四診合參 · 審證求因 · 八綱辨證',
    summary: '從理論邁向臨床的關鍵橋樑。研習「望、聞、問、切」四種收集病理資訊之法，並透過「八綱辨證」洞察疾病的陰陽、表裡、寒熱、虛實。',
    iconName: 'Eye',
    color: 'amber',
    accentBg: 'bg-amber-50 text-amber-900 border-amber-200',
    topics: [
      { id: 'four-examinations', title: '四診心傳 (望聞問切)', desc: '舌診分區、十問歌訣、脈象二十八種指下感覺' },
      { id: 'eight-principles', title: '八綱辨證推演', desc: '以陰陽為總綱，分清表裡寒熱虛實之病機' },
      { id: 'clinical-cases', title: '臨床辨證決策演練', desc: '綜合病案解析與四診合參辨證推導' }
    ]
  },
  {
    id: 'materia-medica',
    name: '中藥學',
    englishName: 'Chinese Materia Medica',
    tagline: '四氣五味 · 升降浮沉 · 臟腑歸經',
    summary: '探索天地草木金石的天然稟賦與治療力量。掌握「四氣五味」、「升降浮沉」與「臟腑歸經」法則，熟悉臨床代表性單味藥材的配伍特性。',
    iconName: 'Droplets',
    color: 'teal',
    accentBg: 'bg-teal-50 text-teal-900 border-teal-200',
    topics: [
      { id: 'four-natures-flavors', title: '四氣五味與性能', desc: '寒熱溫涼平與辛甘酸苦鹹之陰陽作用' },
      { id: 'channels-direction', title: '升降浮沉與歸經', desc: '趨向規律與藥效靶向臟腑經絡' },
      { id: 'herb-catalog', title: '常用本草精華圖鑑', desc: '解表、清熱、補益、化痰、活血代表藥' }
    ]
  },
  {
    id: 'formulary',
    name: '方劑學',
    englishName: 'Formulary & Prescriptions',
    tagline: '君臣佐使 · 配伍有度 · 奇正相生',
    summary: '研究如何調兵遣將、組合群藥以治大病。深究「君臣佐使」的組方哲學與配伍智慧，逐一剖析桂枝湯、四物湯、補中益氣湯等千古名方。',
    iconName: 'Layers',
    color: 'rose',
    accentBg: 'bg-rose-50 text-rose-900 border-rose-200',
    topics: [
      { id: 'jun-chen-zuo-shi', title: '君臣佐使配伍心法', desc: '主藥、輔助、佐制與引經使藥的分工合作' },
      { id: 'classic-formulas', title: '千古傳世名方解析', desc: '桂枝湯、四物湯、麻黃湯等名方結構拆解' },
      { id: 'formula-lab', title: '配伍組方實戰模擬', desc: '針對病證情境挑選搭配君臣佐使之方' }
    ]
  },
  {
    id: 'acupuncture',
    name: '針灸學',
    englishName: 'Acupuncture & Moxibustion',
    tagline: '經絡網絡 · 要穴定位 · 刺灸心法',
    summary: '探索人體氣血運行的精密實體通道。掌握十二正經、奇經八脈之走向規律，熟悉臨床常用要穴之精準定位與主治，傳承刺法與艾灸手法。',
    iconName: 'Activity',
    color: 'indigo',
    accentBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    topics: [
      { id: 'meridians', title: '經絡系統與走向', desc: '十二正經循行流注、奇經八脈海涵之用' },
      { id: 'acupoints', title: '臨床精選要穴圖譜', desc: '四總穴歌、五輸穴、原絡穴之定位與主治' },
      { id: 'needling-moxibustion', title: '針刺與艾灸操作法', desc: '進針法、提插捻轉補瀉、隔物灸與操作禁忌' }
    ]
  }
];
