import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiShakeHandsLine, RiMenuLine, RiCloseLine } from '@remixicon/react'
import { menuList } from '../../utlits/fackData/menuList'
import AppLinksDropdown from './appLinksDropdown'

const Header = () => {
  const pathName = useLocation().pathname
  const [isSticky, setIsSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathName])

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 85)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-cursive text-2xl md:text-3xl text-text-primary">
            Timmy
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuList.map(({ id, label, path }) => (
              <Link
                key={id}
                to={path}
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-accent ${
                  pathName === path ? 'text-accent' : 'text-text-secondary'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <AppLinksDropdown />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
            >
              Hire Me <RiShakeHandsLine size={15} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-border mt-2 pt-4 bg-primary/95 backdrop-blur-md -mx-5 px-5 sm:-mx-6 sm:px-6 rounded-b-xl">
            <nav className="flex flex-col gap-3 mb-4">
              {menuList.map(({ id, label, path }) => (
                <Link
                  key={id}
                  to={path}
                  className={`text-sm py-1 transition-colors ${
                    pathName === path ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <AppLinksDropdown />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg"
              >
                Hire Me <RiShakeHandsLine size={15} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
