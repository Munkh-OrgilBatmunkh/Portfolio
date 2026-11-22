import { useState, useEffect } from 'react'
const vp = () => ({ w: window.innerWidth, h: window.innerHeight })
// Win95 хэв маягийн цонх: чирэх боломжтой, дэлгэц жижгэрэхэд хэмжээ, байрлал нь дэлгэцэнд багтана
export default function Win({
  a,
  st,
  active,
  onFocus,
  onClose,
  onMin,
  onMax,
  children,
}) {
  const [pos, setPos] = useState({
    x: 40 + (st.i % 6) * 28,
    y: 16 + (st.i % 6) * 28,
  })
  const [v, setV] = useState(vp)
  useEffect(() => {
    const f = () => setV(vp())
    addEventListener('resize', f)
    return () => removeEventListener('resize', f)
  }, [])
  const w = Math.min(a.w, v.w - 8),
    h = Math.min(a.h, v.h - 34 - 8) // дэлгэцээс томрохгүй
  const maxX = Math.max(0, v.w - w),
    maxY = Math.max(0, v.h - 34 - h)
  const x = Math.min(Math.max(0, pos.x), maxX),
    y = Math.min(Math.max(0, pos.y), maxY)
  const drag = (e) => {
    if (e.target.closest('button') || st.max) return
    const sx = e.clientX - x,
      sy = e.clientY - y
    const mv = (ev) =>
      setPos({
        x: Math.min(maxX, Math.max(0, ev.clientX - sx)),
        y: Math.min(maxY, Math.max(0, ev.clientY - sy)),
      })
    const up = () => {
      removeEventListener('pointermove', mv)
      removeEventListener('pointerup', up)
    }
    addEventListener('pointermove', mv)
    addEventListener('pointerup', up)
  }
  return (
    <div
      className={`win r ${active ? 'act' : ''} ${st.max ? 'max' : ''}`}
      onPointerDown={onFocus}
      style={{
        width: w,
        height: h,
        left: x,
        top: y,
        zIndex: st.z,
        display: st.min ? 'none' : 'flex',
      }}
    >
      <div className="tb" onPointerDown={drag} onDoubleClick={onMax}>
        <span>
          {a.e} {a.t}
        </span>
        <button onClick={onMin}>_</button>
        <button onClick={onMax}>□</button>
        <button onClick={onClose}>×</button>
      </div>
      <div className={'wb ' + (a.retro ? 'retro' : 'modern')}>{children}</div>
    </div>
  )
}
