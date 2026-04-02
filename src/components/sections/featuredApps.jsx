import React from 'react'
import { Link } from 'react-router-dom'
import { RiAppleFill, RiGooglePlayFill, RiArrowRightUpLine } from '@remixicon/react'
import { featuredApps } from '../../utlits/fackData/appLinksData'
import SlideUp from '../../utlits/animations/slideUp'

const FeaturedApps = () => {
  return (
    <section id="featured-apps" className="featured-apps-area">
      <div className="container">
        <div className="featured-apps-header">
          <div>
            <h2 className="featured-apps-title">Shipped Products</h2>
            <p className="featured-apps-subtitle">
              Production apps on the App Store &amp; Google Play — built, shipped, and used by real customers.
            </p>
          </div>
        </div>

        <div className="row featured-apps-grid">
          {featuredApps.map((app, index) => (
            <div className="col-lg-6 col-md-6" key={app.id}>
              <SlideUp delay={index}>
                <div className="featured-app-card">
                  <div className="featured-app-visual">
                    <img src={app.image} alt={app.name} />
                  </div>
                  <div className="featured-app-info">
                    <div className="featured-app-name-row">
                      <h3>{app.name}</h3>
                      <span className="featured-app-tagline">{app.tagline}</span>
                    </div>
                    <ul className="featured-app-bullets">
                      {app.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <div className="featured-app-tech">
                      {app.tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                      ))}
                    </div>
                    <div className="featured-app-ctas">
                      {app.appStore && (
                        <a
                          href={app.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="store-cta store-cta--apple"
                        >
                          <RiAppleFill size={14} />
                          App Store
                        </a>
                      )}
                      {app.playStore && (
                        <a
                          href={app.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="store-cta store-cta--google"
                        >
                          <RiGooglePlayFill size={14} />
                          Google Play
                        </a>
                      )}
                      <Link
                        to={`/single-project/${app.projectId}`}
                        className="store-cta store-cta--detail"
                      >
                        Details <RiArrowRightUpLine size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedApps
