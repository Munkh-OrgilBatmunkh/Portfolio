import { useState } from 'react'
import { ME, LANG, PRJ, HARD } from '../data.js'
// MS-DOS: энэ нь зориуд retro хэвээр үлдсэн
export function Dos({ close }) {
  const [log, setLog] = useState([])
  const [v, setV] = useState('')
  const C = {
    help: () => 'about · skills · projects · dir · date · ver · cls · exit',
    about: () => `${ME.name}\n${ME.role}`,
    skills: () => LANG.map(l => l[0]).join(', ') + '\n' + HARD.join('\n'),
    projects: () => Object.values(PRJ).map(p => p.f).join('\n'),
    dir: () => Object.values(PRJ).map(p => p.f).join('\n'),
    date: () => new Date().toLocaleString('mn-MN'),
    ver: () => 'OrgilOS 95 [Version 1.0]',
    matrix: () => 'Wake up, Munkh-Orgil... 🐇',
  }
  const run = e => {
    e.preventDefault()
    const c = v.trim().toLowerCase()
    setV('')
    if (c === 'cls') return setLog([])
    if (c === 'exit') return close()
    setLog(l => [...l, `C:\\> ${c}`, C[c] ? C[c]() : `'${c}' — буруу команд. help гэж бичнэ үү.`])
  }
  return (
    <div className="dos">
      <div>OrgilOS 95 [Version 1.0]{'\n'}help гэж бичээд үзээрэй</div>
      {log.map((l, i) => <div key={i}>{l}</div>)}
      <form onSubmit={run}>C:\&gt; <input autoFocus autoComplete="off" autoCapitalize="off" value={v} onChange={e => setV(e.target.value)} /></form>
    </div>
  )
}
export function Bin() {
  return <div className="m"><h3>🗑️ Хогийн сав хоосон</h3><p className="body">Бүтэлгүйтсэн анхны оролдлогууд ч энд байхгүй. Тэднээс юм сурсан 😉</p></div>
}
