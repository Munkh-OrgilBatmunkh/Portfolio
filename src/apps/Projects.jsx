import { useState } from 'react'
import Img from '../components/Img.jsx'
import Mock, { CAPS } from '../components/Mock.jsx'
import PixelIcon from '../components/PixelIcon.jsx'
import { PRJ } from '../data.js'
export function Projects({ open }) {
  return (
    <div className="m">
      <div className="grid">
        {Object.entries(PRJ).map(([k, p]) => (
          <button key={k} className="card proj" onClick={() => open('p_' + k)}>
            <PixelIcon k={p.px} s={64} />
            <h3>{p.n}</h3><small>{p.f}</small>
          </button>
        ))}
      </div>
      <p className="hint">{Object.keys(PRJ).length} объект · төсөл дээр дарж нээнэ</p>
    </div>
  )
}
// Мэдээлэл зүүн талд, дэлгэцүүд баруун талд — зэрэг харагдана
export function ProjectDetail({ pid }) {
  const p = PRJ[pid]
  const [cur, setCur] = useState(1)
  const shot = (i, cls) => <Img className={cls} src={`/images/projects/${pid}-${i}.png`} fb={<Mock k={pid} i={i} />} mock />
  return (
    <div className="m pd">
      <div>
        <div className="pd-head"><PixelIcon k={p.px} s={48} /><div><h2>{p.n}</h2><div className="tags">{p.tech.map(x => <span key={x} className="chip">{x}</span>)}</div></div></div>
        <h3>Юу хийдэг</h3><p className="body">{p.what}</p>
        <h3>Хэрхэн ажилладаг</h3><p className="body">{p.how}</p>
        <div className="btns">{p.links.map(([l, u]) => <a key={l} className="pill" href={u} target="_blank" rel="noopener noreferrer">{l} ↗</a>)}</div>
      </div>
      <div>
        <div className="shot-main shot">{shot(cur)}</div>
        <small className="cap">{CAPS[pid][cur - 1]}</small>
        <div className="thumbs">{[1, 2, 3].map(i => <button key={i} className={i === cur ? 'on' : ''} onClick={() => setCur(i)}><div className="shot">{shot(i)}</div></button>)}</div>
      </div>
    </div>
  )
}
