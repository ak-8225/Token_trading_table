"use client";
import React from "react";
import { Search, Star, Bell, MessageSquare, User, ChevronDown, Volume2, VolumeX } from "lucide-react";

const NAV_ITEMS = [
  "Discover", "Pulse", "Trackers", "Perpetuals", "Yield", "Portfolio", "Rewards"
];

export default function Header() {
  const [showDisplayDropdown, setShowDisplayDropdown] = React.useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
        <div className="flex items-center justify-between py-2 pl-3 pr-2 sm:px-4 lg:px-6 min-h-[60px] max-h-[80px]">
          {/* ===== LEFT: LOGO + NAV ===== */}
          <div className="flex items-center min-w-0 flex-1">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 select-none">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-xs rotate-45"></div>
              <span className="font-bold text-base sm:text-lg lg:text-xl tracking-tight truncate">AXIOM</span>
              <span className="bg-gray-700 text-gray-300 rounded px-1 sm:px-2 py-0.5 text-[0.7em] font-medium ml-0.5">Pro</span>
            </div>

            {/* Navigation – scrollable if overflow */}
            <nav className="hidden md:flex items-center min-w-0 ml-6 space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm lg:text-base truncate whitespace-nowrap transition-colors
                    ${item === "Pulse" 
                      ? "text-blue-400 font-medium hover:text-blue-300" 
                      : "text-gray-300 hover:text-white"}
                  `}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* ===== RIGHT: SEARCH + CONTROLS ===== */}
          <div className="flex items-center flex-shrink-0 space-x-2 sm:space-x-3 lg:space-x-4 min-w-0">
            {/* Search Bar */}
            <div className="relative hidden sm:block w-[180px] md:w-[220px] lg:w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by token or CA..."
                className="bg-[#191919] border border-gray-700 rounded-lg pl-9 pr-6 py-[7.5px] text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-medium select-none">/</span>
            </div>

            {/* Deposit Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-2.5 py-2 font-medium text-sm min-w-[42px] h-9 flex items-center justify-center transition-colors">
              <span className="hidden sm:inline">Deposit</span>
              <span className="sm:hidden text-lg leading-none">+</span>
            </button>

            {/* Icon Cluster */}
            <div className="flex items-center space-x-2 sm:space-x-2.5 lg:space-x-3 flex-shrink-0">
              {/* Star */}
              <button className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <Star className="w-5 h-5" />
              </button>
              {/* Bell */}
              <button className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <Bell className="w-5 h-5" />
              </button>
              {/* Message (with badge) */}
              <button className="relative p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-gray-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold leading-none">0</span>
              </button>
              {/* Portfolio (gray circle with 0) */}
              <button className="relative p-0.5 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-[10px] leading-none font-semibold text-white">0</span>
                </div>
              </button>
              {/* User */}
              <button className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Control Buttons - Top Right Below Header */}
      <div className="w-full flex justify-end px-8 py-2 bg-[#0A0A0A]">
        <div className="flex items-center space-x-3 relative">
          {/* Display Dropdown */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
           <button
                      className="bg-[#232323] text-[#cdcdcd] text-[18px] font-medium px-6 py-2 rounded-xl border border-[#292929] shadow flex items-center gap-2 min-w-[120px] justify-between"
                      style={{ letterSpacing: "1px" }}
                      onClick={() => setShowDisplayDropdown((v) => !v)}
                    >
                      Display <ChevronDown className="w-4 h-4 text-[#888] ml-2" />
                    </button>
                    {showDisplayDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-[340px] bg-[#18181b] border border-[#232323] rounded-2xl shadow-2xl z-50 flex flex-col py-6 px-6" style={{maxHeight:'600px',overflowY:'auto'}}>
                        <div className="mb-6">
                          <div className="text-[#cdcdcd] text-lg font-semibold mb-2">Metrics</div>
                          <div className="flex gap-4 mb-4">
                            <button className="bg-[#23253a] text-[#cdcdcd] px-4 py-3 rounded-lg w-1/2 font-semibold border border-[#23253a]">MC 77K<br/><span className='text-xs'>Small</span></button>
                            <button className="bg-transparent text-[#cdcdcd] px-4 py-3 rounded-lg w-1/2 border border-[#23253a] font-semibold">MC <span className='font-bold'>77K</span><br/><span className='text-xs'>Large</span></button>
                          </div>
                          <div className="text-[#cdcdcd] text-lg font-semibold mb-2">Quick Buy</div>
                          <div className="flex gap-2 mb-4">
                            <button className="bg-[#23253a] text-[#cdcdcd] px-4 py-2 rounded-lg border border-[#23253a] flex items-center gap-1 font-semibold"><span className='text-[#6C8CFF]'>⚡7</span> Small</button>
                            <button className="bg-[#23253a] text-[#cdcdcd] px-4 py-2 rounded-lg border border-[#23253a] flex items-center gap-1 font-semibold"><span className='text-[#6C8CFF]'>⚡7</span> Large</button>
                            <button className="bg-[#23253a] text-[#cdcdcd] px-4 py-2 rounded-lg border border-[#23253a] flex items-center gap-1 font-semibold"><span className='text-[#6C8CFF]'>⚡7</span> Mega</button>
                            <button className="bg-[#23253a] text-[#888] px-4 py-2 rounded-lg border border-[#23253a] flex items-center gap-1 font-semibold"><span className='text-[#6C8CFF]'>⚡7</span> Ultra</button>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#cdcdcd] flex items-center gap-2"><span className="text-xl">☀️</span> Grey</span>
                          </div>
                        </div>
                        <hr className="border-[#23253a] mb-6" />
                        <div className="mb-6">
                          <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3 text-[#cdcdcd] text-base"><span className="text-lg">🔍</span> Show Search Bar</div>
                            <div className="flex items-center gap-3 text-[#cdcdcd] text-base"><span className="text-lg">👁️</span> Show Hidden Tokens</div>
                            <div className="flex items-center gap-3 text-[#cdcdcd] text-base"><span className="text-lg">🖼️</span> Circle Images</div>
                            <div className="flex items-center gap-3 text-[#cdcdcd] text-base"><span className="text-lg">⏳</span> Progress Bar</div>
                            <div className="flex items-center gap-3 text-[#cdcdcd] text-base"><span className="text-lg">🗃️</span> Spaced Tables</div>
                          </div>
                        </div>
                        <hr className="border-[#23253a] mb-6" />
                        <div>
                          <div className="text-[#cdcdcd] text-lg font-semibold mb-2">Customize rows</div>
                          <div className="flex flex-wrap gap-2">
                            {['Market Cap','Volume','Fees','TX','Socials','Holders','Pro Traders','KOLs','Dev Migrations','Top 10 Holders','Dev Holding','Funding Time','Snipers','Insiders','Bundlers','Dex Paid'].map(row => (
                              <span key={row} className="bg-[#23253a] text-[#cdcdcd] px-3 py-2 rounded-lg text-sm font-semibold">{row}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
          </div>
          
          {/* Volume Controls */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <Volume2 className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </div>
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <VolumeX className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </div>
          
          {/* Numerical Display */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <span className="text-sm text-[#9CA3AF]">1</span>
            <span className="text-sm text-[#9CA3AF]">=</span>
            <span className="text-sm text-[#9CA3AF]">0</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </div>
      </div>
    </>
  );
}
