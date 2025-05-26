import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine, RiCodeBoxLine, RiMailLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.png"
import partner1 from "../../assets/images/client-logos/1.png"
import partner2 from "../../assets/images/client-logos/2.png"
import partner3 from "../../assets/images/client-logos/3.png"
import partner4 from "../../assets/images/client-logos/4.png"
import partner5 from "../../assets/images/client-logos/5.png"
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">

                    
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                            <img 
                                    src={profile} 
                                    alt="Timileyin Quadri" 
                                    className="w-48 h-48 mx-auto rounded-full object-cover mb-4 border-4 border-primary/10"
                                />
                                <h2 className="text-2xl font-bold mb-2">Timileyin Quadri</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Senior Software Engineer specializing in Flutter, React, and Laravel
                                </p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link to="https://www.linkedin.com/in/timileyin-q-4b7737231"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to="https://github.com/QuadriTimileyin"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                    <SlideUp>
                            <div className="about-content-part mb-12">
                                <p className="text-primary font-medium mb-2">Hello There!</p>
                                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                                    I architect and build <span className="text-primary">scalable applications</span> with modern stacks
                                </h1>
                                
                                <div className="space-y-4 mb-8">
                                    <p className="text-lg">
                                        5+ years crafting production-grade solutions in fintech, mobility, and SaaS. 
                                        Passionate about clean architecture and pixel-perfect UIs.
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <RiCodeBoxLine className="text-primary"  size={32}/> &nbsp;
                                        <span>Current focus: Flutter, React, Next.js, Laravel, and CI/CD automation</span>
                                    </div>
                                    {/* <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <RiCircleFill size={14} className="text-green-500 animate-pulse" />
                                        <span>Available for contracts and full-time opportunities</span>
                                    </div> */}
                                    <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for contracts and full-time opportunities</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="hero-btns">
                                    <a
                                    
                                        href="https://drive.google.com/file/d/1LxSwqyZ6Y3Kp95BxSfKKdBmgeonhIxMv/view?usp=sharing"
                                        className="theme-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>

                                </div>
                                {/* <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://drive.google.com/file/d/17phIC_NJ5en03a5G0t700KXs7UskQRjZ/view?usp=sharing"
                                        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download CV <RiDownloadLine size={18} />
                                    </a>
                                    <Link 
                                        to="/contact" 
                                        className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
                                    >
                                        Contact Me <RiMailLine size={18} />
                                    </Link>
                                </div> */}
                            </div>
                        </SlideUp>
                        {/* <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                I’m Timileyin Quadri, a Software Engineer building high-performance, scalable web and mobile applications with Flutter, React, Next.js, and Laravel.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a
                                        href="https://drive.google.com/file/d/17phIC_NJ5en03a5G0t700KXs7UskQRjZ/view?usp=sharing"
                                        className="theme-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>

                                </div>
                            </div>
                        </SlideUp> */}
                        <SlideUp>
                            <div className="about-content-part-bottom">
                            <h2 className="text-xl font-semibold mb-6 text-center md:text-left">
                                    Trusted by innovative teams
                                </h2>    
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                <img src={partner1} alt="" />
                                                <img src={partner2} alt="" />
                                                <img src={partner3} alt="" />
                                                <img src={partner4} alt="" />
                                                <img src={partner5} alt="" />
                                                <img src={partner1} alt="" />
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero