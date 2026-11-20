// ===== Бүх мэдээллээ ЭНД засна =====
export const ME = {
  name: 'Мөнх-Оргил Батмөнх',
  role: 'Мэдээллийн Системийн Менежментийн 3-р курсийн оюутан',
  quote: 'Кодоор тал нутаг шиг уудам, гэр шиг дулаан туршлага бүтээдэг.', // TODO: өөрийн өгүүлбэр
  photo: '/images/me.jpg',
  email: 'oggy.batmunkh@gmail.com',
  github: 'https://github.com/Munkh-OrgilBatmunkh',
  linkedin: '', // TODO
}
// g = анги (TODO), img = public/images/schools/ доторх файл
export const EDU = [
  {
    n: 'Lemon Road Elementary School',
    y: '2018.05 – 2019.06',
    g: '',
    img: 'lemon.jpg',
    e: '🏫',
    d: 'Бага сургууль',
  },
  {
    n: 'Kilmer Middle School',
    y: '2019.08 – 2020.04',
    g: '',
    img: 'kilmer.jpg',
    e: '🏫',
    d: 'Дунд сургууль',
  },
  {
    n: '115-р Лабораторийн ерөнхий боловсролын сургууль',
    y: '2022.04 – 2024.06',
    g: '',
    img: '115.jpg',
    e: '🏫',
    d: 'Ерөнхий боловсрол',
  },
  {
    n: 'The International High School of the Gothenburg Region',
    y: '2023 (огноо шалгах)',
    g: '',
    img: 'gothenburg.jpg',
    e: '🌍',
    d: 'IB хөтөлбөр',
  },
  {
    n: 'Санхүү Эдийн Засгийн Их Сургууль',
    y: '2024.09 – 2028.05',
    g: 'Бакалавр · 3-р курс',
    img: 'ufe.jpg',
    e: '🎓',
    d: 'Мэдээллийн системийн менежмент · GPA 3.78',
    now: true,
  },
]
export const HARD = [
  'Системийн шинжилгээ ба загварчлал',
  'Бизнес анализ',
  'Объект хандлагат системийн загварчлал',
  'Supabase',
  'Microsoft SQL',
]
export const SOFT = [
  'Бие даан суралцах',
  'Багийг удирдах',
  'Багаар хамтран ажиллах',
  'Асуудал шийдэх, шүүмжлэлтэй сэтгэх',
  'Цаг ба ач холбогдлоо зохицуулах',
]
export const LANG = [
  ['Java', 70],
  ['Python', 65],
  ['JavaScript', 70],
  ['React', 65],
] // TODO: жинхэнэ түвшин
export const PRJ = {
  ism: {
    px: 'museum',
    n: 'ISM Digital Museum',
    f: 'ism_museum.exe',
    c: 'linear-gradient(135deg,#6366f1,#06b6d4)',
    what: 'Мэдээллийн Системийн Менежментийн тэнхимийн дижитал музей. Оюутны бүтээл, багш нар, арга хэмжээ, тэнхимийн түүхийг үзүүлнэ. Онцлох санаа нь Digital Time Capsule: ирээдүйн оюутнуудад захиа бичиж, дурсамжийн карт үлдээнэ.',
    how: 'React 18 + Vite дээр хийсэн, React Router-оор хуудас солино. Supabase нь нэвтрэлт, PostgreSQL, зургийн Storage болон RLS-ийг хариуцна. Зочин, оюутан, админ гэсэн 3 төрлийн хэрэглэгч бөгөөд админ үзмэр, багш, арга хэмжээ, түүхийг удирдана.',
    tech: ['React', 'Vite', 'Supabase', 'Vercel'],
    links: [
      [
        'Demo',
        'https://ism-digital-museum-38zn7egja-oggybatmunkh-5444s-projects.vercel.app/',
      ],
      ['GitHub', 'https://github.com/Munkh-OrgilBatmunkh/ISM-Digital-Museum'],
    ],
  },
  pg: {
    px: 'pad',
    n: 'Playgrid',
    f: 'playgrid.exe',
    c: 'linear-gradient(135deg,#f43f5e,#f59e0b)',
    what: 'Тоглоомын кредит цэнэглэх сайт. Тоглогч тоглоомоо сонгож, өөрийн ID-г шалгуулаад QPay QR эсвэл картаар төлнө. И-мэйлээр баримт авч, худалдан авалт бүрээс оноо цуглуулан Bronze-оос Platinum хүртэл ахина.',
    how: 'React + Vite frontend, Supabase backend. Оноо болон захиалгыг зөвхөн place_order() функц өөрчилдөг тул хэрэглэгч өөрийн оноог засаж чадахгүй (RLS). Админы самбараар тоглоом, захиалга, хэрэглэгчийг удирдана. Төлбөр одоогоор туршилтын горимтой.',
    tech: ['React', 'Vite', 'Supabase', 'QR code'],
    links: [['GitHub', 'https://github.com/Munkh-OrgilBatmunkh/Playgrid']],
  },
  st: {
    px: 'chart',
    n: 'Stock App',
    f: 'stock_app.exe',
    c: 'linear-gradient(135deg,#10b981,#3b82f6)',
    what: 'Хувьцааны мобайл апп. Хувьцааны жагсаалт, дэлгэрэнгүй мэдээлэл, хувьцаа хооронд харьцуулалт, багц (portfolio) болон мэдээний хэсэгтэй. Харанхуй ба гэрэлтэй горимтой.',
    how: 'Expo + React Native + TypeScript. Alpha Vantage API-аас үнийн мэдээ, NewsAPI-аас мэдээ татна. Expo Router-оор дэлгэц хооронд шилжинэ.',
    tech: ['React Native', 'Expo', 'TypeScript', 'REST API'],
    links: [['GitHub', 'https://github.com/Munkh-OrgilBatmunkh/Stock-app']],
  },
}

// Ур чадвар бүр хаана ашиглагдсан (TODO: өөрийнхөөрөө засна)
export const USED = {
  Java: [],
  Python: ['UDP Pinger лаб'],
  JavaScript: ['ISM Digital Museum', 'Playgrid', 'Stock App'],
  React: ['ISM Digital Museum', 'Playgrid'],
  Supabase: ['ISM Digital Museum', 'Playgrid'],
  'Системийн шинжилгээ ба загварчлал': ['Khan Bank ATM загварчлал'],
  'Объект хандлагат системийн загварчлал': ['Khan Bank ATM загварчлал'],
}
