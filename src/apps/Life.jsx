import { useState } from 'react'
import Img from '../components/Img.jsx'
import { EDU } from '../data.js'
export default function Life() {
  const [sel, setSel] = useState(null)
  return (
    <div className="m">
      <h2>Миний замнал</h2>
      <p className="sub">Сургууль бүр дээр дарж дэлгэрэнгүйг үзнэ.</p>
      <ol className="tl">
        {EDU.map((s, i) => (
          <li key={s.n} style={{ animationDelay: i * 90 + 'ms' }} className={'tl-item ' + (s.now ? 'now' : '')}>
            <button className="card school" onClick={() => setSel(sel === i ? null : i)}>
              <Img className="sch-img" src={'/images/schools/' + s.img} fb={s.e} />
              <div>
                <h3>{s.n}</h3>
                <div className="tags"><span className="chip">📅 {s.y}</span><span className="chip alt">📚 Анги: {s.g || '—'}</span></div>
                {sel === i && <p className="more">{s.d}</p>}
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
