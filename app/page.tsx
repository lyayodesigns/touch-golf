import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { IntroSection } from '@/components/sections/intro-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { ValuePropsSection } from '@/components/sections/value-props-section'
import { UseCasesSection } from '@/components/sections/use-cases-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/sections/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          'linear-gradient(180deg, #b8dce8 0%, #cce8ee 18%, #ddeef2 38%, #e8f3f0 58%, #d4e8e0 80%, #c2ddd5 100%)',
      }}
    >
      {/* Atmospheric cloud layers - Keep fixed so they cover the whole background even when scrolling */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 10%, rgba(255,255,255,0.55) 0%, transparent 70%), radial-gradient(ellipse 50% 30% at 20% 30%, rgba(255,255,255,0.30) 0%, transparent 60%), radial-gradient(ellipse 60% 25% at 80% 20%, rgba(255,255,255,0.25) 0%, transparent 60%)',
        }}
      />

      {/* Navigation - Make it fixed or absolute depending on design, here it is likely fixed in the Navbar component or we just let it sit at the top */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* Sections */}
        <HeroSection />
        
        {/* We wrap some sections in additional wrappers if we want to force full width alternating backgrounds beyond what is in the components, 
            but the components themselves have been given alternate glassmorphic styles. */}
        <IntroSection />
        <FeaturesSection />
        <ValuePropsSection />
        <UseCasesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </div>

      <Footer />
    </main>
  )
}
