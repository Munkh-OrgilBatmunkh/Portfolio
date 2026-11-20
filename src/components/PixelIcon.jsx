const PAL = { K: '#000', Y: '#ffd830', B: '#1a1aa6', W: '#fff', G: '#808080', R: '#e8000b', g: '#1a9c3a' }
// Pixel-art дүрсүүд: тэмдэгт бүр = нэг пиксел
const ART = {
  museum: ['.....YY.....', '....YYYY....', '...YYYYYY...', '..YYYYYYYY..', '.BBBBBBBBBB.', '..W.W..W.W..', '..W.W..W.W..', '..W.W..W.W..', '..W.W..W.W..', '.GGGGGGGGGG.', '.GGGGGGGGGG.'],
  pad: ['............', '..RRRRRRRR..', '.RRWRRRRYRR.', '.RWWWRRYRBR.', '.RRWRRRRBRR.', '.RRRRRRRRRR.', '..RR....RR..', '............'],
  chart: ['..........Y.', '..........Y.', '......g...Y.', '......g...Y.', '..B...g...Y.', '..B...g...Y.', '..B...g...Y.', 'KKKKKKKKKKKK'],
}
export default function PixelIcon({ k, s = 56 }) {
  const rows = ART[k]
  return (
    <svg className="pxi" width={s} height={(s * rows.length) / 12} viewBox={`0 0 12 ${rows.length}`} shapeRendering="crispEdges">
      {rows.flatMap((r, y) => [...r].map((c, x) => c !== '.' && <rect key={x + '-' + y} x={x} y={y} width="1" height="1" fill={PAL[c]} />))}
    </svg>
  )
}
