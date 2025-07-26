"use client"

import { TableCell, TableRow } from "@/components/ui/table"
import { TokenInfo } from "@/components/molecules/token-info"
import { MarketCapCell } from "@/components/molecules/market-cap-cell"
import { VolumeCell } from "@/components/molecules/volume-cell"
import { ActionButton } from "@/components/molecules/action-button"
import { AuditCell } from "@/components/molecules/audit-cell"
import { TransactionCell } from "@/components/molecules/transaction-cell"
import type { Token } from "@/types/token"
import { memo } from "react"
import { formatNumber } from "@/lib/utils"

// Sparkline SVG component
function Sparkline({ data, color = "#4ade80", bg = "#18181b" }: { data: number[]; color?: string; bg?: string }) {
  const width = 60
  const height = 32
  const min = Math.min(...data)
  const max = Math.max(...data)
  const points = data.map((d, i) => {
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

interface TableRowComponentProps {
  token: Token
}

export const TableRowComponent = memo(function TableRowComponent({ token }: TableRowComponentProps) {
  // Use token.sparkline or fallback to dummy data
  const sparkData = Array.isArray((token as any).sparkline) ? (token as any).sparkline : [10, 15, 12, 18, 14, 17, 13]
  const sparkColor = (token as any).sparkColor || "#4ade80"
  return (
    <TableRow className="border-b border-[#2a2a2a] hover:bg-[#0f0f0f] transition-colors h-[88px]">
      {/* Column 1: Pair Info - 300px */}
      <TableCell className="py-2 pl-4" style={{ width: "300px", minWidth: "300px", maxWidth: "300px" }}>
        <TokenInfo token={token} />
      </TableCell>

      {/* Sparkline Visual - 70px */}
      <TableCell className="py-2 pr-2 text-center" style={{ width: "70px", minWidth: "70px", maxWidth: "70px" }}>
        <Sparkline data={sparkData} color={sparkColor} />
      </TableCell>

      {/* Column 2: Market Cap - 140px */}
      <TableCell className="py-2 pr-4 text-right" style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}>
        <MarketCapCell marketCap={token.marketCap} change={token.priceChange24h} />
      </TableCell>

      {/* Column 3: Liquidity - 140px - Hidden on mobile */}
      <TableCell
        className="py-2 pr-4 text-right hidden sm:table-cell"
        style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
      >
        <div className="font-mono text-sm text-white">${formatNumber(token.liquidity)}</div>
      </TableCell>

      {/* Column 4: Volume - 140px */}
      <TableCell className="py-2 pr-4 text-right" style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}>
        <VolumeCell volume={token.volume24h} />
      </TableCell>

      {/* Column 5: TXNS - 140px - Hidden on mobile and tablet */}
      <TableCell
        className="py-2 pr-4 text-right hidden lg:table-cell"
        style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
      >
        <TransactionCell
          transactions={token.transactions24h}
          buyTransactions={token.buyTransactions}
          sellTransactions={token.sellTransactions}
        />
      </TableCell>

      {/* Column 6: Audit Log - 140px - Hidden on mobile and tablet */}
      <TableCell
        className="py-2 text-center hidden lg:table-cell"
        style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
      >
        <AuditCell score={token.auditScore} percentage={token.auditPercentage} paid={token.auditPaid} />
      </TableCell>

      {/* Column 7: Action - 120px */}
      <TableCell className="py-2 px-4 text-center" style={{ width: "120px", minWidth: "120px", maxWidth: "120px" }}>
        <ActionButton />
      </TableCell>
    </TableRow>
  )
})
