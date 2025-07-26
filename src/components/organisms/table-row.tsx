import React from "react"

// Type for sparkline data
interface SparklineProps {
  data: number[]
  color?: string
  bg?: string
}

// Simple SVG sparkline component
function Sparkline({ data, color = "#4ade80", bg = "#1a1a1a" }: SparklineProps) {
  const width = 60
  const height = 32
  const min = Math.min(...data)
  const max = Math.max(...data)
  const points = data.map((d: number, i: number) => {
    const x = (i / (data.length - 1)) * (width - 4) + 2
    const y = height - 2 - ((d - min) / (max - min || 1)) * (height - 6)
    return `${x},${y}`
  })
  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <rect x="0" y="0" width={width} height={height} rx="6" fill={bg} />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points.join(" ")}
      />
    </svg>
  )
}

// Example token type (replace with your actual data model)
interface TokenRowData {
  logo: string
  symbol: string
  name: string
  marketCap: string
  spark?: number[]
  sparkColor?: string
}

export function TableRow({ token }: { token: TokenRowData }) {
  // Example sparkline data (replace with real token data)
  const sparkData = token.spark || [10, 15, 12, 18, 14, 17, 13]
  return (
    <tr className="border-b border-[#222] hover:bg-[#181818] transition-colors">
      {/* Pair Info */}
      <td className="py-3 pl-4 pr-2 min-w-[220px] max-w-[300px]">
        <div className="flex items-center gap-3">
          <img src={token.logo} alt={token.symbol} className="w-10 h-10 rounded" />
          <div>
            <div className="font-semibold text-white text-sm truncate">{token.name}</div>
            <div className="text-[#888] text-xs truncate">{token.symbol}</div>
          </div>
        </div>
      </td>
      {/* Sparkline visual */}
      <td className="px-2 w-[70px]">
        <Sparkline data={sparkData} color={token.sparkColor || "#4ade80"} />
      </td>
      {/* Market Cap */}
      <td className="px-2 text-right min-w-[100px]">
        <span className="font-mono text-white">{token.marketCap}</span>
      </td>
      {/* ...other columns... */}
    </tr>
  )
}
