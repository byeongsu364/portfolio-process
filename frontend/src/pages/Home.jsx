import React from 'react'
import Aboutme from "../components/home/Aboutme"
import Contact from "../components/home/Contact"
import Footer from "../components/home/Footer"
import Header from "../components/home/Header"
import Hero from "../components/home/Hero"
import Work from "../components/home/Work"

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Work />
            <Contact />
            <Aboutme />
            <Footer />
        </div>
    )
}

export default Home