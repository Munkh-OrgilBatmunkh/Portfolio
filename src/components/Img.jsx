import { useState } from 'react'
export default function Img({ src, fb, className = '', mock }) {
  const [bad, setBad] = useState(false)
  return bad ? (
    <div className={'ph ' + (mock ? 'mock ' : '') + className}>{fb}</div>
  ) : (
    <img className={className} src={src} alt="" onError={() => setBad(true)} />
  )
}
