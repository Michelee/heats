import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../icons/heats-logo'
import '../../styles/ui/header.scss'

const scrollConfig = {
  spy: true,
  smooth: true,
  duration: 1000
}

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <Link to="home" {...scrollConfig}>
        <Logo />
      </Link>
      <div className="menu">
        <Link to="home" {...scrollConfig}>Home</Link>
        <Link to="application" {...scrollConfig}>Application</Link>
        <Link to="product" {...scrollConfig}>Product</Link>
        <Link to="about" {...scrollConfig}>About</Link>        
        <Link to="contact" {...scrollConfig}>Contact Us</Link>        
      </div>
    </div>
  </div>
)

export default Header