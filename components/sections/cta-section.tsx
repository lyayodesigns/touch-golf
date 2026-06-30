import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section 
      id="cta" 
      aria-label="The TouchGolf Promise"
      className="w-full py-32 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center text-center relative z-10 bg-gradient-to-b from-black/[0.02] to-black/[0.06]"
    >
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-10 md:p-16 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 drop-shadow-sm mb-6">
          The TouchGolf Promise
        </h2>
        
        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl font-semibold text-gray-900/90">
            Premium hardware. Bespoke software. Flawless service.
          </p>
          <p className="text-lg md:text-xl text-gray-900/80 leading-relaxed max-w-3xl mx-auto">
            We don’t sell screens. We deliver a new dimension of guest experience that honors the game, uplifts the community, and reflects the prestige of your club.
          </p>
          <p className="text-xl font-bold text-gray-900 pt-4">
            Ready to make your course the one they can’t stop talking about?
          </p>
        </div>

        <button
          className="group inline-flex items-center gap-3 bg-gray-900 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
          style={{
            padding: '16px 40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}
        >
          Request a Private Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}
