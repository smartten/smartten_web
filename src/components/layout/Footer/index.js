import { Link } from "react-router-dom";
import locationMap from '../../../assets/images/location_map.jpg';
import logoSvg from '../../../assets/images/smartten_logo-white.svg';
import './style.css'

function Footer({ languages, navigation}) {

      
  return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer__top">
              <div className="footer-widget col-md-4 col-sm-12 col-12">
                <div className="footer_logo">
                  <Link to="/" className="logo-link" >
                  <img  src={logoSvg} alt=""/>
                  </Link>
                </div>
                <ul className="widget-navigation">
                  {navigation.map((nav, index) => (
                    <li key={index}>
                      <Link to={nav.linkUrl}>{nav.lang[languages.lang]}</Link></li>
                    ))}
                </ul>
              </div>
              <div className="location_section col-md-8 col-sm-12 col-12 ">
                  <h4 >VietNam</h4>
                  <div className="footer-address">
                    <span className="col-md-4 col-sm-12 col-12">
                    <i className="pe-7s-map-marker"></i>
                      {languages.address}
                    </span>
                    <div className="map_location col-md-8 col-sm-12 col-12">
                      <img src={locationMap} alt="location_map" />
                    </div>
                  </div>
                  <ul className="footer_bussinesses">
                    {languages.bussiness.map((business, index) =>(
                        <li key={index} className="business_info col-md-4 col-sm-12 col-12 ">
                          <span className="business-icon">
                            <i className={business.icon}></i>
                            {business.title}
                          </span>   
                          <br />
                          Mail: <a href="mailto: info@smartten.com.vn">{business.mail}</a> <br />
                          {business.phone}: <a href={`tel:${business.mobile}`}>{business.mobile}</a>
                        </li>
                      ))}
                  </ul>
                  
              </div>    
          </div>
          <div className="footer__bottom">
              <div className="copyright col-md-6 col-sm-6 col-12">  
                <span>Copyright © 
                  <Link to="/">
                   SMARTTEN
                  </Link>. All Rights Reserved
                </span>
              </div>
              <ul className="bottom__navigation col-md-6 col-sm-6 col-12">
                {navigation.map((nav, index) =>  (
                  <li key={index}>
                    <Link to={nav.linkUrl} > {nav.lang[languages.lang]}</Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>

        )
}

export default Footer;
