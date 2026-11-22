import RetroPhoto from '../components/RetroPhoto.jsx'
import { ME } from '../data.js'
export default function About() {
  return (
    <div className="m about">
      <RetroPhoto src={ME.photo} fb="Зураг оруулна уу" />
      <div className="about-txt">
        <p className="eyebrow2">Тавтай морил — сайн байна уу, би бол</p>
        <h1 className="serif">{ME.name}</h1>
        <p className="role">{ME.role}</p>
        <blockquote className="q2">“{ME.quote}”</blockquote>
        <p className="hint">💡 Зөвлөгөө: Дүрс дээр <b>давхар дарж</b> нээнэ. MS-DOS-д <b>help</b> гэж бичээрэй.</p>
      </div>
    </div>
  )
}
