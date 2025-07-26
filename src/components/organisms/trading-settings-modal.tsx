"use client"

import { memo } from "react"

interface TradingSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TradingSettingsModal = memo(function TradingSettingsModal({ isOpen, onClose }: TradingSettingsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-white text-lg font-semibold mb-4">Trading Settings</h3>
        <p className="text-[#888888] mb-4">Trading settings will be implemented here.</p>
        <button
          onClick={onClose}
          className="bg-[#6366f1] hover:bg-[#5855eb] text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
})
