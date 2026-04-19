import React from 'react'
import ContactForm from '../components/sections/contact/contactForm'

const Contact = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-main max-w-2xl">
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Get in Touch</h2>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact