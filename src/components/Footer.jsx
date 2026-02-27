import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      {/* Terracotta accent line */}
      <div className="h-1 w-full bg-terracotta" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Casa Mia Real Estate"
          className="h-16 w-auto object-contain brightness-0 invert"
        />

        {/* Tagline */}
        <p className="font-heading text-xl italic text-terracotta-light tracking-wide">
          Buy &middot; Sell &middot; Invest &middot; Build
        </p>

        {/* Name + title */}
        <p className="font-body text-sm tracking-widest uppercase text-white/60 font-semibold">
          Jennifer Cantu &nbsp;|&nbsp; Broker® &nbsp;|&nbsp; Casa Mia Real Estate LLC
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-terracotta/50" />

        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-body text-sm text-white/60">
          <a
            href="https://www.facebook.com/jennifercantu.broker"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta-light transition-colors duration-200"
          >
            📘 Facebook
          </a>
          <a
            href="tel:9568671723"
            className="hover:text-terracotta-light transition-colors duration-200"
          >
            📞 956-867-1723
          </a>
          <span>📍 McAllen, TX</span>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-white/30 mt-2">
          &copy; {year} Casa Mia Real Estate LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
