'use client'

import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "TouchGolf transformed our member lounge into the most talked-about room in the club. The achievement wall has sparked pride, conversations, and even a friendly rivalry to get on the board.",
      author: "General Manager",
      club: "Prestwick National Golf Club"
    },
    {
      quote: "Our outdoor tee-time kiosk is an absolute game-changer. Guests love the freedom of checking in with a touch, and the screen looks spectacular even under the midday sun.",
      author: "Director of Golf",
      club: "Pacific Dunes Resort"
    },
    {
      quote: "We wanted our centennial history to be felt, not just framed on a wall. TouchGolf built a digital heritage experience that brings tears to our oldest members and wonder to our youngest guests.",
      author: "Club President",
      club: "Oakmont Hollow"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section 
      id="testimonials" 
      aria-label="What Clubs Are Saying"
      className="w-full py-32 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center text-center relative z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm mb-16">
          What Clubs Are Saying
        </h2>
        
        <div className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-16 shadow-2xl min-h-[400px] md:min-h-[300px] flex items-center justify-center">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-white/20 rotate-180" />
          
          <div className="relative z-10 space-y-8 animate-fade-in-up" key={activeIndex}>
            <p className="text-xl md:text-3xl font-medium text-gray-900 leading-relaxed italic">
              "{testimonials[activeIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].author}</span>
              <span className="text-gray-900/70 font-medium">{testimonials[activeIndex].club}</span>
            </div>
          </div>
          
          <Quote className="absolute bottom-8 right-8 w-16 h-16 text-white/20" />
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-gray-900 w-8' : 'bg-gray-900/30 hover:bg-gray-900/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
