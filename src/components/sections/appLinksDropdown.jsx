import React, { useState, useRef, useEffect } from 'react'
import { RiAppleFill, RiGooglePlayFill, RiSmartphoneLine } from '@remixicon/react'
import { allAppLinks } from '../../utlits/fackData/appLinksData'

const AppLinksDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="app-links-dropdown" ref={dropdownRef}>
      <button
        className="app-links-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <RiSmartphoneLine size={15} />
        <span>My Apps</span>
      </button>

      {isOpen && (
        <div className="app-links-panel">
          <div className="app-links-header">
            <span>Live on App Stores</span>
          </div>
          <ul className="app-links-list">
            {allAppLinks.map((app) => (
              <li key={app.id} className="app-links-item">
                <span className="app-links-name">{app.name}</span>
                <div className="app-links-stores">
                  {app.appStore && (
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-link store-link--apple"
                      title={`${app.name} on App Store`}
                    >
                      <RiAppleFill size={14} />
                    </a>
                  )}
                  {app.playStore && (
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-link store-link--google"
                      title={`${app.name} on Google Play`}
                    >
                      <RiGooglePlayFill size={14} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AppLinksDropdown
