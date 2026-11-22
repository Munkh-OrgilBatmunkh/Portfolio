const COL = { ism: '#c9a227', pg: '#e11d48', st: '#10b981', udp: '#f59e0b' }
export default function Mock({ k, i }) {
  const c = COL[k],
    ln = (x, y, w, o = 1) => (
      <rect x={x} y={y} width={w} height="3" fill="#8a8378" opacity={o} />
    )
  return (
    <svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet">
      <rect width="160" height="100" fill="#f6f2ea" />
      <rect x="0" y="0" width="160" height="9" fill="#fff" />
      <rect x="6" y="3" width="10" height="3" fill={c} />
      <rect x="100" y="3.5" width="12" height="2" fill="#8a8378" />
      <rect x="116" y="3.5" width="12" height="2" fill="#8a8378" />
      <rect x="134" y="2" width="20" height="5" fill="#1f2a44" />
      {i === 0 && (
        <>
          <rect x="10" y="22" width="60" height="8" fill="#1f2937" />
          <rect x="10" y="33" width="46" height="8" fill="#1f2937" />
          {ln(10, 46, 56)}
          {ln(10, 52, 50, 0.6)}
          <rect x="10" y="60" width="22" height="7" fill={c} />
          <rect x="84" y="16" width="68" height="50" fill="#b9a27a" />
          <rect x="84" y="16" width="68" height="50" fill={c} opacity=".25" />
          {[10, 62, 114].map((x) => (
            <g key={x}>
              {ln(x, 76, 30)}
              {ln(x, 82, 40, 0.5)}
              {ln(x, 87, 36, 0.5)}
            </g>
          ))}
        </>
      )}
      {i === 1 &&
        [0, 1, 2, 3, 4, 5].map((n) => (
          <g key={n}>
            <rect
              x={10 + (n % 3) * 49}
              y={16 + Math.floor(n / 3) * 42}
              width="44"
              height="28"
              fill={n % 2 ? c : '#d8cfbd'}
              opacity={n % 2 ? 0.8 : 1}
            />
            {ln(10 + (n % 3) * 49, 48 + Math.floor(n / 3) * 42, 30)}
          </g>
        ))}
      {i === 2 && (
        <>
          <rect x="40" y="14" width="1.5" height="80" fill="#8a8378" />
          {[0, 1, 2, 3].map((r) => (
            <g key={r}>
              <circle cx="40.7" cy={22 + r * 20} r="3" fill={c} />
              {r % 2 ? (
                <>{ln(10, 20 + r * 20, 24)}</>
              ) : (
                <>
                  {ln(48, 20 + r * 20, 60)}
                  {ln(48, 26 + r * 20, 44, 0.5)}
                </>
              )}
            </g>
          ))}
        </>
      )}
      {i === 3 && (
        <>
          <rect x="0" y="9" width="30" height="91" fill="#1f2a44" />
          {[0, 1, 2, 3].map((r) => (
            <rect
              key={r}
              x="6"
              y={18 + r * 10}
              width="18"
              height="3"
              fill="#fff"
              opacity=".6"
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <rect
              key={n}
              x={42 + n * 18}
              y={88 - (14 + n * 9)}
              width="12"
              height={14 + n * 9}
              fill={c}
            />
          ))}
          <rect x="42" y="16" width="30" height="12" fill="#fff" />
          <rect x="78" y="16" width="30" height="12" fill="#fff" />
        </>
      )}
    </svg>
  )
}
