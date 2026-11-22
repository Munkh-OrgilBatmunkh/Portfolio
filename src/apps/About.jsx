import RetroPhoto from '../components/RetroPhoto.jsx'
import { ME } from '../data.js'
export default function About({ open }) {
  return (
    <div className="m about">
      <RetroPhoto src={ME.photo} fb="Зураг оруулна уу" />
      <div className="about-txt">
        <p className="eyebrow2">Welcome to OrgilOS 95 — сайн байна уу, би бол</p>
        <h1 className="serif">{ME.name}</h1>
        <p className="role">{ME.role}</p>
        <blockquote className="q2">“{ME.quote}”</blockquote>
        <div className="btns">
          <button className="pill" onClick={() => open('life')}>Миний тухай</button>
          <button className="pill" onClick={() => open('prj')}>Бүтээлүүд</button>
          <button className="pill" onClick={() => open('mail')}>Холбогдох</button>
        </div>
        <p className="hint">💡 Зөвлөгөө: Дүрс дээр <b>давхар дарж</b> нээнэ. MS-DOS-д <b>help</b> гэж бичээрэй.</p>
      </div>
    </div>
  )
}
