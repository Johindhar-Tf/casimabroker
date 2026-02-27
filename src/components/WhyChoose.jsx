import { useInView } from '../hooks/useInView'

const reasons = [
  {
    icon: '💼',
    title: 'Broker, Not Just an Agent',
    description:
      'As a licensed Broker, Jennifer has a higher level of training, accountability, and expertise than a standard agent — giving you a significant advantage in every transaction.',
  },
  {
    icon: '🌎',
    title: 'Bilingual & Local',
    description:
      'Born and raised in the RGV, Jennifer serves clients in both English and Spanish — making every step clear and comfortable, whatever language you call home.',
  },
  {
    icon: '🤝',
    title: 'A Decade of Trust',
    description:
      'Licensed since 2015 with a track record of happy buyers, successful sellers, and satisfied investors across the Valley. Her reputation is built one family at a time.',
  },
]

export default function WhyChoose() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-terracotta mb-3">
            The Difference
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-2">
            Why Choose Jennifer?
          </h2>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-terracotta rounded-full" />
        </div>

        {/* Highlight blocks */}
        <div className="grid sm:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`relative bg-beige rounded-2xl p-7 border border-soft-tan
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Terracotta top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-terracotta rounded-full" />

              <span className="text-4xl mb-4 block">{r.icon}</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-3">
                {r.title}
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
