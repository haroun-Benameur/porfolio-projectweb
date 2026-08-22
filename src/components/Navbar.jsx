import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
  ]

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="bg-primary/90 backdrop-blur-sm fixed w-full z-50 border-b border-tertiary/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-textPrimary hover:text-secondary transition-colors">
            Haroun<span className="text-secondary">.BA</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="nav-link text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm py-2 px-5"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textSecondary hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-tertiary/95 backdrop-blur-sm border-t border-secondary/20">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-textSecondary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                className="block text-center btn-primary text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
