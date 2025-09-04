import React from 'react'
import { FaGithub } from "react-icons/fa"
import { SiNotion } from "react-icons/si"
import "./styles/Footer.scss"

const Footer = () => {
  return (
    <div className='inner foot-inner'>
      <div className="left">
        <h4>LOGO</h4>
        <p>© 2025 DECODE.Lab. All rights reserved.</p>
      </div>
      <div className="right">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://notion.so" target="_blank" rel="noopener noreferrer">
          <SiNotion size={28} />
        </a>
      </div>

    </div>
  )
}

export default Footer