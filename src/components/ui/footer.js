import React from 'react'
import PhoneIcon from '../icons/phone-icon'
import MailIcon from '../icons/mail-icon'
import PlaceIcon from '../icons/place-icon'
import LogoIcon from '../icons/heats-white-logo'
import TwitterIcon from '../icons/twitter-icon'
import FacebookIcon from '../icons/facebook-icon'
import InstagramIcon from '../icons/instagram-icon'

import '../../styles/ui/footer.scss'

const Footer = () => (
  <div className="footer-container">
    <div className="info-container">
      <div className="info-box">
        <PlaceIcon />
        <span>6744 SPENCER STREET,<br />LAS VEGAS, NV 89119</span>
      </div>
      <div className="info-box">
        <MailIcon />
        <a href="mailto:buy@h-eats.com">buy@h-eats.com</a>  
        <a href="mailto:learn@h-eats.com">learn@h-eats.com</a>       
        <a href="mailto:press@h-eats.com">press@h-eats.com</a>                    
      </div>
      <div className="info-box">
        <PhoneIcon />
        <span>704.488.7255</span>
      </div>
    </div>
    <hr />
    <div className="footer-content section">
      <LogoIcon />
      <div className="social-media-icons">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <span>Copyright 2018. All Rights Reserved</span>
    </div>
  </div>
)

export default Footer;
