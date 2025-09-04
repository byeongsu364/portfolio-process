import React, { useEffect, useState } from 'react'
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from '../../context/ThemeContext'
import { FaThumbsUp } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <header className={`${scrolled ? "scroll" : ""}`}>
      <div className="inner">
        <h4>LOGO</h4>
        <div className="right-wrap">
          <Nav />
          <button className='btn' onClick={toggleTheme}>{theme}</button>
        </div>
      </div>

      {/* 👍 위로가기 버튼 */}
      <div className="fixed-top" onClick={scrollToTop}>
        <FaThumbsUp size={28} />
      </div>
    </header>
  )
}

export default Header
