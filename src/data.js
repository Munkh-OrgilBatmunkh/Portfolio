export const ME = {
  name: 'Б. Мөнх-Оргил',
  role: 'СЭЗИС-ийн Мэдээллийн Системийн Менежментийн 3 дугаар курсийн оюутан',
  quote: 'Хүнд өгсөн урам зориг түүнийг амжилт өөд хөтөлдөг',
  photo: '/images/me.jpg',
  email: 'oggy.batmunkh@gmail.com',
  github: 'https://github.com/Munkh-OrgilBatmunkh',
  linkedin: '',
}
export const EDU = [
  {
    n: 'Логарифм Ерөнхий Боловсролын Сургууль',
    y: '09/2012 - 06/2014',
    g: '1 дүгээр анги - 3 дугаар анги',
    img: 'logarithm.jpg',
    d: 'Бага анги',
  },
  {
    n: 'Shrevewood Elementary School',
    y: '10/2014 - 06/2017',
    g: '3 дугаар анги - 6 дугаар анги',
    img: 'shrevewood.webp',
    d: 'Бага анги',
  },
  {
    n: 'Lemon Road Elementary School',
    y: '08/2017 – 06/2018',
    g: '6 дугаар анги - 7 дугаар анги',
    img: 'lemon.jpg',
    d: 'Бага анги',
  },
  {
    n: 'Kilmer Middle School',
    y: '08/2019 – 06/2020',
    g: '7 дугаар анги - 8 дугаар анги',
    img: 'kilmer.jpg',
    d: 'Дунд анги',
  },
  {
    n: 'Оргил Сургууль',
    y: '09/2020 – 06/2021',
    g: '8 дугаар анги - 9 дүгээр анги',
    img: 'orgil.jpg',
    d: 'Дунд анги',
  },
  {
    n: 'The International High School of the Gothenburg Region',
    y: '10/2023 - 12/2023 ',
    g: '',
    img: 'gothenburg.jpg',
    d: 'International Baccalaureate хөтөлбөр',
  },
  {
    n: '115-р Лабораторийн Ерөнхий Боловсролын Сургууль',
    y: '04/2022 - 06/2024',
    img: '115.jpg',
    d: 'Ерөнхий боловсрол',
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
  ['Системийн шинжилгээ ба зохиомж', 75],
  ['Бизнес анализ', 70],
  ['Объект хандлагат системийн зохиомж', 75],
  ['Supabase', 70],
  ['Microsoft SQL', 65],
]
export const SOFT = [
  ['Бие даан суралцах', 90],
  ['Багийг удирдах', 75],
  ['Багаар хамтран ажиллах', 85],
  ['Асуудал шийдэх, шүүмжлэлтэй сэтгэх', 80],
  ['Цаг ба ач холбогдлоо зохицуулах', 70],
]
export const SPOKEN = [
  ['Монгол хэл', 100],
  ['Англи хэл', 85],
]
export const LANG = [
  ['Java', 70],
  ['Python', 65],
  ['JavaScript', 70],
  ['React', 65],
]
export const PRJ = {
  ism: {
    px: 'museum',
    year: '2026',
    status: 'Vercel дээр байршсан',
    todo: true,
    role: 'Frontend болон Supabase backend-ийг бие даан хөгжүүлсэн.',
    results:
      'Нийтэд нээлттэй ажиллаж байгаа. Зочин, оюутан, админ гэсэн 3 төрлийн хэрэглэгчтэй.',
    screens: [
      ['Нүүр хуудас', 'Тэнхимийн амьд архив рүү угтах хаалга.'],
      ['Дижитал үзэгсгэлэн', 'Оюутны бүтээл, үзмэрүүдийн галерей.'],
      ['Тэнхимийн түүх', 'Тэнхимийн түүх, Time Machine.'],
      ['Арга хэмжээ', 'Болсон үйл ажиллагаа'],
    ],
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
    year: '2026',
    status: 'Туршилтын горим',
    todo: true,
    role: 'Бүх хэсгийг хөгжүүлсэн: frontend, Supabase бүтэц, төлбөрийн урсгал.',
    results:
      'Захиалга, оноо, түвшний систем ажиллана. Төлбөр туршилтын горимтой.',
    screens: [
      ['Тоглоом сонгох', 'Кредит цэнэглэх тоглоомоо сонгоно.'],
      ['Тоглоом сонгох', 'ID-аа оруулж шалгуулна.'],
      ['Дрофайл', 'QPay QR эсвэл картаар төлнө.'],
      ['Тоглоом сонгох', 'Bronze-оос Platinum хүртэл ахина.'],
    ],
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
    year: '2026',
    status: 'Mobile апп',
    todo: true,
    role: 'Апп-ын дэлгэц, API холболтыг хийсэн.',
    results: 'Жагсаалт, харьцуулалт, багц, мэдээний хэсэгтэй мобайл апп.',
    screens: [
      ['Хувьцааны жагсаалт', 'Хувьцаануудын үнэ, өөрчлөлт.'],
      ['Дэлгэрэнгүй', 'Нэг хувьцааны график, мэдээлэл.'],
      ['Харьцуулалт', 'Хувьцаа хооронд харьцуулна.'],
      ['Багц ба мэдээ', 'Миний багц, сүүлийн мэдээ.'],
    ],
    n: 'Stock App',
    f: 'stock_app.exe',
    c: 'linear-gradient(135deg,#10b981,#3b82f6)',
    what: 'Хувьцааны мобайл апп. Хувьцааны жагсаалт, дэлгэрэнгүй мэдээлэл, хувьцаа хооронд харьцуулалт, багц (portfolio) болон мэдээний хэсэгтэй. Харанхуй ба гэрэлтэй горимтой.',
    how: 'Expo + React Native + TypeScript. Alpha Vantage API-аас үнийн мэдээ, NewsAPI-аас мэдээ татна. Expo Router-оор дэлгэц хооронд шилжинэ.',
    tech: ['React Native', 'Expo', 'TypeScript', 'REST API'],
    links: [['GitHub', 'https://github.com/Munkh-OrgilBatmunkh/Stock-app']],
  },

  udp: {
    px: 'light',
    n: 'UDP Pinger Server',
    f: 'udp_pinger.exe',
    c: 'linear-gradient(135deg,#f59e0b,#16a34a)',
    year: '2026',
    status: 'Хичээлийн төсөл',
    todo: true,
    what: 'UDP протоколоор ажилладаг ping сервер ба 3 клиент (Client-A, B, C). Клиент бүр пакет илгээж, сервер хариу буцаана. Пакет алдагдвал клиентийн гэрлэн дохио Green-ээс Yellow болж, ажлаа дуусахад Red болно. Алдагдсан пакетыг тоолж, самбар дээр бодит цагт харуулна.',
    how: 'Python-ийн socket сангаар UDP холболт хийнэ. Серверийн үндсэн thread пакет хүлээн авч, тусдаа monitor thread 2.2 секундэд ирээгүй пакетыг алдагдсанд тооцно. Пакет алдагдлыг санамсаргүйгээр симуляци хийдэг. Tkinter-ээр хийсэн UDP Packet Monitor самбар нь клиент бүрийн гэрлэн дохио, ирсэн ба алдагдсан тоо, console-ыг харуулна.',
    tech: ['Python', 'UDP socket', 'Threading', 'Tkinter'],
    role: 'Сервер, клиент болон хяналтын самбарыг хөгжүүлсэн.',
    results:
      'Клиент бүрийн пакет алдагдлын хувийг тооцож, 3 гэрлэн дохиогоор бодит цагт харуулдаг.',
    screens: [
      ['Клиентүүд', 'Client-A, B, C пакет илгээж, хариу хүлээнэ.'],
      ['Сервер', 'Heartbeat, пакет алдагдсан, Echo dropped мэдэгдлүүд.'],
      ['Хяналтын самбар', 'UDP Packet Monitor: гэрлэн дохио ба console.'],
    ],
    links: [
      ['GitHub', 'https://github.com/Munkh-OrgilBatmunkh/UDP-pinger-server'],
    ],
  },
}

export const USED = {
  Java: [],
  Python: [],
  JavaScript: [],
  React: [],
  Supabase: [],
  'Системийн шинжилгээ ба зохиомж': [],
  'Объект хандлагат системийн зохиомж': [],
}
