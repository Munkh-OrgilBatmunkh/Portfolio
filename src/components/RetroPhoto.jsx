import { useEffect, useRef, useState } from 'react'
import Img from './Img.jsx'
const STEPS = [6, 10, 16, 28, 48, 90]
export default function RetroPhoto({ src, fb }) {
  const ref = useRef(null)
  const [bad, setBad] = useState(false)
  const [run, setRun] = useState(0)
  useEffect(() => {
    const im = new Image(),
      timers = []
    im.onerror = () => setBad(true)
    im.onload = () => {
      const c = ref.current
      if (!c) return
      const x = c.getContext('2d'),
        ar = c.width / c.height,
        iar = im.width / im.height
      const sw = iar > ar ? im.height * ar : im.width,
        sh = iar > ar ? im.height : im.width / ar
      const sx = (im.width - sw) / 2,
        sy = iar > ar ? 0 : (im.height - sh) * 0.2
      const tmp = document.createElement('canvas')
      const draw = (n) => {
        if (!n) {
          x.imageSmoothingEnabled = true
          x.drawImage(im, sx, sy, sw, sh, 0, 0, c.width, c.height)
          return
        }
        tmp.width = n
        tmp.height = Math.max(1, Math.round(n / ar))
        tmp
          .getContext('2d')
          .drawImage(im, sx, sy, sw, sh, 0, 0, tmp.width, tmp.height)
        x.imageSmoothingEnabled = false
        x.drawImage(tmp, 0, 0, tmp.width, tmp.height, 0, 0, c.width, c.height)
      }
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return draw(0)
      ;[...STEPS, 0].forEach((n, i) =>
        timers.push(setTimeout(() => draw(n), i * 260)),
      )
    }
    im.src = src
    return () => timers.forEach(clearTimeout)
  }, [src, run])
  return (
    <figure
      className="rphoto"
      onClick={() => setRun((r) => r + 1)}
      title="Дарж дахин ачаална"
    >
      <div className="rp-frame">
        {bad ? (
          <Img src="" fb={fb} />
        ) : (
          <canvas ref={ref} width="360" height="450" />
        )}
      </div>
    </figure>
  )
}
