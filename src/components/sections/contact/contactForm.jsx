import React from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';

const ContactForm = () => {
    return (
        <div className="col-lg-12">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form
                        id="contactForm"
                        className="contactForm"
                        name="contactForm"
                        action="https://formsubmit.co/timidev34@gmail.com"
                        method="POST"
                    >
                        {/* Hidden Inputs */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://abrahamadebayo.github.io/thank-you" />
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Steve Milner"
                                        required
                                    />
                                    <label htmlFor="name" className="for-icon">
                                        <i className="far fa-user"></i>
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="hello@websitename.com"
                                        required
                                    />
                                    <label htmlFor="email" className="for-icon">
                                        <i className="far fa-envelope"></i>
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Write your message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Message <i><RiMailLine size={15} /></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    );
};

export default ContactForm;
