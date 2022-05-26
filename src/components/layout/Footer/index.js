import { Link } from "react-router-dom";
import { FiMapPin } from 'react-icons/fi';
import locationMap from '../../../assets/images/location_map.png';
import SocialLink from '../../../components/layout/SocialLink/index'
import './style.css'

function Footer({ languages}) {

  return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer__top">
              <div className="footer-widget">
                <div className="footer_logo">
                  <Link to="/" >
                    <span>smartten</span>
                  </Link>
                </div>
                <ul className="widget-navigation">
                  {languages.navigation.map((nav, index) => (
                    <li key={index}>
                      <Link to={nav.linkUrl}>{nav.title}</Link></li>
                    ))}
                  <SocialLink />
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
                          <span className="business-icon">
                            <i className={business.icon}></i>
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
                    Volan Software & Technologies
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
      </div>

        )
}

export default Footer;
