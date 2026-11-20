export const CAPS = { ism: ['Нүүр хуудас', 'Time Capsule', 'Үзмэрийн галерей'], pg: ['Тоглоом сонгох', 'Төлбөр (QPay)', 'Оноо, түвшин'], st: ['Хувьцааны жагсаалт', 'Харьцуулалт', 'Багц'] }
const COL = { ism: '#6366f1', pg: '#f43f5e', st: '#10b981' }
// Бодит дэлгэцийн зураг байхгүй үед харагдах туршилтын (dummy) дэлгэц
export default function Mock({ k, i }) {
  const c = COL[k]
  return (
    <svg viewBox="0 0 160 100" preserveAspectRatio="none">
      <rect width="160" height="100" fill="#fff" /><rect width="160" height="12" fill="#000080" /><rect x="4" y="3" width="40" height="6" fill="#fff" opacity=".8" />
      {i === 1 && <><rect x="8" y="20" width="144" height="30" fill={c} />{[8, 58, 108].map(x => <rect key={x} x={x} y="56" width="44" height="34" fill="#e5e7eb" />)}</>}
      {i === 2 && [0, 1, 2, 3].map(r => <g key={r}><rect x="8" y={20 + r * 19} width="20" height="14" fill={c} /><rect x="34" y={22 + r * 19} width="100" height="4" fill="#9ca3af" /><rect x="34" y={29 + r * 19} width="70" height="4" fill="#e5e7eb" /></g>)}
      {i === 3 && [0, 1, 2, 3, 4, 5].map(n => <rect key={n} x={8 + (n % 3) * 50} y={20 + Math.floor(n / 3) * 38} width="44" height="32" fill={n % 2 ? c : '#e5e7eb'} />)}
    </svg>
  )
}
