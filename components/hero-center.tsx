'use client'

import { ArrowRight } from 'lucide-react'
import { InteractiveBadge } from './interactive-badge'

export function HeroCenter() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">

      {/* ── Background Typography ── z-index 1, behind golfer */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden px-4"
        style={{ zIndex: 1 }}
      >
        <div className="text-center leading-none select-none max-w-7xl mx-auto flex flex-col gap-4" style={{ marginTop: '-30%' }}>
          <div className="space-y-2">
            <h1
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(32px, 6vw, 96px)',
                color: 'rgba(50, 60, 58, 0.85)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Where Legacy Meets Innovation.
            </h1>
            <h2
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(24px, 5vw, 72px)',
                color: 'rgba(50, 60, 58, 0.45)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Premium Touch Displays for the Modern Golf Course.
            </h2>
          </div>


        </div>
      </div>

      {/* ── Golfer Image + Badges ── z-index 2, fills remaining viewport height */}
      <div
        className="relative w-full h-full mx-auto"
        style={{
          zIndex: 2,
          maxWidth: 'min(1300px, 100vw)',
          // transform: 'scale(1.1)',
        }}
      >
        <img
          src="/golfwithland.png"
          alt="Golfer mid-swing on floating island"
          className="absolute inset-0 w-full h-full object-fill animate-float"
          style={{
            filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.20))',
          }}
        />

        {/* ── CTA Pill — anchored inside container near bottom of island ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: '6%', zIndex: 4 }}
        >
          <a
            href="#solutions"
            className="group flex items-center gap-2.5 bg-white text-gray-900 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base cursor-pointer"
            style={{
              padding: 'clamp(10px, 1.5vw, 16px) clamp(24px, 3vw, 40px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              letterSpacing: '-0.01em',
            }}
          >
            Discover the Experience
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

    </div>
  )
}
