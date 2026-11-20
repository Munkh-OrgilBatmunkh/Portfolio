import { useState } from 'react'
import Img from '../components/Img.jsx'
import { PRJ } from '../data.js'
export function Projects({ open }) {
  return (
    <div className="m">
      <h2>Бүтээлүүд</h2>
      <p className="sub">Төсөл дээр дарж нээнэ.</p>
      <div className="grid">
        {Object.entries(PRJ).map(([k, p]) => (
          <button key={k} className="card proj" onClick={() => open('p_' + k)}>
            <div className="cover" style={{ background: p.c }}>{p.ic}</div>
            <h3>{p.n}</h3>
            <div className="tags">{p.tech.slice(0, 3).map(t => <span key={t} className="chip">{t}</span>)}</div>
            <small>{p.f}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
const TABS = ['Юу хийдэг', 'Хэрхэн ажилладаг', 'Дэлгэц', 'Холбоос']
export function ProjectDetail({ pid }) {
  const p = PRJ[pid]
  const [t, setT] = useState(0)
  return (
    <div className="m">
      <div className="cover wide" style={{ background: p.c }}>{p.ic}</div>
      <h2>{p.n}</h2>
      <div className="tags">{p.tech.map(x => <span key={x} className="chip">{x}</span>)}</div>
      <div className="seg">{TABS.map((x, i) => <button key={x} className={i === t ? 'on' : ''} onClick={() => setT(i)}>{x}</button>)}</div>
      <div key={t} className="fade">
        {t === 0 && <p className="body">{p.what}</p>}
        {t === 1 && <p className="body">{p.how}</p>}
        {t === 2 && <div className="shots">{[1, 2, 3].map(i => <Img key={i} className="shot" src={`/images/projects/${pid}-${i}.png`} fb={`Дэлгэц ${i}`} />)}</div>}
        {t === 3 && <div className="btns">{p.links.map(([l, u]) => <a key={l} className="pill" href={u} target="_blank" rel="noopener noreferrer">{l} ↗</a>)}</div>}
      </div>
    </div>
  )
}
