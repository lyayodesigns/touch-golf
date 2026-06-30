export function FeaturesSection() {
  const features = [
    {
      title: 'Achievement Galleries That Inspire',
      desc: 'Turn member accomplishments into a captivating digital showcase. Hole-in-one celebrations, tournament victories, club championship records—all displayed on stunning 4K touchscreens that members and visitors can browse with pride. Filters, stories, and photo integrations make every achievement a shared moment.'
    },
    {
      title: 'Live Leaderboards with Touch Interactivity',
      desc: 'Real-time scoring for tournaments and casual play, transformed into an engaging digital centerpiece. Players can tap to see full scorecards, compare stats, or relive highlight shots. It’s the thrill of competition, amplified.'
    },
    {
      title: 'Intelligent Course & Event Navigation',
      desc: 'Help golfers move effortlessly from the locker room to the first tee. Interactive wayfinding, tee-time calendars, weather overlays, and upcoming event schedules presented with the fluid elegance your venue deserves. Never again will a guest wonder where to go next.'
    },
    {
      title: 'Pro Shop & Dining Discovery',
      desc: 'Showcase the latest arrivals in the pro shop, premium club fittings, or the chef’s seasonal tasting menu. Guests can browse, reserve, or order straight from the screen—turning curiosity into revenue without a single hard sell.'
    },
    {
      title: 'Heritage Walls That Tell Your Story',
      desc: 'For clubs with a storied past, TouchGolf creates digital heritage experiences. Interactive timelines, legendary member profiles, and course evolution stories that immerse visitors in your unique legacy before they even set foot on the grass.'
    },
    {
      title: 'Crafted for the Outdoors & Built to Last',
      desc: 'Premium IP65-rated enclosures, sunlight-readable displays, and anti-glare glass ensure flawless performance on the patio, by the practice green, or at the halfway house. Elegant finishes that complement your architecture—never detract from it.'
    }
  ]

  return (
    <section 
      id="features" 
      aria-label="Features Section"
      className="w-full py-24 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center text-center relative z-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm">
          Elevate Every Touchpoint
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {features.map((feature, i) => (
            <article 
              key={i} 
              className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">{feature.title}</h3>
              <p className="text-gray-900/80 text-sm md:text-base leading-relaxed">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
