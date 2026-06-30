export function IntroSection() {
  return (
    <section 
      id="intro"
      aria-label="The TouchGolf Difference"
      className="w-full py-24 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center text-center relative z-10 bg-gradient-to-b from-black/[0.02] to-black/[0.06]"
    >
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm mb-6">
          The TouchGolf Difference
        </h2>
        <p className="text-lg md:text-xl text-gray-900/80 leading-relaxed text-left md:text-center">
          A great golf club is more than manicured fairways—it’s a living community of champions, milestones, and unforgettable rounds. TouchGolf crafts bespoke interactive displays that don’t just show information; they invite guests to explore, celebrate, and connect. From luminous leaderboards in the clubhouse to elegant, all-weather kiosks at the first tee, every screen becomes a seamless extension of your club’s prestige.
        </p>
      </div>
    </section>
  )
}
