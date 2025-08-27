import React from 'react'
import Nav from './Nav'
import "./styles/Header.scss"

const Header = () => {
    return (
        <Header>
            <div className='inner'>
                <h4>LOGO</h4>
                <div className="right-wrap">
                    <Nav />
                    <button>Dark</button>
                </div>
            </div>
        </Header>
    )
}

export default Header