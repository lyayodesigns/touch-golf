import { Trophy, Flag, Wine, MapPin, Target, CalendarDays } from 'lucide-react'

export function UseCasesSection() {
  const cases = [
    {
      title: 'Member Milestones',
      desc: 'Celebrate hole-in-ones, course records, and anniversaries with dynamic recognition that spreads joy across the club.',
      icon: Trophy
    },
    {
      title: 'Tournament Weekends',
      desc: 'Keep energy high with live leaderboards, player profiles, and spectator commentary zones—all interactive.',
      icon: Flag
    },
    {
      title: 'The 19th Hole',
      desc: 'Post-round, let players explore food menus, book their next massage, or browse exclusive member perks on a sleek bar-top display.',
      icon: Wine
    },
    {
      title: 'First Tee Introduction',
      desc: 'Greet guests with a weather-aware welcome screen, today’s course conditions, and a tap-to-check-in flow.',
      icon: MapPin
    },
    {
      title: 'Driving Range Hub',
      desc: 'Show launch monitor data, coaching content, and gamified challenges that turn practice into play.',
      icon: Target
    },
    {
      title: 'Private Event Booking',
      desc: 'Enable members to book simulators, function rooms, and clinics directly from the screen—no forms, no wait.',
      icon: CalendarDays
    }
  ]

  return (
    <section 
      id="use-cases" 
      aria-label="Use Cases"
      className="w-full py-24 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center text-center relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm mb-12">
          Experience In Action
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 group flex flex-col items-start text-left shadow-lg"
            >
              <div className="p-3 bg-white/40 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-900/80 leading-relaxed text-sm md:text-base">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
