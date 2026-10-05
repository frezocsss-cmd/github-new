import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1C1E53] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white inline-block mb-4">
              Logo
            </Link>
            <p className="text-[#FFFFFF]/70 text-sm max-w-md leading-relaxed">
              We are a digital agency that helps brands achieve their business goals through creative design, development and marketing strategies.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-base mb-4">Pages</h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF]/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-semibold text-base mb-4">More</h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF]/70">
              <li><Link to="/work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/readblog" className="hover:text-white transition-colors">Read Blog</Link></li>
              <li><Link to="/redstudies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-[#FFFFFF]/60">
          <p>© {new Date().getFullYear()} Logo. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer