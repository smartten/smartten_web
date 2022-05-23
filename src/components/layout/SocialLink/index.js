import React from 'react'
import { FaFacebookF,FaTwitter, FaWhatsapp ,FaLinkedinIn } from 'react-icons/fa';
import './style.css'

function SocialLink() {
  return (
    <div>
        <ul className="social_link">
            <li>
                <a className="facebook"  href="https://www.facebook.com/volansoft" target="blank" >
                    <FaFacebookF />
                </a>
            </li>	
            <li>
                <a className="twitter"  href="https://twitter.com/volansoft" target="blank" >
                <FaTwitter />
                </a>
            </li>	
            <li>
                <a className="whatsapp"  href="https://api.whatsapp.com/send?phone=919549326532" target="blank" >
                    <FaWhatsapp />
                </a>
            </li>	
            <li>
                <a className="linkedin"  href="https://www.linkedin.com/company/volansoft/" target="blank" >
                    <FaLinkedinIn />
                </a>
            </li>	
        </ul>
    </div>
  )
}

export default SocialLink