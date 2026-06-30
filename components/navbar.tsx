'use client'

export function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16 py-4 md:py-5">

      {/* Logo */}
      <div className="flex items-center gap-2.5 shrink-0">
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="23" x2="23" y2="5" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="5" y1="5" x2="23" y2="23" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="5" cy="23" r="3" fill="#1a1a1a"/>
          <circle cx="23" cy="23" r="3" fill="#1a1a1a"/>
        </svg>
        <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Golf Club</span>
      </div>

      {/* Nav links — hidden on mobile, visible from md */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {[
          { label: 'Club',          href: '#club' },
          { label: 'Testimonials',  href: '#testimonials' },
          { label: 'About us',      href: '#about' },
          { label: 'Experts',       href: '#experts' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Register Now + leaf decoration */}
      <div className="relative flex items-center shrink-0">
        {/* Green leaf cluster — only shown on lg+ so it doesn't crowd mobile */}
        <div
          className="absolute pointer-events-none hidden lg:block"
          style={{ top: '-28px', right: '-28px', zIndex: 10 }}
        >
          <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 8 Q48 20 36 36 Q28 46 20 58" stroke="#5a7a3a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <ellipse cx="58" cy="10" rx="10" ry="5" fill="#6daa44" transform="rotate(-30 58 10)" opacity="0.9"/>
            <ellipse cx="50" cy="6" rx="9" ry="4.5" fill="#82c455" transform="rotate(-55 50 6)" opacity="0.85"/>
            <ellipse cx="64" cy="18" rx="8" ry="4" fill="#4e9a30" transform="rotate(-10 64 18)" opacity="0.8"/>
            <ellipse cx="44" cy="12" rx="8" ry="3.8" fill="#78c048" transform="rotate(-70 44 12)" opacity="0.8"/>
            <ellipse cx="68" cy="8" rx="7" ry="3.5" fill="#5db840" transform="rotate(10 68 8)" opacity="0.75"/>
          </svg>
        </div>

        <button
          className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-gray-900 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap"
          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
        >
          Register Now
          <span className="text-gray-500">→</span>
        </button>
      </div>
    </nav>
  )
}
