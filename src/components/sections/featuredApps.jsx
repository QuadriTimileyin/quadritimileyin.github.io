import React from 'react'
import { Link } from 'react-router-dom'
import { RiAppleFill, RiGooglePlayFill, RiArrowRightUpLine, RiSmartphoneLine } from '@remixicon/react'
import { featuredApps } from '../../utlits/fackData/appLinksData'
import SlideUp from '../../utlits/animations/slideUp'

const FeaturedApps = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-surface/30">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-main relative z-10">
        <SlideUp>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                Featured Work
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
                Shipped Products
              </h2>
              <p className="text-text-secondary text-lg mt-4 max-w-xl leading-relaxed">
                Production apps on the App Store & Google Play — built, shipped, and actively used by real customers.
              </p>
            </div>
            <Link 
              to="/works" 
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-accent text-text-primary rounded-xl font-semibold transition-all hover:bg-accent/5"
            >
              View All Projects 
              <RiArrowRightUpLine size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredApps.map((app, index) => (
            <SlideUp key={app.id} delay={index * 0.1}>
              <div className="group h-full bg-elevated/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img 
                    src={app.image} 
                    alt={app.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-60" />
                  
                  {/* App icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                    <RiSmartphoneLine size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {app.name}
                    </h3>
                    <span className="text-sm text-accent font-medium">
                      {app.tagline}
                    </span>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {app.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-text-secondary flex gap-2.5 leading-relaxed">
                        <span className="text-accent mt-0.5 shrink-0 font-bold">›</span>
                        <span className="flex-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-5">
                    {app.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface text-text-secondary border border-border/50 hover:border-accent/30 hover:text-text-primary transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-border/50">
                    {app.appStore && (
                      <a 
                        href={app.appStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 text-text-secondary text-sm font-medium rounded-lg border border-border/50 hover:text-text-primary hover:border-accent/30 transition-all"
                      >
                        <RiAppleFill size={16} /> App Store
                      </a>
                    )}
                    {app.playStore && (
                      <a 
                        href={app.playStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 text-text-secondary text-sm font-medium rounded-lg border border-border/50 hover:text-text-primary hover:border-accent/30 transition-all"
                      >
                        <RiGooglePlayFill size={16} /> Google Play
                      </a>
                    )}
                    <Link 
                      to={`/single-project/${app.projectId}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all ml-auto"
                    >
                      Details <RiArrowRightUpLine size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedApps
