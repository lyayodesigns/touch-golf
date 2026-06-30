'use client'

export function SidebarLeft() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-14 w-full animate-fade-in-left">

      {/* Magic Move Card */}
      <div className="flex flex-col items-start gap-3 group">
        <div
          className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 shrink-0"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
        >
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <line x1="3" y1="19" x2="19" y2="3" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            <line x1="3" y1="3" x2="19" y2="19" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="3" cy="19" r="2.5" fill="#374151"/>
            <circle cx="19" cy="19" r="2.5" fill="#374151"/>
          </svg>
        </div>
        <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
          The Magic Move helps generate more{' '}
          <span className="font-semibold text-gray-900">clubhead speed</span>{' '}
          while automatically squaring the clubface—without extra{' '}
          <span className="font-semibold text-gray-900">effort.</span>
        </p>
        <p className="text-[10px] lg:text-xs font-bold text-gray-900 tracking-widest uppercase">
          David Leadbetter
        </p>
      </div>

      {/* Solid Contact Card */}
      <div className="flex flex-col items-start gap-3 group">
        <div
          className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 shrink-0"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
        >
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <path d="M8 3 L14 3 L16 8 L14 9 L14 19 L10 19 L10 9 L8 8 Z" fill="#374151"/>
            <rect x="8" y="3" width="6" height="2" rx="0.5" fill="#4B5563"/>
          </svg>
        </div>
        <p className="text-[10px] lg:text-xs font-bold text-gray-900 tracking-widest uppercase">
          Solid Contact
        </p>
        <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
          Locked-in accuracy after just a few swings.
        </p>
      </div>

    </div>
  )
}
