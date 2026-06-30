'use client'

import { Play } from 'lucide-react'

export function SidebarRight() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-14 w-full items-end animate-fade-in-right">

      {/* Swing Length Metric */}
      <div className="flex flex-col items-end gap-2 group">
        {/* Golf ball + arc */}
        <div className="relative mb-1">
          <svg
            width="72"
            height="40"
            viewBox="0 0 80 44"
            fill="none"
            className="absolute"
            style={{ top: '-6px', right: '0px' }}
          >
            <path
              d="M72 40 Q48 4 12 16"
              stroke="#9ca3af"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)', border: '1.5px dashed #d1d5db' }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
              <circle cx="7"  cy="8"  r="1.2" fill="#d1d5db"/>
              <circle cx="13" cy="8"  r="1.2" fill="#d1d5db"/>
              <circle cx="10" cy="12" r="1.2" fill="#d1d5db"/>
              <circle cx="7"  cy="13" r="1"   fill="#e5e7eb"/>
              <circle cx="13" cy="13" r="1"   fill="#e5e7eb"/>
            </svg>
          </div>
        </div>
        <p className="text-[10px] lg:text-xs text-gray-600 tracking-wide">Swing length</p>
        <p
          className="font-bold text-gray-900 leading-none"
          style={{ fontSize: 'clamp(20px, 2.2vw, 30px)', letterSpacing: '-0.03em' }}
        >
          1,543m
        </p>
      </div>

      {/* Expert Video Analysis */}
      <div className="flex flex-col items-end gap-3 group">
        <div className="flex items-center gap-2">
          <button
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
            style={{ boxShadow: '0 6px 20px rgba(249,115,22,0.40)' }}
          >
            <Play className="w-4 h-4 lg:w-5 lg:h-5 text-white fill-white ml-0.5" />
          </button>
          <img
            src="/usergolf.png"
            alt="PGA Coach"
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover border-2 border-white shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-[10px] lg:text-xs text-gray-700 text-right leading-relaxed max-w-[140px] lg:max-w-[160px]">
          Fix swing flaws faster with expert video analysis by PGA-level coaches.
        </p>
        <a
          href="#demo"
          className="text-[10px] lg:text-xs font-bold text-gray-900 underline underline-offset-2 hover:text-orange-600 transition-colors duration-200 tracking-wide"
        >
          VIEW DEMO
        </a>
      </div>

    </div>
  )
}
