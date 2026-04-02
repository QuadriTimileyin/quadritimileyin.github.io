import React from 'react'
import profile from "../../assets/images/about/profile.png"
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
        Timileyin (Timmy) Quadri<br />
        <span className="text-primary">Senior Mobile Engineer</span>
      </h1>
                                <p className="text-lg leading-relaxed mb-6">
        I architect <span className="font-semibold">scalable digital experiences</span> through expert React Native, Flutter, and modern web development. Specializing in <span className="text-primary">cross-platform mobile applications</span> for fintech, mobility, logistics, and SaaS, I deliver production apps with 98% crash-free reliability and measurable business impact.
      </p>
      <div className="space-y-4 mb-8">
        <p>
          <RiFlutterFill className="inline mr-2 text-blue-500" size={20} />
          <strong>Mobile Engineering:</strong> Build production-grade Flutter &amp; React Native apps with 98% crash-free reliability. Expert in BLoC, Riverpod, RTK Query, and Feature-Sliced Design (FSD).
        </p>
        
        <p>
          <RiReactjsLine className="inline mr-2 text-blue-400" size={20} />
          <strong>DevOps &amp; Tooling:</strong> Shorebird OTA updates, EAS builds, Fastlane, Xcode Cloud, Codemagic, and GitHub Actions for seamless CI/CD pipelines.
        </p>

        <p>
          <RiServerLine className="inline mr-2 text-purple-500" size={20} />
          <strong>Full-Stack Capabilities:</strong> Laravel &amp; Python backends, RESTful APIs, Firebase, WebSockets, Stripe/Paystack integrations, and real-time data systems.
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