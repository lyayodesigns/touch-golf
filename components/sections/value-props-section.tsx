export function ValuePropsSection() {
  const props = [
    {
      title: 'Curated, Not Canned',
      desc: 'Every installation is designed around your club’s identity, from the interface skin to the content flow. We don’t do generic.'
    },
    {
      title: 'Touch That Feels Intentional',
      desc: 'Ultrasensitive capacitive screens respond to the lightest touch—perfect for sun-screened fingers, golf gloves, or a champagne flute in the other hand.'
    },
    {
      title: 'Silent Concierge, 24/7',
      desc: 'Automated updates for tee times, event results, and weather keep the experience fresh. Your staff stays focused on hospitality, not screen management.'
    },
    {
      title: 'Data-Driven Member Delight',
      desc: 'Optional analytics show what members love most—so you can refine loyalty programs, pro shop offers, and event formats with confidence.'
    },
    {
      title: 'Effortless Integration',
      desc: 'Syncs with leading golf management software, tournament platforms, and club CRMs. We handle the tech; you enjoy the applause.'
    }
  ]

  return (
    <section 
      id="why-touchgolf" 
      aria-label="Why TouchGolf"
      className="w-full py-24 px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col items-center text-center relative z-10 bg-gradient-to-b from-black/[0.02] to-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm mb-12">
          Why TouchGolf?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {props.map((prop, i) => (
            <div 
              key={i} 
              className={`bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl text-left flex flex-col gap-3 ${i === props.length - 1 && props.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <h3 className="text-xl font-bold text-gray-900">{prop.title}</h3>
              <p className="text-gray-900/80 leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
