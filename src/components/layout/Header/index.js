import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logoSvg from '../../../assets/images/smartten_logo.svg'
import './style.css'

function Header( { languages} ) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("vi");

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n]);
  const changeLanguageVI = () => {
    i18n.changeLanguage("vi");
    setCurrentLang("vi");
  };

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    setCurrentLang("en");
  };

  function handleBurgerMenu(){
    document.querySelector(".header__burgerMenu").classList.toggle('openBurgerMenu')
  }

  useEffect(() => {
    function changeBackground(){
      if(window.scrollY > 400){
        document.querySelector(".header").classList.add('backgroundBlack')
      }else{
        document.querySelector(".header").classList.remove('backgroundBlack')
    }
  }
    window.addEventListener('scroll', changeBackground)
    return () => window.removeEventListener('scroll', changeBackground);
  },[])


  return (
    <div className="header">
        <div className="header--container">
          <div className="header__logo">
              <Link className="logo-link" to="/">
                <img src={logoSvg} alt=""/>
              </Link>
          </div>
          <div className="header__navigation">
            <ul className="nav__lists">
              <li className="lists-item"  >
                  <a href="#getQuoteModal" >
                    <i className="fa fa-check-square"/>
                      Get Quote
                  </a>
              </li>
              <li className="lists-item" >
                  <a href="mailto:info@volansoft.com">
                      <i className="fa fa-envelope" />
                      info@volansoft.com
                  </a>
              </li>
              <li className="lists-item" >
                  <a href="tel:9549326532">
                    <i className="fa fa-phone-square" />
                      +919549326532
                  </a>
              </li>
              <li className="lists-item" >
                  <a href="skype:rameshk2316?call">
                    <i className="fa-brands fa-skype"/>
                      Skype
                  </a>
              </li>
              <li  className="lists-item">
                <div className="header__menuButtonOpen" onClick={handleBurgerMenu}>
                  Menu &nbsp; 
                  <div className="hamburger">
                      <div className="top-bun"></div>
                      <div className="meat"></div>
                      <div className="bottom-bun"></div>
									</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="header__burgerMenu">
            <div className="header__menuList" >
              <div className="menuLists__close" onClick={handleBurgerMenu}>
                Close
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="menuLists-lists">
                <ul className="menuLists-lists-inner">
                  {languages.navigation.map((nav, index) =>(
                    <li key={index} className={nav.hasChild}>
                      <Link to={nav.linkUrl}>
                        {nav.hasChild && <i className="fa-solid fa-left-long"></i>}
                        {nav.title}
                      </Link>
                      {nav.hasChild && 
                      <div className="menu-display-table">
                            <ul>
                              {nav.childrenList.map((child, index1) => (
                                <li key={index1}>
                                  <Link to="/services/post">{child}</Link>
                                </li>
                              ))}
                            </ul>
                      </div>}
                    </li> 
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="header__language">
            <button onClick={changeLanguageVI}>VI</button>
            <button onClick={changeLanguageEN}>EN</button>
          </div>
        </div>
    </div>
  );
}

export default Header;
