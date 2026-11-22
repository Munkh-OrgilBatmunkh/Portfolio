import { useState, useEffect, useRef } from 'react'
import Img from '../components/Img.jsx'
import Mock from '../components/Mock.jsx'
import PixelIcon from '../components/PixelIcon.jsx'
import { PRJ } from '../data.js'
export function Projects({ open }) {
  return (
    <div className="m folder">
      <div className="grid">
        {Object.entries(PRJ).map(([k, p]) => (
          <button key={k} className="card proj" onClick={() => open('p_' + k)}>
            <PixelIcon k={p.px} s={64} />
            <h3>{p.n}</h3><small>{p.f}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
const TABS = ['Юу вэ', 'Миний үүрэг', 'Үр дүн']
// "Project viewer": зүүн талд мэдээлэл, баруун талд дэлгэцийн carousel
export function ProjectDetail({ pid }) {
  const p = PRJ[pid], n = p.screens.length
  const [cur, setCur] = useState(0), [play, setPlay] = useState(false), [zoom, setZoom] = useState(false), [tab, setTab] = useState(0)
  const root = useRef(null), stage = useRef(null), thumbs = useRef([])
  const go = k => setCur((k + n) % n)
  useEffect(() => { root.current?.focus() }, [])
  useEffect(() => { if (!play) return; const t = setInterval(() => setCur(c => (c + 1) % n), 2800); return () => clearInterval(t) }, [play, n])
  useEffect(() => { thumbs.current[cur]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }) }, [cur])
  const key = e => { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1) }
  const full = () => (document.fullscreenElement ? document.exitFullscreen() : stage.current?.requestFullscreen?.())
  const [title, sub] = p.screens[cur]
  return (
    <div className="pv" tabIndex={0} ref={root} onKeyDown={key}>
      <div className="pv-l">
        <div className="pd-head"><PixelIcon k={p.px} s={48} /><div><h2>{p.n}</h2><small className="exe">{p.f}</small></div></div>
        <div className="itab"><div><small>Он</small><b>{p.year}</b></div><div><small>Төлөв</small><b>{p.status}</b></div></div>
        <div className="tags">{p.tech.map(x => <span key={x} className="chip">{x}</span>)}</div>
        <div className="seg">{TABS.map((x, i) => <button key={x} className={i === tab ? 'on' : ''} onClick={() => setTab(i)}>{x}</button>)}</div>
        <div className="fade pv-tab">
          {tab === 0 && <><h3>Юу хийдэг</h3><p className="body">{p.what}</p><h3>Хэрхэн ажилладаг</h3><p className="body">{p.how}</p></>}
          {tab === 1 && <p className="body">{p.role}</p>}
          {tab === 2 && <p className="body">{p.results}</p>}
        </div>
        <div className="btns">{p.links.map(([l, u]) => <a key={l} className="pill" href={u} target="_blank" rel="noopener noreferrer">{l} ↗</a>)}</div>
        {p.todo && <small className="exe">Жишээ агуулга — data.js дээр өөрийн мэдээллээр солино.</small>}
      </div>
      <div className="pv-r">
        <div className="pv-tool">
          <button className="pill" onClick={() => go(cur - 1)} title="Өмнөх">◀</button>
          <button className="pill" onClick={() => go(cur + 1)} title="Дараах">▶</button>
          <button className={'pill ' + (play ? 'on' : '')} onClick={() => setPlay(v => !v)} title="Слайд шоу">{play ? '❚❚' : '▷'}</button>
          <button className={'pill ' + (zoom ? 'on' : '')} onClick={() => setZoom(v => !v)} title="Томруулах">🔍</button>
          <button className="pill" onClick={full} title="Бүтэн дэлгэц">⛶</button>
          <span className="s count">{cur + 1} / {n}</span>
        </div>
        <div className={'stage' + (zoom ? ' zoom' : '')} ref={stage}>
          <div className="car" style={{ transform: `translateX(-${cur * 100}%)` }}>
            {p.screens.map((_, i) => <div key={i} className="car-slide"><Img className="slide-img" src={`/images/projects/${pid}-${i + 1}.png`} fb={<Mock k={pid} i={i} />} mock /></div>)}
          </div>
        </div>
        <div className="pv-cap"><b>{title}</b><div>{sub}</div></div>
        <div className="pv-thumbs">
          {p.screens.map(([t], i) => (
            <button key={t} ref={el => (thumbs.current[i] = el)} className={i === cur ? 'on' : ''} onClick={() => go(i)}>
              <div className="th"><Img className="slide-img" src={`/images/projects/${pid}-${i + 1}.png`} fb={<Mock k={pid} i={i} />} mock /></div>
              <span>{i + 1}. {t}</span>
            </button>
          ))}
        </div>
        <div className="pv-stat"><span>Бэлэн · ← → сумаар эргүүлнэ</span><span>{n} дэлгэц</span></div>
      </div>
    </div>
  )
}
