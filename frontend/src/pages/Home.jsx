import React from 'react'
import Hero from '../components/home/Hero'
import Aboutme from '../components/home/Aboutme'
import Header from '../components/home/Header'
import Works from '../components/home/Works'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
const Home = () => {
  
  return (
    <div>
      <Header />
      <main>
        <section id='Hero'>
          <Hero />
        </section>
        <section id="Aboutme">
          <Aboutme />
        </section>
        <section id="Works">
          <Works />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home