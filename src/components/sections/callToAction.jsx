import React from 'react'
import { Link } from 'react-router-dom'
import { RiSendPlaneLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="py-20 md:py-28 border-t border-border">
            <div className="container-main">
                <SlideUp>
                    <div className="relative rounded-2xl border border-accent/20 bg-elevated overflow-hidden p-8 sm:p-12 text-center max-w-3xl mx-auto">
                        {/* Subtle gradient radial glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,93,58,0.08),transparent_70%)] pointer-events-none" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary relative">Ready to Build Something Exceptional?</h2>
                        <p className="text-text-secondary mt-4 leading-relaxed relative max-w-xl mx-auto">
                            Let's architect scalable solutions with clean code and intuitive UX.
                            Available for full-time roles or contract work to deliver
                            high-performance applications.
                        </p>
                        <div className="mt-8 relative">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors">
                                Start a Conversation <RiSendPlaneLine size={18} />
                            </Link>
                        </div>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default CallToAction
