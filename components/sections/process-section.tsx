export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Storytelling',
      desc: 'We walk your course, learn your traditions, and identify where interactive moments will have the most impact—whether it’s the champions’ hallway or the cart barn.'
    },
    {
      num: '02',
      title: 'Bespoke Design',
      desc: 'Our design team crafts a user interface that mirrors your club’s branding, from typography to color palette. The result feels native, not bolted-on.'
    },
    {
      num: '03',
      title: 'Hardware Selection',
      desc: 'We hand-pick the perfect screens—freestanding kiosks, wall-mounted panels, or weatherproof outdoor totems—sourced from premium manufacturers, tuned for golf environments.'
    },
    {
      num: '04',
      title: 'Content & Integration',
      desc: 'Dynamic feeds for leaderboards, achievements, and events are connected. We can also produce cinematic content loops that showcase your course in its best light.'
    },
    {
      num: '05',
      title: 'Installation & White-Glove Training',
      desc: 'Our specialists handle installation with care for your property, then train your team in 30 minutes. Minimal disruption, maximum impact.'
    },
    {
      num: '06',
      title: 'Ongoing Brilliance',
      desc: 'Remote health monitoring, content refreshes, and a dedicated support line keep your TouchGolf screens performing like the day they were installed.'
    }
  ]

  return (
    <section 
      id="process" 
      aria-label="How We Bring Your Vision to Life"
      className="w-full py-24 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center relative z-10 bg-gradient-to-b from-black/[0.02] to-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm mb-16 text-center">
          How We Bring Your Vision to Life
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute -top-6 -right-6 text-9xl font-black text-white/40 select-none group-hover:text-white/50 transition-colors duration-300">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-900/80 leading-relaxed text-sm md:text-base">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
