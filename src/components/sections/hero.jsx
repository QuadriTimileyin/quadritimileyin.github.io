import React from 'react'
import { Link } from 'react-router-dom'
import { RiLinkedinFill, RiGithubLine, RiDownloadLine, RiMailLine, RiArrowRightLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <SlideUp>
                        <div className="hero-eyebrow">
                            <span className="hero-status-dot"></span>
                            Available for work
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <h1 className="hero-name">
                            Timileyin <span className="hero-nickname">(Timmy)</span> Quadri
                        </h1>
                    </SlideUp>
                    <SlideUp>
                        <p className="hero-title">Senior Mobile Engineer & Tech Lead</p>
                    </SlideUp>
                    <SlideUp>
                        <p className="hero-desc">
                            6+ years building production mobile apps with <strong>Flutter</strong> &amp; <strong>React Native</strong>.
                            30+ shipped apps across fintech, mobility, logistics, and SaaS.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="hero-stack">
                            {['Flutter', 'React Native', 'TypeScript', 'Python', 'Laravel', 'CI/CD'].map((t, i) => (
                                <span key={i} className="hero-stack-tag">{t}</span>
                            ))}
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="hero-actions">
                            <a
                                href="https://drive.google.com/file/d/14X2mpLDYxoFwiaxggcLDZJXlLVOmlG6C/view?usp=sharing"
                                className="hero-btn hero-btn--primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiDownloadLine size={16} /> Download CV
                            </a>
                            <Link to="/contact" className="hero-btn hero-btn--outline">
                                <RiMailLine size={16} /> Hire Me
                            </Link>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="hero-social">
                            <a href="https://www.linkedin.com/in/timileyin-q-4b7737231" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <RiLinkedinFill size={18} />
                            </a>
                            <a href="https://github.com/QuadriTimileyin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <RiGithubLine size={18} />
                            </a>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default Hero
