import { Link } from "react-router-dom";
import { FaFacebookF,FaTwitter, FaWhatsapp ,FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  

import locationMap from '../../../assets/images/location_map.png';
import './style.css'

function Footer({ languages}) {

  return (
      <div className="footer">
        <div className="footer__top">
            <div className="footer-widget">
              <div className="footer_logo">
                <Link to="/" >
                  <span>VolanSoft</span>
                </Link>
              </div>
              <ul className="widget-navigation">
                {languages.navigation.map((nav, index) => (
                  <li key={index}>
                    <Link to={nav.linkUrl}>{nav.title}</Link></li>
                  ))}
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
              </ul>
            </div>
            <div className="location_section">
                <h4 >India</h4>
                <div className="footer-address">
                  <span>
                    <FiMapPin />
                    {languages.address}
                  </span>
                  <div className="map_location">
                    <img src={locationMap} alt="location_map" />
                  </div>
                </div>
                <ul className="footer_bussinesses">
                  {languages.bussiness.map((business, index) => (
                      <li key={index} className="business_info">
                        <span>
                          <FontAwesomeIcon icon={business.icon} />
                          {business.title}
                        </span>   
                        <br />
                        Mail: <Link to="mailto:info@volansoft.com">{business.mail}</Link> <br />
                        {business.phone}: <Link to="tel:+919549326532">{business.mobile}</Link>
                      </li>
                    ))}
                </ul>
            </div>    
        </div>
        <div className="footer__bottom">
            <div className="copyright">  
              <span>Copyright © 
                <Link to="/">
                  Volan Software &amp; Technologies
                </Link>. All Rights Reserved
              </span>
            </div>
            <ul className="bottom__navigation">
            {languages.navigation.map((nav, index) => (
                <li key={index}>
                  <Link to={nav.linkUrl} > {nav.title}</Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
        )
}

export default Footer;
