import React from 'react'
import { Link } from 'react-router-dom'
import { RiDownloadLine, RiSendPlaneLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>  Ready to Build Something Exceptional?</h2>
                                <p>Let's architect scalable solutions with clean code and intuitive UX. 
                                    I'm available for full-time roles or contract work to deliver 
                                    high-performance applications.</p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn"> Start a Conversation  <i><RiSendPlaneLine size={18} /></i></Link>
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

export default CallToAction