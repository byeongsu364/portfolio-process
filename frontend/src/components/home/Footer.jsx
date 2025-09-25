import React from 'react'
import { FaGithub } from "react-icons/fa"
import { SiNotion } from "react-icons/si"
import footer from "../../utils/footer"
import "./styles/Footer.scss"
const Footer = () => {
  return (
    <footer>
      <div className='inner'>
        <div className="left">
          <h2>{footer.brand.name}</h2>
          <p>
            {footer.brand.copy}
          </p>
        </div>
        <div className="right">
          <a href="https://github.com/byeongsu364/portfolio-process">
            <FaGithub size={28} />
          </a>
          <a href="https://www.notion.so/25c803a2c33780cdabe9f654711c628a?v=25c803a2c33780329235000ca3de5998&source=copy_link">
            <SiNotion size={28} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer