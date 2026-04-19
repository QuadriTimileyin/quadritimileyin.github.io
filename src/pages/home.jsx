import React from 'react'
import Hero from '../components/sections/hero'
import FeaturedApps from '../components/sections/featuredApps'
import Skills from '../components/sections/skills'
import Portfolio from '../components/sections/portfolio'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedApps />
            <Skills />
            <Portfolio />
        </>
    )
}

export default Home