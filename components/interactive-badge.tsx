'use client'

import { useState } from 'react'

interface InteractiveBadgeProps {
  number: string
  position: {
    top: string
    left: string
  }
}

export function InteractiveBadge({ number, position }: InteractiveBadgeProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ripple ring */}
      <div
        className="absolute rounded-full transition-all duration-500 ease-out"
        style={{
          inset: '-8px',
          background: 'rgba(255,255,255,0.35)',
          borderRadius: '50%',
          transform: hovered ? 'scale(1.6)' : 'scale(1)',
          opacity: hovered ? 1 : 0,
        }}
      />
      {/* Second ripple */}
      <div
        className="absolute rounded-full transition-all duration-700 ease-out"
        style={{
          inset: '-4px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          transform: hovered ? 'scale(2)' : 'scale(0.8)',
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Main badge */}
      <div
        className="relative rounded-full bg-white flex items-center justify-center transition-all duration-300"
        style={{
          width: '40px',
          height: '40px',
          boxShadow: hovered
            ? '0 8px 28px rgba(0,0,0,0.22)'
            : '0 4px 14px rgba(0,0,0,0.14)',
          transform: hovered ? 'scale(1.15)' : 'scale(1)',
        }}
      >
        <span
          className="font-bold text-gray-700"
          style={{ fontSize: '11px', letterSpacing: '0.02em' }}
        >
          {number}
        </span>
      </div>
    </div>
  )
}
