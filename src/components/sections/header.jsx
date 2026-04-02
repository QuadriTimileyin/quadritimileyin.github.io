import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiShakeHandsLine } from '@remixicon/react'
import { menuList } from '../../utlits/fackData/menuList'
import AppLinksDropdown from './appLinksDropdown'

const Header = () => {
  const pathName = useLocation().pathname
  const [isSticky, setisSticky] = useState(false)

  useEffect(() => {
    const navbarCollapse = document.querySelector(".navbar-collapse")
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show")
    }
  }, [pathName])

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader)
    return () => window.removeEventListener("scroll", stickyHeader)
  }, [])

  const stickyHeader = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 85) {
      setisSticky(true)
    } else {
      setisSticky(false)
    }
  }

  const logoStyle = {
    fontFamily: 'Pacifico, cursive',
    fontSize: 'xx-large',
    fontWeight: 500,
    margin: 0
  }

  return (
    <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link to="/">
                  <p style={logoStyle}>Timmy</p>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link to="/">
                      <p style={logoStyle}>Timmy</p>
                    </Link>
                  </div>
                  <div className="mobile-app-links">
                    <AppLinksDropdown />
                  </div>
                  <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {menuList.map(({ id, label, path }) => (
                      <li key={id}>
                        <Link to={path} className="nav-link-click">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-btns d-flex align-items-center">
              <AppLinksDropdown />
              <Link to="/contact" className="hero-btn hero-btn--primary header-hire-btn">
                Hire Me <RiShakeHandsLine size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
