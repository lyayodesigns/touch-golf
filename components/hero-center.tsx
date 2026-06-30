'use client'

import { ArrowRight } from 'lucide-react'
import { InteractiveBadge } from './interactive-badge'

export function HeroCenter() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">

      {/* ── Background Typography ── z-index 1, behind golfer */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="text-center leading-none select-none" style={{ marginTop: '-5%' }}>
          <div
            className="font-black tracking-tight whitespace-nowrap"
            style={{
              fontSize: 'clamp(48px, 10vw, 152px)',
              color: 'rgba(50, 60, 58, 0.80)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
            }}
          >
            Play Better
          </div>
          <div
            className="font-black tracking-tight whitespace-nowrap"
            style={{
              fontSize: 'clamp(48px, 10vw, 152px)',
              color: 'rgba(50, 60, 58, 0.35)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
            }}
          >
            Play Faster
          </div>
        </div>
      </div>

      {/* ── Golfer Image + Badges ── z-index 2, fills remaining viewport height */}
      <div
        className="relative w-full h-full mx-auto"
        style={{
          zIndex: 2,
          maxWidth: 'min(820px, 92vw)',
        }}
      >
        <img
          src="/golfwithland.png"
          alt="Golfer mid-swing on floating island"
          className="absolute inset-0 w-full h-full object-contain animate-float"
          style={{
            filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.20))',
            objectPosition: 'top center',
          }}
        />

        {/* Badges — percentage positions stay anchored to image container */}
        <InteractiveBadge number="01" position={{ top: '5%',  left: '43%' }} />
        <InteractiveBadge number="02" position={{ top: '26%', left: '68%' }} />
        <InteractiveBadge number="03" position={{ top: '50%', left: '72%' }} />
        <InteractiveBadge number="04" position={{ top: '71%', left: '33%' }} />
        <InteractiveBadge number="05" position={{ top: '72%', left: '65%' }} />

        {/* ── CTA Pill — anchored inside container near bottom of island ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: '6%', zIndex: 4 }}
        >
          <button
            className="group flex items-center gap-2.5 bg-white text-gray-900 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{
              padding: 'clamp(10px, 1.5vw, 16px) clamp(24px, 3vw, 40px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              letterSpacing: '-0.01em',
            }}
          >
            Fix The Miss Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

    </div>
  )
}
