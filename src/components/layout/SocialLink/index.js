import React from 'react'
import { FaFacebookF,FaTwitter, FaWhatsapp ,FaLinkedinIn } from 'react-icons/fa';
import './style.css'

function SocialLink() {
  return (
    <div>
        <ul className="social_link">
            <li>
                <a className="facebook"  href="https://www.facebook.com/smartten-software" target="blank" >
                    <FaFacebookF />
                </a>
            </li>	
            <li>
                <a className="twitter"  href="https://twitter.com/smartten-software" target="blank" >
                <FaTwitter />
                </a>
            </li>	
            <li>
                <a className="whatsapp"  href="https://api.whatsapp.com/send?phone=2462593698" target="blank" >
                    <FaWhatsapp />
                </a>
            </li>	
            <li>
                <a className="linkedin"  href="https://www.linkedin.com/company/smartten-software/" target="blank" >
                    <FaLinkedinIn />
                </a>
            </li>	
        </ul>
    </div>
  )
}

export default SocialLink