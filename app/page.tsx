import { Navbar } from '@/components/navbar'
import { HeroCenter } from '@/components/hero-center'
import { SidebarLeft } from '@/components/sidebar-left'
import { SidebarRight } from '@/components/sidebar-right'

export default function Page() {
  return (
    <main
      className="h-screen overflow-hidden flex flex-col relative"
      style={{
        background:
          'linear-gradient(180deg, #b8dce8 0%, #cce8ee 18%, #ddeef2 38%, #e8f3f0 58%, #d4e8e0 80%, #c2ddd5 100%)',
      }}
    >
      {/* Atmospheric cloud layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 10%, rgba(255,255,255,0.55) 0%, transparent 70%), radial-gradient(ellipse 50% 30% at 20% 30%, rgba(255,255,255,0.30) 0%, transparent 60%), radial-gradient(ellipse 60% 25% at 80% 20%, rgba(255,255,255,0.25) 0%, transparent 60%)',
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/*
        Hero section:
        - Mobile  (<768px):  stack vertically, center content
        - Tablet  (≥768px):  show sidebars at reduced width
        - Desktop (≥1280px): full three-column layout
      */}
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
    </main>
  )
}
