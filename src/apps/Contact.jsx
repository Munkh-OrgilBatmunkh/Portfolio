import { useState, useEffect } from 'react'
import { ME } from '../data.js'
const STEPS = ['Dialing Munkh-Orgil...', 'Verifying user name and password...', 'Registering your computer on the network...']
// Win95 Dial-Up Networking: "холбогдох" бодитоор холболт үүсгэж байгаа мэт харагдана
export default function Contact() {
  const [st, setSt] = useState(0) // 0 хүлээж байна, 1-3 залгаж байна, 4 холбогдсон
  const [done, setDone] = useState('')
  useEffect(() => {
    if (st < 1 || st > 3) return
    const t = setTimeout(() => setSt(st + 1), 900); return () => clearTimeout(t)
  }, [st])
  const copy = async (v, k) => { try { await navigator.clipboard.writeText(v) } catch { /* ignore */ } setDone(k); setTimeout(() => setDone(''), 1500) }
  const rows = [['✉', 'Имэйл', ME.email, 'mailto:' + ME.email], ['🐙', 'GitHub', ME.github.replace('https://', ''), ME.github], ...(ME.linkedin ? [['💼', 'LinkedIn', ME.linkedin.replace('https://', ''), ME.linkedin]] : [])]
  return (
    <div className="m gray dial">
      {st === 0 && <div className="card"><h3>Connect To</h3><p>📞 Munkh-Orgil-тай холбогдохын тулд сүлжээнд залгана уу.</p><label>User name: <input className="in" value="guest" readOnly /></label><div className="btns"><button className="pill" onClick={() => setSt(1)}>Connect</button></div></div>}
      {st > 0 && st < 4 && <div className="card"><h3>Connecting...</h3><p>{STEPS[st - 1]}</p><div className="track"><i style={{ '--w': st * 33 + '%' }} /></div></div>}
      {st === 4 && <>
        <p><b>✔ Connected at 56000 bps.</b> Холбоо барих хаягууд:</p>
        {rows.map(([i, l, v, u]) => (
          <div key={l} className="card crow"><span className="ci">{i}</span><div><b>{l}</b><div>{v}</div></div>
            <button className="pill" onClick={() => copy(v, l)}>{done === l ? 'Хуулсан ✓' : 'Copy'}</button>
            <a className="pill" href={u} target={u.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">Open</a></div>
        ))}
        <div className="btns"><button className="pill" onClick={() => setSt(0)}>Disconnect</button></div></>}
    </div>
  )
}
