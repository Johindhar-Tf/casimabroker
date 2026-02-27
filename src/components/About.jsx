import { useInView } from '../hooks/useInView'

const credentials = [
  { icon: '🏠', title: 'Licensed Since 2015' },
  { icon: '💼', title: 'Broker® — Not Just an Agent' },
  { icon: '🌎', title: 'Bilingual EN/ES' },
  { icon: '🏢', title: 'Residential & Commercial' },
  { icon: '👑', title: 'CEO & Founder, Casa Mia Real Estate LLC' },
  { icon: '📍', title: 'Serving the Entire RGV' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-terracotta mb-3">
            The Broker Behind the Brand
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-3">
            Meet Jennifer Cantu
          </h2>
          <p className="font-heading text-xl sm:text-2xl italic text-terracotta/80">
            Real Estate Broker Extraordinaire
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-terracotta rounded-full" />
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-body text-base sm:text-lg text-charcoal/75 leading-relaxed">
            I'm Jennifer Cantu, a licensed Texas Real Estate Broker and the CEO &amp; Founder of
            Casa Mia Real Estate LLC. I've been serving clients across the Rio Grande Valley since
            2015 with residential and commercial real estate services. Whether you're a first-time
            buyer, seasoned investor, or looking to lease or build — I bring the expertise, local
            knowledge, and personal attention your transaction deserves. Bilingual in English and
            Spanish, I'm here to make the process smooth, clear, and successful for you.
          </p>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {credentials.map((cred, i) => (
            <div
              key={cred.title}
              className={`flex flex-col items-center text-center gap-2 px-4 py-5 rounded-xl
                bg-beige border border-soft-tan hover:border-terracotta/40
                hover:shadow-md transition-all duration-300
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-2xl">{cred.icon}</span>
              <span className="font-body text-sm font-semibold text-charcoal leading-snug">
                {cred.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
