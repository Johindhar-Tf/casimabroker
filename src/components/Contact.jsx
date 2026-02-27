import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const INTEREST_OPTIONS = [
  'Buying a Home',
  'Selling a Home',
  'Investing',
  'New Build',
  'Leasing',
  'Just Browsing',
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  interest: '',
  message: '',
  website: '', // honeypot
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-soft-tan bg-white font-body text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-colors duration-200'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-beige">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-terracotta mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-3">
            Let's Connect 🏠
          </h2>
          <p className="font-body text-base sm:text-lg text-charcoal/70 max-w-xl mx-auto">
            Ready to buy, sell, invest, or build? Reach out and Jennifer will get back to you
            personally.
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-terracotta rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form — spans 3 columns */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-soft-tan p-7 sm:p-9">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <span className="text-5xl">🏠</span>
                <h3 className="font-heading text-2xl sm:text-3xl text-charcoal">
                  Message Received!
                </h3>
                <p className="font-body text-charcoal/70 max-w-sm">
                  Thank you! Jennifer will be in touch with you personally very soon 🏠
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-full border-2 border-terracotta text-terracotta font-body text-sm font-bold hover:bg-terracotta hover:text-white transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-1.5">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-1.5">
                      Phone Number <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(956) 867-1723"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-1.5">
                    I'm Interested In <span className="text-terracotta">*</span>
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 mb-1.5">
                    Tell Me About Your Situation
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share any details about what you're looking for, your timeline, or questions you have..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 font-body text-sm">
                    Something went wrong. Please call directly at{' '}
                    <a href="tel:9568671723" className="font-bold underline">
                      956-867-1723
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-full bg-terracotta text-white font-body font-bold text-sm tracking-wider uppercase
                    hover:bg-terracotta-dark transition-all duration-200 shadow-md hover:shadow-lg
                    disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message 🏠'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact details — spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-soft-tan shadow-sm p-6">
              <h3 className="font-heading text-2xl font-semibold text-charcoal mb-5">
                Reach Jennifer Directly
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:9568671723"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-charcoal/50 font-semibold">
                      Phone
                    </p>
                    <p className="font-body text-base font-bold text-charcoal group-hover:text-terracotta transition-colors">
                      956-867-1723
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-charcoal/50 font-semibold">
                      Location
                    </p>
                    <p className="font-body text-base text-charcoal">
                      McAllen, TX — Serving the Entire RGV
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/jennifercantu.broker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xl">📘</span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-charcoal/50 font-semibold">
                      Facebook
                    </p>
                    <p className="font-body text-sm font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                      Jennifer Beltran CasamiaBroker
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <span className="text-xl">🌎</span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-charcoal/50 font-semibold">
                      Languages
                    </p>
                    <p className="font-body text-base text-charcoal">
                      Bilingual — English &amp; Spanish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick note card */}
            <div className="rounded-2xl bg-terracotta px-6 py-6 text-white">
              <p className="font-heading text-xl italic mb-2">
                "I respond personally — you'll hear from me, not an assistant."
              </p>
              <p className="font-body text-sm text-white/80">
                — Jennifer Cantu, Broker®
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
