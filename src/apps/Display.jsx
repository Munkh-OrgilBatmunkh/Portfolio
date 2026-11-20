export const BGS = [['teal', 'Классик Teal'], ['clouds', 'Clouds'], ['steppe', 'Монгол тал (pixel)']]
// Win95-ийн "Display Properties" — ширээний дэвсгэр солих
export default function Display({ bg, setBg }) {
  return (
    <div className="m gray">
      <h2>Дэлгэцийн дэвсгэр</h2>
      <div className="bgp" data-bg={bg} />
      <div className="bglist">
        {BGS.map(([k, n]) => (
          <button key={k} className={'pill ' + (bg === k ? 'on' : '')} onClick={() => setBg(k)}>{bg === k ? '◉' : '○'} {n}</button>
        ))}
      </div>
    </div>
  )
}
