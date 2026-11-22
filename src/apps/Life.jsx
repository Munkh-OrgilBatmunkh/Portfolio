import { useState, useRef } from 'react'
import { EDU } from '../data.js'
const FB = ['linear-gradient(135deg,#2b1d14,#b74b21)', 'linear-gradient(135deg,#14212b,#2178b7)', 'linear-gradient(135deg,#1d2b14,#6fb721)', 'linear-gradient(135deg,#2b1430,#9a21b7)', 'linear-gradient(135deg,#0b0401,#ebb25f)']
// Сургууль бүр бүтэн дэлгэцийн зураг; хооронд нь аажим уусан шилжинэ (cross-fade)
export default function Life() {
  const [i, setI] = useState(0)
  const [bad, setBad] = useState({})
  const lock = useRef(0)
  const go = n => setI(Math.max(0, Math.min(EDU.length - 1, n)))
  const wheel = e => { const t = Date.now(); if (t - lock.current < 900 || Math.abs(e.deltaY) < 8) return; lock.current = t; go(i + (e.deltaY > 0 ? 1 : -1)) }
  const key = e => { if (['ArrowDown', 'ArrowRight'].includes(e.key)) go(i + 1); if (['ArrowUp', 'ArrowLeft'].includes(e.key)) go(i - 1) }
  const s = EDU[i]
  return (
    <div className="edu" tabIndex={0} onWheel={wheel} onKeyDown={key}>
      {EDU.map((x, k) => (
        <div key={x.n} className={'edu-slide ' + (k === i ? 'on' : '')} aria-hidden={k !== i}>
          {bad[k]
            ? <div className="edu-fb" style={{ background: FB[k % FB.length] }}><span>{x.e}</span></div>
            : <img src={'/images/schools/' + x.img} alt={x.n} onError={() => setBad(b => ({ ...b, [k]: 1 }))} />}
        </div>
      ))}
      <div className="edu-scrim" />
      <div className="edu-top"><span>Миний замнал</span><span>{i + 1} / {EDU.length}</span></div>
      <div className="edu-rail">
        {EDU.map((x, k) => <button key={x.n} className={k === i ? 'on' : ''} onClick={() => go(k)} aria-label={x.n}><i /></button>)}
      </div>
      <div className="edu-copy" key={i}>
        <p className="edu-years">{s.y}</p>
        <h2 className="edu-name">{s.n}</h2>
        <p className="edu-meta">{s.d}</p>
        {s.g && <p className="edu-note">Анги: {s.g}</p>}
      </div>
      <div className="edu-nav">
        <button className="pill" onClick={() => go(i - 1)} disabled={i === 0}>◀ Өмнөх</button>
        <button className="pill" onClick={() => go(i + 1)} disabled={i === EDU.length - 1}>Дараах ▶</button>
      </div>
    </div>
  )
}
