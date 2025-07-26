"use client"

import { Header } from "@/components/organisms/header"
import { SubNavigation } from "@/components/organisms/sub-navigation"
import { useState } from "react"
import { Footer } from "@/components/organisms/footer"
import { MessageCircle, Zap, Link, Globe, User, ShoppingCart, TrendingUp, Filter, Settings, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PulsePageProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

interface PulseToken {
  id: string
  name: string
  symbol: string
  contractAddress: string
  image: string
  timeAgo: string
  marketCap: string
  volume: string
  fValue: string
  txValue: string
  percentages: {
    value1: number
    value2: number
    value3: number
    value4: number
    value5: number
  }
  hasImage: boolean
  badgeText?: string
  badgeColor?: string
  socialMetrics?: {
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
  }
}

const mockNewPairs: PulseToken[] = [
  {
    id: "1",
    name: "KPOP Kitty & Puppy On Profit",
    symbol: "KPOP",
    contractAddress: "4dXB...bonk",
    image: "/placeholder.svg?height=40&width=40&text=🐱",
    timeAgo: "4s",
    marketCap: "$5K",
    volume: "$170",
    fValue: "0.034",
    txValue: "6",
    percentages: { value1: 0, value2: 0, value3: 13, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "🐱",
    badgeColor: "bg-orange-500",
    socialMetrics: { q1: "1", q2: "343", q3: "5", q4: "12", q5: "8" }
  },
  {
    id: "2",
    name: "JASPER Jasper",
    symbol: "JASPER",
    contractAddress: "7fY2...jasper",
    image: "/placeholder.svg?height=40&width=40&text=🐱",
    timeAgo: "8s",
    marketCap: "$12K",
    volume: "$890",
    fValue: "0.156",
    txValue: "23",
    percentages: { value1: 5, value2: 0, value3: 8, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "🐱",
    badgeColor: "bg-blue-500",
    socialMetrics: { q1: "3", q2: "156", q3: "2", q4: "8", q5: "4" }
  },
  {
    id: "3",
    name: "PET cutie pussy cat",
    symbol: "PET",
    contractAddress: "9aK4...pet",
    image: "/placeholder.svg?height=40&width=40&text=🐱",
    timeAgo: "12s",
    marketCap: "$8K",
    volume: "$420",
    fValue: "0.089",
    txValue: "15",
    percentages: { value1: 0, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "🐱",
    badgeColor: "bg-pink-500",
    socialMetrics: { q1: "2", q2: "89", q3: "1", q4: "5", q5: "3" }
  },
  {
    id: "4",
    name: "BNB breadnbutter",
    symbol: "BNB",
    contractAddress: "2cM6...bnb",
    image: "/placeholder.svg?height=40&width=40&text=✌️",
    timeAgo: "16s",
    marketCap: "$15K",
    volume: "$1.2K",
    fValue: "0.234",
    txValue: "34",
    percentages: { value1: 12, value2: 0, value3: 7, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "✌️",
    badgeColor: "bg-yellow-500",
    socialMetrics: { q1: "4", q2: "234", q3: "3", q4: "15", q5: "7" }
  },
]

const mockFinalStretch: PulseToken[] = [
  {
    id: "5",
    name: "MIM Magic Internet Money",
    symbol: "MIM",
    contractAddress: "5eN8...mim",
    image: "/placeholder.svg?height=40&width=40&text=M",
    timeAgo: "16m",
    marketCap: "$65K",
    volume: "$111K",
    fValue: "6.807",
    txValue: "1492",
    percentages: { value1: 25, value2: 19, value3: 0, value4: 0, value5: 15 },
    hasImage: true,
    badgeText: "M",
    badgeColor: "bg-purple-500",
    socialMetrics: { q1: "8", q2: "892", q3: "12", q4: "45", q5: "23" }
  },
  {
    id: "6",
    name: "GOBLINCOIN Goblincoin.mp4",
    symbol: "GOBLIN",
    contractAddress: "1bP3...goblin",
    image: "/placeholder.svg?height=40&width=40&text=👹",
    timeAgo: "23m",
    marketCap: "$42K",
    volume: "$78K",
    fValue: "3.456",
    txValue: "892",
    percentages: { value1: 18, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "👹",
    badgeColor: "bg-green-500",
    socialMetrics: { q1: "6", q2: "567", q3: "8", q4: "28", q5: "15" }
  },
  {
    id: "7",
    name: "MSK God Elon",
    symbol: "MSK",
    contractAddress: "8dQ9...msk",
    image: "/placeholder.svg?height=40&width=40&text=🚀",
    timeAgo: "31m",
    marketCap: "$89K",
    volume: "$156K",
    fValue: "8.234",
    txValue: "2341",
    percentages: { value1: 32, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "🚀",
    badgeColor: "bg-red-500",
    socialMetrics: { q1: "12", q2: "1234", q3: "18", q4: "67", q5: "34" }
  },
  {
    id: "8",
    name: "Dentauros デンタウロス",
    symbol: "DENT",
    contractAddress: "3fR7...dent",
    image: "/placeholder.svg?height=40&width=40&text=🦷",
    timeAgo: "45m",
    marketCap: "$28K",
    volume: "$52K",
    fValue: "2.123",
    txValue: "678",
    percentages: { value1: 15, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "🦷",
    badgeColor: "bg-blue-500",
    socialMetrics: { q1: "5", q2: "456", q3: "7", q4: "23", q5: "12" }
  },
]

const mockMigrated: PulseToken[] = [
  {
    id: "9",
    name: "Poopiter Jup Studio's First Meme",
    symbol: "POOP",
    contractAddress: "6gT1...poop",
    image: "/placeholder.svg?height=40&width=40&text=💩",
    timeAgo: "29s",
    marketCap: "$242",
    volume: "$407",
    fValue: "0.099",
    txValue: "14",
    percentages: { value1: 4, value2: 0, value3: 1, value4: 2, value5: 4 },
    hasImage: true,
    badgeText: "💩",
    badgeColor: "bg-brown-500",
    socialMetrics: { q1: "1", q2: "45", q3: "1", q4: "3", q5: "2" }
  },
  {
    id: "10",
    name: "crashy Crashy the almost gone",
    symbol: "CRASHY",
    contractAddress: "4hU5...crashy",
    image: "/placeholder.svg?height=40&width=40&text=💥",
    timeAgo: "1m",
    marketCap: "$156",
    volume: "$234",
    fValue: "0.067",
    txValue: "8",
    percentages: { value1: 2, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "💥",
    badgeColor: "bg-orange-500",
    socialMetrics: { q1: "1", q2: "23", q3: "1", q4: "2", q5: "1" }
  },
  {
    id: "11",
    name: "WCC Warriors Culture",
    symbol: "WCC",
    contractAddress: "7iV2...wcc",
    image: "/placeholder.svg?height=40&width=40&text=⚔️",
    timeAgo: "2m",
    marketCap: "$89",
    volume: "$123",
    fValue: "0.045",
    txValue: "5",
    percentages: { value1: 1, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "⚔️",
    badgeColor: "bg-gray-500",
    socialMetrics: { q1: "1", q2: "12", q3: "1", q4: "1", q5: "1" }
  },
  {
    id: "12",
    name: "MARS MARS",
    symbol: "MARS",
    contractAddress: "9jW8...mars",
    image: "/placeholder.svg?height=40&width=40&text=M",
    timeAgo: "3m",
    marketCap: "$67",
    volume: "$98",
    fValue: "0.034",
    txValue: "4",
    percentages: { value1: 0, value2: 0, value3: 0, value4: 0, value5: 0 },
    hasImage: true,
    badgeText: "M",
    badgeColor: "bg-red-500",
    socialMetrics: { q1: "1", q2: "8", q3: "1", q4: "1", q5: "1" }
  },
]

export function PulsePage({ activeTab, onTabChange }: PulsePageProps) {
  const [timeFilter, setTimeFilter] = useState("1h")
  const [searchQuery, setSearchQuery] = useState("")

  const PulseTokenCard = ({ token }: { token: PulseToken }) => (
    <div className="bg-[#1a1a1a] rounded-lg p-3 mb-3 border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-200">
      <div className="flex items-start gap-3">
        {/* Left Side - Token Image & Contract */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            {token.hasImage ? (
              <div className={`w-8 h-8 ${token.badgeColor || "bg-green-500"} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                {token.badgeText || "T"}
              </div>
            ) : (
              <div className="w-8 h-8 bg-[#3a3a3a] rounded-full flex items-center justify-center">
                <span className="text-[#888888] text-xs">?</span>
              </div>
            )}
          </div>
          <div className="text-[#888888] text-xs font-mono text-center max-w-[60px] truncate">
            {token.contractAddress}
          </div>
        </div>

        {/* Middle Section - Token Details */}
        <div className="flex-1 min-w-0">
          {/* Token Name */}
          <div className="text-white text-sm font-medium truncate mb-1">{token.name}</div>
          
          {/* Time */}
          <div className="text-[#6366f1] text-xs font-mono mb-2">{token.timeAgo}</div>
          
          {/* Social Metrics */}
          <div className="flex gap-1 mb-2">
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#888888]">📤</span>
              <span className="text-white">Q {token.socialMetrics?.q1 || "0"}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#888888]">🔍</span>
              <span className="text-white">Q {token.socialMetrics?.q2 || "0"}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#888888]">👤</span>
              <span className="text-white">Q {token.socialMetrics?.q3 || "0"}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#888888]">🛒</span>
              <span className="text-white">Q {token.socialMetrics?.q4 || "0"}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#888888]">🏆</span>
              <span className="text-white">Q {token.socialMetrics?.q5 || "0"}</span>
            </div>
          </div>
          
          {/* Market Data */}
          <div className="flex gap-4 text-xs">
            <div>
              <span className="text-[#888888]">MC </span>
              <span className="text-white font-mono">{token.marketCap}</span>
            </div>
            <div>
              <span className="text-[#888888]">V </span>
              <span className="text-white font-mono">{token.volume}</span>
            </div>
            <div>
              <span className="text-[#888888]">F </span>
              <span className="text-white font-mono">{token.fValue}</span>
            </div>
            <div>
              <span className="text-[#888888]">TX </span>
              <span className="text-white font-mono">{token.txValue}</span>
            </div>
          </div>
          
          {/* Percentage Indicators */}
          <div className="flex gap-1 mt-2">
            {Object.values(token.percentages).map((value, index) => (
              <div
                key={index}
                className={`px-2 py-1 rounded text-xs font-mono flex items-center justify-center min-w-[30px] ${
                  value > 0 
                    ? (value > 10 ? "bg-green-500 text-black" : "bg-red-500 text-white") 
                    : "bg-[#2a2a2a] text-[#888888]"
                }`}
              >
                {value > 0 ? `${value}%` : "0%"}
              </div>
            ))}
            {/* Additional badges */}
            <div className="px-2 py-1 bg-[#2a2a2a] rounded text-xs text-[#888888]">DS</div>
            <div className="px-2 py-1 bg-[#2a2a2a] rounded text-xs text-[#888888]">Paid</div>
          </div>
        </div>
      </div>
    </div>
  )

  const PulseColumn = ({ title, tokens }: { title: string; tokens: PulseToken[] }) => (
    <div className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden">
      {/* Column Header */}
      <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">{title}</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-[#888888] hover:text-white p-1 w-6 h-6">
              <Filter className="w-3 h-3" />
            </Button>
            <div className="text-[#888888] text-xs">P1 P2 P3</div>
            <div className="text-[#888888] text-xs">4 0</div>
          </div>
        </div>
      </div>
      
      {/* Token Cards */}
      <div className="p-3 max-h-[600px] overflow-y-auto">
        {tokens.map((token) => (
          <PulseTokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex flex-col overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Sub Navigation */}
      <SubNavigation
        timeFilter={timeFilter}
        onTimeFilterChange={setTimeFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex justify-center px-6 py-4 pb-12 overflow-hidden" style={{ marginTop: "140px" }}>
        <div className="w-full max-w-[1400px] flex gap-4 h-full">
          <PulseColumn title="New Pairs" tokens={mockNewPairs} />
          <PulseColumn title="Final Stretch" tokens={mockFinalStretch} />
          <PulseColumn title="Migrated" tokens={mockMigrated} />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
} 