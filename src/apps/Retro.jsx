import { useState } from 'react'
import { ME, LANG, PRJ, HARD } from '../data.js'
// Нэр бичихэд нээгдэх апп-ууд: нэр → цонхны id
const RUN = { ism: 'p_ism', ism_museum: 'p_ism', museum: 'p_ism', playgrid: 'p_pg', pg: 'p_pg', stock_app: 'p_st', stock: 'p_st', udp: 'p_udp', pinger: 'p_udp', udp_pinger: 'p_udp', about: 'pc', me: 'pc', life: 'life', education: 'life', skills: 'skills', contact: 'mail', mail: 'mail', projects: 'prj', folder: 'prj' }
export function Dos({ close, open }) {
  const [log, setLog] = useState([])
  const [v, setV] = useState('')
  const C = {
    help: () => 'ism_museum · playgrid · stock_app  — төслийг шууд нээнэ\nabout · life · skills · contact · projects — апп нээнэ\nopen <нэр> · dir · date · ver · cls · exit',
    dir: () => Object.values(PRJ).map(p => p.f).join('\n'),
    date: () => new Date().toLocaleString('mn-MN'),
    ver: () => 'OrgilOS 95 [Version 1.0]',
    whoami: () => `${ME.name}\n${ME.role}\n${LANG.map(l => l[0]).join(', ')} · ${HARD.length} технологи`,
  }
  const run = e => {
    e.preventDefault()
    const raw = v.trim().toLowerCase(); setV('')
    if (raw === 'cls') return setLog([])
    if (raw === 'exit') return close()
    const parts = raw.split(/\s+/), name = (['open', 'start'].includes(parts[0]) ? parts[1] || '' : parts[0]).replace(/\.exe$/, '')
    let out
    if (RUN[name]) { open(RUN[name]); out = `${name} эхэлж байна...` }
    else out = C[raw] ? C[raw]() : `'${raw}' — буруу команд. help гэж бичнэ үү.`
    setLog(l => [...l, `C:\\> ${raw}`, out])
  }
  return (
    <div className="dos">
      <div>OrgilOS 95 [Version 1.0]{'\n'}Төслийн нэр (жишээ нь playgrid) бичвэл шууд нээгдэнэ. help — тусламж</div>
      {log.map((l, i) => <div key={i}>{l}</div>)}
      <form onSubmit={run}>C:\&gt; <input autoFocus autoComplete="off" autoCapitalize="off" value={v} onChange={e => setV(e.target.value)} /></form>
    </div>
  )
}
