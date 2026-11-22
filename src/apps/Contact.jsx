import { useState, useEffect } from 'react'
import { ME } from '../data.js'
import { GitHubLogo, MailLogo, LinkedInLogo } from '../components/Logos.jsx'
const STEPS = ['Мөнх-Оргил руу залгаж байна...', 'Хэрэглэгчийн нэр, нууц үгийг шалгаж байна...', 'Сүлжээнд компьютерийг бүртгэж байна...']
// Нээгдмэгц шууд холболт хийж эхэлнэ (progress bar), дараа нь хаягууд гарна
export default function Contact() {
  const [st, setSt] = useState(1) // 1-3 холбогдож байна, 4 холбогдсон
  const [done, setDone] = useState('')
  useEffect(() => {
    if (st > 3) return
    const t = setTimeout(() => setSt(st + 1), 900); return () => clearTimeout(t)
  }, [st])
  const copy = async (v, k) => { try { await navigator.clipboard.writeText(v) } catch { /* ignore */ } setDone(k); setTimeout(() => setDone(''), 1500) }
  const rows = [
    [<MailLogo />, 'Имэйл', ME.email, 'mailto:' + ME.email],
    [<GitHubLogo />, 'GitHub', ME.github.replace('https://', ''), ME.github],
    ...(ME.linkedin ? [[<LinkedInLogo />, 'LinkedIn', ME.linkedin.replace('https://', ''), ME.linkedin]] : []),
  ]
  return (
    <div className="m gray dial">
      {st < 4 && <div className="card"><h3>Холбогдож байна...</h3><p>{STEPS[st - 1]}</p><div className="track"><i style={{ '--w': st * 33 + '%' }} /></div></div>}
      {st === 4 && <>
        <p><b>✔ 56000 bps хурдтай холбогдлоо.</b> Холбоо барих хаягууд:</p>
        {rows.map(([logo, l, v, u]) => (
          <div key={l} className="card crow"><span className="ci">{logo}</span><div><b>{l}</b><div>{v}</div></div>
            <button className="pill" onClick={() => copy(v, l)}>{done === l ? 'Хуулсан ✓' : 'Хуулах'}</button>
            <a className="pill" href={u} target={u.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">Нээх</a></div>
        ))}</>}
    </div>
  )
}
