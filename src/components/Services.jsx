import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: '🏠',
    title: 'Buy',
    description:
      "Ready to find your dream home? I'll guide you through every step of the buying process — from pre-approval to closing day.",
  },
  {
    icon: '💰',
    title: 'Sell',
    description:
      "Get the best value for your property. I'll market, negotiate, and close your sale with professionalism and precision.",
  },
  {
    icon: '📈',
    title: 'Invest',
    description:
      'Build wealth through real estate. I help investors find the right properties for long-term returns in the RGV market.',
  },
  {
    icon: '🔨',
    title: 'Build',
    description:
      'Looking to build new? I connect clients with builders and help navigate new construction from lot to keys.',
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-beige">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-terracotta mb-3">
            What I Offer
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-3">
            How I Can Help You
          </h2>
          <p className="font-heading text-xl sm:text-2xl italic text-terracotta/80">
            Buy &middot; Sell &middot; Invest &middot; Build
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-terracotta rounded-full" />
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-xl border-l-4 border-terracotta p-6
                shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="text-center bg-white rounded-2xl px-6 py-8 shadow-sm border border-soft-tan">
          <p className="font-heading text-xl sm:text-2xl italic text-charcoal/80 mb-5">
            "Not sure where to start? Let's have a conversation — no pressure, just clarity."
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 rounded-full bg-terracotta text-white font-body text-sm font-bold tracking-wider uppercase hover:bg-terracotta-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}
