import { useState, useEffect, useRef } from 'react'
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
            <h3>{p.n}</h3>
            <small>{p.f}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
const FILES = import.meta.glob(
  '../assets/projects/*/*.{png,jpg,jpeg,webp,gif}',
  { eager: true, query: '?url', import: 'default' },
)
const imagesOf = (pid) =>
  Object.entries(FILES)
    .filter(([path]) => path.includes(`/projects/${pid}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url)
const TABS = ['Юу вэ', 'Миний үүрэг', 'Үр дүн']
const DELAY = 4000 // автоматаар эргэх хугацаа (мс)
export function ProjectDetail({ pid }) {
  const p = PRJ[pid]
  const imgs = imagesOf(pid)
  const slides = imgs.length
    ? imgs.map((src, i) => ({
        src,
        t: p.screens[i]?.[0] ?? `Дэлгэц ${i + 1}`,
        s: p.screens[i]?.[1] ?? '',
      }))
    : p.screens.map(([t, s], i) => ({ mock: i, t, s }))
  const n = slides.length
  const Pic = ({ sl }) =>
    sl.src ? (
      <img className="slide-img" src={sl.src} alt={sl.t} draggable={false} />
    ) : (
      <div className="ph mock">
        <Mock k={pid} i={sl.mock} />
      </div>
    )
  const [cur, setCur] = useState(0),
    [tab, setTab] = useState(0),
    [zoom, setZoom] = useState(false)
  const [play, setPlay] = useState(
    () => !matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const root = useRef(null),
    stage = useRef(null),
    strip = useRef(null),
    thumbs = useRef([]),
    sx = useRef(null)
  const go = (k) => setCur((k + n) % n)
  useEffect(() => {
    root.current?.focus()
  }, [])
  useEffect(() => {
    if (!play || zoom || n < 2) return
    const t = setTimeout(() => setCur((c) => (c + 1) % n), DELAY)
    return () => clearTimeout(t)
  }, [play, zoom, n, cur])
  useEffect(() => {
    const b = strip.current,
      el = thumbs.current[cur]
    if (b && el)
      b.scrollTo({
        left: el.offsetLeft - (b.clientWidth - el.clientWidth) / 2,
        behavior: 'smooth',
      })
  }, [cur])
  const key = (e) => {
    if (e.key === 'ArrowRight') go(cur + 1)
    if (e.key === 'ArrowLeft') go(cur - 1)
  }
  const full = () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : stage.current?.requestFullscreen?.()
  const swipe = (e) => {
    if (sx.current == null) return
    const d = e.changedTouches[0].clientX - sx.current
    if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1))
    sx.current = null
  }
  const { t: title, s: sub } = slides[cur]
  const stop = (f) => (e) => {
    e.stopPropagation()
    f()
  }
  return (
    <div className="pv" tabIndex={0} ref={root} onKeyDown={key}>
      <div className="pv-l">
        <div className="pd-head">
          <PixelIcon k={p.px} s={48} />
          <div>
            <h2>{p.n}</h2>
            <small className="exe">{p.f}</small>
          </div>
        </div>
        <div className="itab">
          <div>
            <small>Он</small>
            <b>{p.year}</b>
          </div>
          <div>
            <small>Төлөв</small>
            <b>{p.status}</b>
          </div>
        </div>
        <div className="tags">
          {p.tech.map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>
        <div className="seg">
          {TABS.map((x, i) => (
            <button
              key={x}
              className={i === tab ? 'on' : ''}
              onClick={() => setTab(i)}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="fade pv-tab">
          {tab === 0 && (
            <>
              <h3>Юу хийдэг</h3>
              <p className="body">{p.what}</p>
              <h3>Хэрхэн ажилладаг</h3>
              <p className="body">{p.how}</p>
            </>
          )}
          {tab === 1 && <p className="body">{p.role}</p>}
          {tab === 2 && <p className="body">{p.results}</p>}
        </div>
        <div className="btns">
          {p.links.map(([l, u]) => (
            <a
              key={l}
              className="pill"
              href={u}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l} ↗
            </a>
          ))}
        </div>
      </div>
      <div className="pv-r">
        <div className="pv-tool">
          <button className="pill" onClick={() => go(cur - 1)} title="Өмнөх">
            ◀
          </button>
          <button className="pill" onClick={() => go(cur + 1)} title="Дараах">
            ▶
          </button>
          <button
            className={'pill ' + (play ? 'on' : '')}
            onClick={() => setPlay((v) => !v)}
            title={play ? 'Зогсоох' : 'Автомат эргүүлэх'}
          >
            {play ? '❚❚' : '▷'}
          </button>
          <button
            className={'pill ' + (zoom ? 'on' : '')}
            onClick={() => setZoom((v) => !v)}
            title="Томруулах"
          >
            🔍
          </button>
          <button className="pill" onClick={full} title="Бүтэн дэлгэц">
            ⛶
          </button>
          <span className="s count">
            {cur + 1} / {n}
          </span>
        </div>
        <div
          className={'stage' + (zoom ? ' zoom' : '')}
          ref={stage}
          onClick={() => (zoom ? setZoom(false) : go(cur + 1))}
          onTouchStart={(e) => (sx.current = e.touches[0].clientX)}
          onTouchEnd={swipe}
        >
          <div
            className="car"
            style={{ transform: `translateX(-${cur * 100}%)` }}
          >
            {slides.map((sl, i) => (
              <div key={i} className="car-slide">
                <Pic sl={sl} />
              </div>
            ))}
          </div>
          {n > 1 && (
            <>
              <button
                className="nav nav-l"
                onClick={stop(() => go(cur - 1))}
                aria-label="Өмнөх"
              >
                ‹
              </button>
              <button
                className="nav nav-r"
                onClick={stop(() => go(cur + 1))}
                aria-label="Дараах"
              >
                ›
              </button>
            </>
          )}
          {play && !zoom && n > 1 && (
            <i
              className="autobar"
              key={cur}
              style={{ animationDuration: DELAY + 'ms' }}
            />
          )}
        </div>
        <div className="pv-cap">
          <b>{title}</b>
          <div>{sub}</div>
        </div>
        <div className="pv-thumbs" ref={strip}>
          {slides.map((sl, i) => (
            <button
              key={i}
              ref={(el) => (thumbs.current[i] = el)}
              className={i === cur ? 'on' : ''}
              onClick={() => go(i)}
            >
              <div className="th">
                <Pic sl={sl} />
              </div>
              <span>
                {i + 1}. {sl.t}
              </span>
            </button>
          ))}
        </div>
        <div className="pv-stat">
          <span>{n} дэлгэц</span>
        </div>
      </div>
    </div>
  )
}
