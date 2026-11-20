import { useState } from 'react'
// Win95 хэв маягийн цонхны хүрээ (гарчигийн мөр, товчнууд, чирэх)
export default function Win({ a, st, active, onFocus, onClose, onMin, onMax, children }) {
  const [pos, setPos] = useState({ x: 40 + (st.i % 6) * 28, y: 16 + (st.i % 6) * 28 })
  const drag = e => {
    if (e.target.closest('button') || st.max) return
    const sx = e.clientX - pos.x, sy = e.clientY - pos.y
    const mv = ev => setPos({ x: Math.max(0, ev.clientX - sx), y: Math.max(0, ev.clientY - sy) })
    const up = () => { removeEventListener('pointermove', mv); removeEventListener('pointerup', up) }
    addEventListener('pointermove', mv); addEventListener('pointerup', up)
  }
  return (
    <div className={`win r ${active ? 'act' : ''} ${st.max ? 'max' : ''}`} onPointerDown={onFocus}
      style={{ width: a.w, height: a.h, left: pos.x, top: pos.y, zIndex: st.z, display: st.min ? 'none' : 'flex' }}>
      <div className="tb" onPointerDown={drag} onDoubleClick={onMax}>
        <span>{a.e} {a.t}</span>
        <button onClick={onMin}>_</button><button onClick={onMax}>□</button><button onClick={onClose}>×</button>
      </div>
      <div className={'wb ' + (a.retro ? 'retro' : 'modern')}>{children}</div>
    </div>
  )
}
