import { useState } from 'react'
import { HARD, SOFT, LANG, USED } from '../data.js'
// "Add/Remove Programs" загвар: зүүн талд жагсаалт, баруун талд Properties
const GROUPS = [
  ['Програмчлалын хэл', LANG.map(([n, v]) => ({ n, v }))],
  ['Мэдлэг ба технологи', HARD.map(n => ({ n }))],
  ['Зөөлөн ур чадвар', SOFT.map(n => ({ n }))],
  ['Хэл', [{ n: 'Монгол — төрөлх хэл' }, { n: 'English — Advanced' }]],
]
export default function Skills() {
  const [sel, setSel] = useState('Java')
  const all = GROUPS.flatMap(g => g[1]), cur = all.find(s => s.n === sel) || all[0]
  const used = USED[cur.n]
  return (
    <div className="m gray">
      <p style={{ margin: '0 0 8px' }}>Суулгагдсан ур чадварууд — нэг дээр дарж дэлгэрэнгүйг үз:</p>
      <div className="sk">
        <div className="list">
          {GROUPS.map(([g, items]) => <div key={g}><h4>{g}</h4>{items.map(s => <button key={s.n} className={s.n === cur.n ? 'on' : ''} onClick={() => setSel(s.n)}>☑ {s.n}</button>)}</div>)}
        </div>
        <div className="card props" key={cur.n}>
          <h2>{cur.n}</h2>
          {cur.v != null && <><div className="lrow"><span>Түвшин</span><b>{cur.v}%</b></div><div className="track"><i style={{ '--w': cur.v + '%' }} /></div></>}
          <h3 style={{ marginTop: 12 }}>Хаана ашигласан</h3>
          {used ? (used.length ? used.map(u => <div key={u}>▸ {u}</div>) : <div className="hint">Төсөл нэмнэ (data.js → USED)</div>) : <div className="hint">Багийн болон хичээлийн ажлуудад өдөр тутам хэрэглэдэг.</div>}
        </div>
      </div>
    </div>
  )
}
