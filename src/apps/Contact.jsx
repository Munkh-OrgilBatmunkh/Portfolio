import { useState } from 'react'
import { ME } from '../data.js'
export default function Contact() {
  const [s, setS] = useState('Сайн байна уу!')
  const [b, setB] = useState('')
  const send = e => { e.preventDefault(); window.location.href = `mailto:${ME.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}` }
  return (
    <div className="m gray">
      <h2>Холбоо барих</h2>
      <form className="card form" onSubmit={send}>
        <label>Хэнд<input value={ME.email} readOnly /></label>
        <label>Гарчиг<input value={s} onChange={e => setS(e.target.value)} /></label>
        <label>Зурвас<textarea rows="5" value={b} onChange={e => setB(e.target.value)} placeholder="Дадлага, хамтын төсөл, эсвэл зүгээр л мэнд..." /></label>
        <button className="pill" type="submit">✉ Илгээх</button>
      </form>
      <div className="btns">
        <a className="pill ghost" href={ME.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        {ME.linkedin && <a className="pill ghost" href={ME.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
        <a className="pill ghost" href={'mailto:' + ME.email}>{ME.email}</a>
      </div>
    </div>
  )
}
