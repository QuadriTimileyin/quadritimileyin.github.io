import React from 'react'
import profile from "../../assets/images/about/profile.jpeg"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                I’m Timileyin Quadri, a Software Engineer.
                                </h2>
                                <p>
                                    I'm a Lagos-based Software Engineer specializing in building scalable, high-performance mobile and web applications using Flutter, React, Next.js, and Laravel. With a strong background in frontend engineering and a growing backend skillset, I create robust cross-platform solutions that are both user-centric and developer-friendly.
                                </p>
                                <p>
                                    My expertise includes building multi-role SaaS platforms, integrating NFC and QR technologies, managing app store releases, and automating delivery pipelines using tools like Shorebird, Xcode Cloud, GitHub Actions, and Apple Transporter. I’ve delivered production-ready applications across industries including logistics, fintech, parking tech, and food loyalty.
                                </p>

                                <div className="hero-btns">
                                    <a href="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
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

export default Summery