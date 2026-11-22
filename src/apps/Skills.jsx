import { HARD, SOFT, LANG, SPOKEN, USED } from '../data.js'
const G = [['Програмчлалын хэл', LANG], ['Мэдлэг ба технологи', HARD], ['Зөөлөн ур чадвар', SOFT], ['Хэл', SPOKEN]]
// Бүх ур чадвар progress bar-тай; ашигласан төсөл нь доор жижиг үсгээр
export default function Skills() {
  return (
    <div className="m gray slist">
      {G.map(([g, items]) => (
        <section key={g}>
          <h4>{g}</h4>
          {items.map(([n, v]) => (
            <div key={n} className="srow">
              <div className="lrow"><span>{n}</span><b>{v}%</b></div>
              <div className="track"><i style={{ '--w': v + '%' }} /></div>
              {USED[n]?.length > 0 && <div className="used">▸ {USED[n].join(' · ')}</div>}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
