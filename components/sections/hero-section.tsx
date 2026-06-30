import { SidebarLeft } from '@/components/sidebar-left'
import { HeroCenter } from '@/components/hero-center'
import { SidebarRight } from '@/components/sidebar-right'

export function HeroSection() {
  return (
    <section 
      id="hero"
      aria-label="Hero Section"
      className="relative w-full h-screen flex flex-col pt-24 pb-8" // Added pt-24 to account for fixed navbar if any, or just spacing
    >
      <div className="relative flex-1 min-h-0 flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-6 md:gap-0 px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Left sidebar — hidden below md */}
        <div className="hidden md:flex md:w-40 lg:w-48 xl:w-52 shrink-0 h-full">
          <SidebarLeft />
        </div>

        {/* Center — always visible, grows to fill remaining space */}
        <div className="flex-1 min-w-0 min-h-0 flex items-start justify-center h-full">
          <HeroCenter />
        </div>

        {/* Right sidebar — hidden below md */}
        <div className="hidden md:flex md:w-40 lg:w-48 xl:w-52 shrink-0 justify-end h-full">
          <SidebarRight />
        </div>
      </div>
    </section>
  )
}
