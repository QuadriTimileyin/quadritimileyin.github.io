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
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary bg-elevated border border-border rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <RiSmartphoneLine size={15} />
        <span>My Apps</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-surface border border-border rounded-xl shadow-xl overflow-hidden z-50">
          <div className="px-4 py-2.5 border-b border-border">
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Live on App Stores</span>
          </div>
          <ul className="py-1 max-h-64 overflow-y-auto">
            {allAppLinks.map((app) => (
              <li key={app.id} className="flex items-center justify-between px-4 py-2.5 hover:bg-elevated transition-colors">
                <span className="text-sm text-text-primary">{app.name}</span>
                <div className="flex gap-1.5">
                  {app.appStore && (
                    <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" title={`${app.name} on App Store`}>
                      <RiAppleFill size={16} />
                    </a>
                  )}
                  {app.playStore && (
                    <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" title={`${app.name} on Google Play`}>
                      <RiGooglePlayFill size={16} />
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
