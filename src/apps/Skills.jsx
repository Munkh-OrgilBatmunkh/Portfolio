import { useState } from 'react'
import { HARD, SOFT, LANG } from '../data.js'
const TABS = ['Мэдлэг', 'Зөөлөн ур чадвар', 'Програмчлал', 'Хэл']
export default function Skills() {
  const [t, setT] = useState(0)
  return (
    <div className="m gray">
      <h2>Ур чадвар</h2>
      <div className="seg">{TABS.map((x, i) => <button key={x} className={i === t ? 'on' : ''} onClick={() => setT(i)}>{x}</button>)}</div>
      <div key={t} className="fade">
        {t === 0 && <div className="chips">{HARD.map(x => <span key={x} className="chip big">☑ {x}</span>)}</div>}
        {t === 1 && <div className="chips">{SOFT.map(x => <span key={x} className="chip big alt">☑ {x}</span>)}</div>}
        {t === 2 && LANG.map(([n, v]) => (
          <div key={n} className="card lang">
            <div className="lrow"><b>{n}</b><span>{v}%</span></div>
            <div className="track"><i style={{ '--w': v + '%' }} /></div>
          </div>
        ))}
        {t === 3 && <div className="chips"><span className="chip big">🇲🇳 Монгол — төрөлх хэл</span><span className="chip big alt">🇬🇧 English — Advanced</span></div>}
      </div>
    </div>
  )
}
