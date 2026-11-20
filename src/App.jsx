import { useState, useEffect, useRef } from 'react'
import PixelIcon from './components/PixelIcon.jsx'
import Win from './components/Win.jsx'
import About from './apps/About.jsx'
import Life from './apps/Life.jsx'
import Skills from './apps/Skills.jsx'
import Contact from './apps/Contact.jsx'
import { Projects, ProjectDetail } from './apps/Projects.jsx'
import { Dos } from './apps/Retro.jsx'
import { PRJ } from './data.js'

// Бүх апп-ын бүртгэл: шинэ апп нэмэх бол энд нэг мөр нэмнэ
const REG = {
  pc: {
    t: 'Миний компьютер',
    l: 'Миний компьютер',
    e: '🖥️',
    w: 760,
    h: 540,
    C: About,
  },
  life: {
    t: 'Миний тухай',
    l: 'Миний тухай',
    e: '📄',
    w: 780,
    h: 560,
    C: Life,
  },
  prj: {
    t: 'C:\\Бүтээлүүд',
    l: 'Бүтээлүүд',
    e: '📁',
    w: 600,
    h: 380,
    C: Projects,
  },
  skills: {
    t: 'Control Panel — Ур чадвар',
    l: 'Ур чадвар',
    e: '🎛️',
    w: 720,
    h: 480,
    C: Skills,
  },
  mail: {
    t: 'Outlook Express — Холбоо барих',
    l: 'Холбоо барих',
    e: '✉️',
    w: 520,
    h: 400,
    C: Contact,
  },
  dos: {
    t: 'MS-DOS',
    l: 'MS-DOS',
    e: '⌨️',
    w: 540,
    h: 340,
    C: Dos,
    retro: true,
  },
}
const getApp = (id) =>
  id.startsWith('p_')
    ? {
        t: PRJ[id.slice(2)].n,
        e: <PixelIcon k={PRJ[id.slice(2)].px} s={16} />,
        w: 860,
        h: 540,
        C: () => <ProjectDetail pid={id.slice(2)} />,
      }
    : REG[id]

function Boot({ done }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= 16) {
      const t = setTimeout(done, 350)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setN(n + 1), 130)
    return () => clearTimeout(t)
  }, [n])
  return (
    <div className="boot" onClick={done}>
      <div className="blogo">
        <div className="lg">
          <i style={{ background: '#e8000b' }} />
          <i style={{ background: '#1a9c3a' }} />
          <i style={{ background: '#000080' }} />
          <i style={{ background: '#ffd830' }} />
        </div>
        <div className="px">
          OrgilOS
          <br />
          <span>95</span>
        </div>
      </div>
      <div className="pb">
        {Array.from({ length: n }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div>Мөнх-Оргилын ертөнцийг ачаалж байна...</div>
    </div>
  )
}

export default function App() {
  const [booting, setBooting] = useState(true)
  const [off, setOff] = useState(false)
  const [menu, setMenu] = useState(false)
  const [sel, setSel] = useState(null)
  const [wins, setWins] = useState([])
  const zc = useRef(10),
    nc = useRef(0)
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 10000)
    return () => clearInterval(t)
  }, [])

  const open = (id) =>
    setWins((w) =>
      w.some((x) => x.id === id)
        ? w.map((x) =>
            x.id === id ? { ...x, min: false, z: ++zc.current } : x,
          )
        : [
            ...w,
            { id, z: ++zc.current, min: false, max: false, i: nc.current++ },
          ],
    )
  const patch = (id, p) =>
    setWins((w) => w.map((x) => (x.id === id ? { ...x, ...p } : x)))
  const focus = (id) => patch(id, { z: ++zc.current, min: false })
  const close = (id) => setWins((w) => w.filter((x) => x.id !== id))
  const top = wins.filter((w) => !w.min).sort((a, b) => b.z - a.z)[0]?.id
  const finishBoot = () => {
    if (booting) {
      setBooting(false)
      open('pc')
    }
  }
  const coarse =
    typeof matchMedia !== 'undefined' && matchMedia('(pointer:coarse)').matches
  const icons = Object.keys(REG)

  return (
    <div className="os" onClick={() => setMenu(false)}>
      {booting && <Boot done={finishBoot} />}
      {off && (
        <div className="off" onClick={() => location.reload()}>
          Одоо компьютерээ аюулгүй унтрааж болно.
          <small>(дахин асаахын тулд дар)</small>
        </div>
      )}
      <div className="desk">
        {icons.map((k) => (
          <div
            key={k}
            className={'ic ' + (sel === k ? 'sel' : '')}
            onClick={(e) => {
              e.stopPropagation()
              setSel(k)
              if (coarse) open(k)
            }}
            onDoubleClick={() => open(k)}
          >
            <b>{REG[k].e}</b>
            <span>{REG[k].l}</span>
          </div>
        ))}
      </div>
      <div className="brand">
        <div className="px">OrgilOS 95</div>Мөнх-Оргил Батмөнх
      </div>
      {wins.map((st) => {
        const a = getApp(st.id),
          C = a.C
        return (
          <Win
            key={st.id}
            a={a}
            st={st}
            active={top === st.id}
            onFocus={() => focus(st.id)}
            onClose={() => close(st.id)}
            onMin={() => patch(st.id, { min: true })}
            onMax={() => patch(st.id, { max: !st.max })}
          >
            <C open={open} close={() => close(st.id)} />
          </Win>
        )
      })}
      {menu && (
        <div className="sm r" onClick={(e) => e.stopPropagation()}>
          <div className="sd px">Orgil95</div>
          <ul>
            {icons
              .filter((k) => k !== 'pc')
              .map((k) => (
                <li
                  key={k}
                  onClick={() => {
                    open(k)
                    setMenu(false)
                  }}
                >
                  {REG[k].e} &nbsp;{REG[k].l}
                </li>
              ))}
            <li
              onClick={() => {
                open('pc')
                setMenu(false)
              }}
            >
              🖥️ &nbsp;Миний компьютер
            </li>
            <hr />
            <li
              onClick={() => {
                setMenu(false)
                setOff(true)
              }}
            >
              ⏻ &nbsp;Унтраах...
            </li>
          </ul>
        </div>
      )}
      <div className="tk r">
        <button
          className="px startb"
          onClick={(e) => {
            e.stopPropagation()
            setMenu((m) => !m)
          }}
        >
          ▣ Start
        </button>
        <div className="tbs">
          {wins.map((w) => (
            <button
              key={w.id}
              className={'tbn ' + (top === w.id ? 'on' : '')}
              onClick={() =>
                top === w.id ? patch(w.id, { min: true }) : focus(w.id)
              }
            >
              {getApp(w.id).e} {getApp(w.id).t}
            </button>
          ))}
        </div>
        <div className="clk s">
          {time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  )
}
