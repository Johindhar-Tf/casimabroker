import { useEffect, useRef, useState } from 'react'
import jennifer from '../assets/jennifer.png'

const trustBadges = [
  { icon: '🏠', text: 'Licensed Since 2015' },
  { icon: '💼', text: 'Broker®' },
  { icon: '🌎', text: 'Bilingual EN/ES' },
  { icon: '📍', text: 'McAllen, TX RGV' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen pt-16 sm:pt-20 flex items-center overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
        {/* Left — Text */}
        <div
          className={`flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-0
            bg-gradient-to-br from-beige via-[#faf3ee] to-white
            transition-all duration-1000 ease-out
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          {/* Credential badge */}
          <div className="inline-flex items-center gap-2 mb-6 self-start">
            <span className="w-2 h-2 rounded-full bg-terracotta inline-block" />
            <span className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-terracotta">
              TX Licensed Real Estate Broker &bull; Since 2015
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-charcoal mb-5">
            Your Home.<br />
            Your Investment.<br />
            <span className="font-semibold">Your Future.</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-base sm:text-lg text-charcoal/70 leading-relaxed max-w-lg mb-4">
            Helping RGV families buy, sell, invest, and build — with expertise,
            heart, and over a decade of experience.
          </p>

          {/* Tagline */}
          <p className="font-heading text-xl sm:text-2xl italic text-terracotta mb-8">
            Buy &middot; Sell &middot; Invest &middot; Build
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 rounded-full bg-terracotta text-white font-body text-sm font-bold tracking-wider uppercase hover:bg-terracotta-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Work With Jennifer
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="px-7 py-3.5 rounded-full border-2 border-terracotta text-terracotta font-body text-sm font-bold tracking-wider uppercase hover:bg-terracotta hover:text-white transition-all duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-soft-tan shadow-sm"
              >
                <span className="text-sm">{badge.icon}</span>
                <span className="font-body text-xs font-semibold text-charcoal/80 whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div
          className={`relative flex-1 min-h-[50vh] lg:min-h-0 flex items-end justify-center
            bg-[#C4856A]
            transition-all duration-1000 ease-out delay-200
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        >
          {/* Subtle gradient overlay at top for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#C4856A] via-[#C4856A]/90 to-[#C4856A] pointer-events-none" />

          {/* Decorative large initial */}
          <div className="absolute top-8 right-8 font-heading text-[8rem] lg:text-[12rem] font-light leading-none text-white/10 select-none pointer-events-none">
            J
          </div>

          <img
            src={jennifer}
            alt="Jennifer Cantu, Casa Mia Real Estate Broker"
            className="relative z-10 w-full h-full max-h-[70vh] lg:max-h-none lg:h-full object-cover object-top"
            style={{ maxWidth: '100%' }}
          />

          {/* Name card overlay at bottom */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
            <p className="font-heading text-lg font-semibold text-charcoal">Jennifer Cantu</p>
            <p className="font-body text-xs text-terracotta font-semibold tracking-widest uppercase">
              Broker® &bull; Casa Mia Real Estate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
