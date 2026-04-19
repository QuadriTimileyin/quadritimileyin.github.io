import React from 'react'
import { Link } from 'react-router-dom'
import { RiLinkedinFill, RiGithubLine, RiDownloadLine, RiMailLine, RiArrowRightLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container-main relative z-10">
                <div className="max-w-4xl">
                    <SlideUp>
                        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-text-secondary mb-6 px-3 py-1.5 rounded-full border border-border/50 bg-elevated/50 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for work
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                            <span className="text-text-primary">Timileyin</span>
                            <br />
                            <span className="text-text-muted text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">(Timmy)</span>{' '}
                            <span className="text-text-primary">Quadri</span>
                        </h1>
                    </SlideUp>
                    <SlideUp>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="h-px bg-gradient-to-r from-accent to-transparent w-12" />
                            <p className="text-xl sm:text-2xl text-accent font-semibold">Senior Mobile Engineer</p>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-text-secondary mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl">
                            <span className="text-text-primary font-semibold">8+ years</span> building production mobile & web apps with{' '}
                            <span className="text-accent">Flutter</span>, <span className="text-accent">React Native</span> &{' '}
                            <span className="text-accent">FastAPI</span>.
                            <br />
                            <span className="text-text-primary font-medium">30+ shipped products</span> across fintech, mobility, logistics, and SaaS — serving users in 4 countries.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-wrap gap-2 mt-8">
                            {['Flutter', 'React Native', 'Expo', 'Next.js', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD'].map((t, i) => (
                                <span 
                                    key={i} 
                                    className="px-4 py-2 text-sm font-medium rounded-lg bg-elevated/80 backdrop-blur-sm text-text-secondary border border-border/50 hover:border-accent/50 hover:text-text-primary transition-all cursor-default"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <a
                                href="/Timileyin_Quadri_Resume.pdf"
                                download="Timileyin_Quadri_Resume.pdf"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
                            >
                                <RiDownloadLine size={18} /> Download CV
                                <RiArrowRightLine size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-text-primary text-base font-semibold rounded-xl hover:border-accent hover:bg-accent/5 transition-all"
                            >
                                <RiMailLine size={18} /> Let's Talk
                                <RiArrowRightLine size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex items-center gap-6 mt-10">
                            <span className="text-sm text-text-muted">Connect</span>
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.linkedin.com/in/timileyin-q-4b7737231" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="LinkedIn"
                                    className="w-10 h-10 rounded-lg bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
                                >
                                    <RiLinkedinFill size={20} />
                                </a>
                                <a 
                                    href="https://github.com/QuadriTimileyin" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="GitHub"
                                    className="w-10 h-10 rounded-lg bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
                                >
                                    <RiGithubLine size={20} />
                                </a>
                            </div>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-border/60">
                            {[
                                ['8+', 'Years Experience'],
                                ['30+', 'Apps Shipped'],
                                ['4', 'Countries'],
                                ['12+', 'Happy Clients'],
                            ].map(([value, label]) => (
                                <div key={label} className="text-center sm:text-left">
                                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-text-secondary tabular-nums">
                                        {value}
                                    </div>
                                    <div className="text-xs text-text-muted mt-1.5 tracking-wide uppercase">
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default Hero
