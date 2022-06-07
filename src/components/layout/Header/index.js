import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logoSvg from '../../../assets/images/smartten_logo.svg'
import './style.css'

function Header( { languages, navigation} ) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");



  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n]);
  
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
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
          <div className="header__navigation d-md-flex">
            <ul className="nav__lists d-none d-md-flex">
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
            </ul>
            <div className="header__menuButtonOpen" onClick={handleBurgerMenu}>
              <span className="lh-md-50">
              Menu 
              </span>
              <div className="hamburger">
                  <div className="top-bun"></div>
                  <div className="meat"></div>
                  <div className="bottom-bun"></div>
              </div>
            </div>
          </div>
          <div className="header__language d-md-block d-sm-none d-none">
            <select  onChange={changeLanguage} className="selectpicker" value={currentLang}>
              <option value="en" >
                  English
              </option>
              <option value="vi" >
                  Tiếng Việt
                </option>
            </select>
          </div>
          <div className="header__burgerMenu">
            <div className="header__menuList" >
              <div className="menuLists__close" onClick={handleBurgerMenu}>
                <span>
                  Close
                </span>
                <i className="ti ti-close"></i>
              </div>
              <div className="menuLists-lists">
                <ul className="menuLists-lists-inner">
                  { navigation && navigation.map((nav, index) =>(
                    <li key={index} onClick={handleBurgerMenu} className={nav.subMenu.length >0 ?"has-child": ""}>
                      <Link to={nav.linkUrl}>
                        {nav.subMenu.length > 0 && <i className="ti ti-arrow-left"></i>}
                        {nav.lang[languages.lang]}
                      </Link>
                      {nav.subMenu.length > 0 && 
                      <div className="menu-display-table" >
                            <ul>
                              {nav.subMenu.map((child, index1) => (
                                <li key={index1}  >
                                  <Link  to={`${nav.linkUrl}/post/${index1}`}> {child.lang[languages.lang]} </Link>
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
        </div>
    </div>
  );
}

export default Header;
