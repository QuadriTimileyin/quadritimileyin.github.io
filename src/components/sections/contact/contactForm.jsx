import React from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';

const ContactForm = () => {
    return (
        <SlideUp>
            <form
                action="https://formsubmit.co/timidev34@gmail.com"
                method="POST"
                className="space-y-5"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                <input type="text" name="_honey" className="hidden" />

                <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Steve Milner"
                            required
                            className="w-full px-4 py-3 bg-elevated border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@company.com"
                            required
                            className="w-full px-4 py-3 bg-elevated border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">Your Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Write your message"
                        required
                        className="w-full px-4 py-3 bg-elevated border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors"
                >
                    Send Message <RiMailLine size={15} />
                </button>
            </form>
        </SlideUp>
    );
};

export default ContactForm;