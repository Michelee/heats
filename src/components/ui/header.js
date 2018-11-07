import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Logo from '../icons/heats-logo'
import Hamburguer from '../icons/hamburger'
import '../../styles/ui/header.scss'

const scrollConfig = {
  spy: true,
  smooth: true,
  duration: 1000
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle () {
    const toggle = this.state.toggle
    this.setState({
      toggle: !toggle
    })
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Link to="home" {...scrollConfig}>
            <Logo />
          </Link>
          <div className={`menu ${this.state.toggle ? 'show' : ''}`}>
            <Link to="home" {...scrollConfig}>Home</Link>
            <Link to="application" {...scrollConfig}>Applications</Link>
            <Link to="product" {...scrollConfig}>Products</Link>
            <Link to="about" {...scrollConfig}>Our Story</Link>        
            <Link to="contact" {...scrollConfig}>Contact Us</Link> 
          </div>
          <a class="icon" onClick={this.handleToggle}><Hamburguer /></a>  
        </div>
      </div>
    )
  }
}

export default Header
