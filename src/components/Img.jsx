import { useState } from 'react'
// Зураг олдохгүй бол placeholder харуулна
export default function Img({ src, fb, className = '' }) {
  const [bad, setBad] = useState(false)
  return bad
    ? <div className={'ph ' + className}>{fb}</div>
    : <img className={className} src={src} alt="" onError={() => setBad(true)} />
}
