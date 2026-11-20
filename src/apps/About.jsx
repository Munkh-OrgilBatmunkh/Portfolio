import Img from '../components/Img.jsx'
import { ME } from '../data.js'
export default function About({ open }) {
  return (
    <div className="m">
      <div className="hero">
        <div className="avatar"><Img src={ME.photo} fb="Зураг оруулна уу" /></div>
        <div>
          <p className="eyebrow">Welcome to OrgilOS 95 — сайн байна уу, би бол</p>
          <h1 className="grad">{ME.name}</h1>
          <span className="chip">{ME.role}</span>
        </div>
      </div>
      <blockquote className="quote">{ME.quote}</blockquote>
      <div className="btns">
        <button className="pill" onClick={() => open('life')}>Миний тухай</button>
        <button className="pill" onClick={() => open('prj')}>Бүтээлүүд</button>
        <button className="pill ghost" onClick={() => open('mail')}>Холбогдох</button>
      </div>
      <p className="hint">💡 Зөвлөгөө: Дүрс дээр <b>давхар дарж</b> нээнэ. MS-DOS-д <b>help</b> гэж бичээрэй.</p>
    </div>
  )
}
