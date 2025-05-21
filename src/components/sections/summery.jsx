import React from 'react'
import profile from "../../assets/images/about/profile.jpeg"
import { RiFlutterFill, RiMailSendLine, RiReactjsLine, RiServerLine } from '@remixicon/react'
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
                            <h1 className="text-4xl font-bold mb-6">
        Timileyin Quadri<br />
        <span className="text-primary">Software Engineer</span>
      </h1>
                                <p className="text-lg leading-relaxed mb-6">
        I architect <span className="font-semibold">scalable digital experiences</span> through expert Flutter and Next.js development. Specializing in <span className="text-primary">cross-platform applications</span>, I bridge the gap between pixel-perfect UIs and robust backend systems, delivering solutions that drive measurable business impact.
      </p>
      <div className="space-y-4 mb-8">
        <p>
          <RiFlutterFill className="inline mr-2 text-blue-500" size={20} />
          <strong>Mobile Engineering:</strong> Build production-grade Flutter apps with 99% crash-free sessions, leveraging Shorebird for hotfixes and Xcode Cloud for seamless iOS deployments.
        </p>
        
        <p>
          <RiReactjsLine className="inline mr-2 text-blue-400" size={20} />
          <strong>Web Solutions:</strong> Craft high-performance Next.js applications with TypeScript, achieving 95+ Lighthouse scores through SSR optimization and intelligent caching.
        </p>

        <p>
          <RiServerLine className="inline mr-2 text-purple-500" size={20} />
          <strong>Full-Stack Capabilities:</strong> Integrate Laravel backends with mobile/web frontends, implementing JWT authentication, real-time APIs, and automated CI/CD pipelines.
        </p>
      </div>
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