import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#2405F0] font-medium text-sm md:text-base"
      : "text-[#282938]/70 hover:text-[#2405F0] font-medium text-sm md:text-base transition-colors"

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#282938]">
          Logo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/features" className={linkClass}>Features</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/work" className={linkClass}>Work</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Mobile nav toggle (simple for now) */}
        <MobileMenu linkClass={linkClass} />
      </div>
    </header>
  )
}

function MobileMenu({ linkClass }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button
        className="md:hidden p-2 text-[#282938]"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t p-6 flex flex-col gap-4 md:hidden">
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/features" className={linkClass} onClick={() => setOpen(false)}>Features</NavLink>
          <NavLink to="/pricing" className={linkClass} onClick={() => setOpen(false)}>Pricing</NavLink>
          <NavLink to="/faq" className={linkClass} onClick={() => setOpen(false)}>FAQ</NavLink>
          <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/work" className={linkClass} onClick={() => setOpen(false)}>Work</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </>
  )
}

export default Header