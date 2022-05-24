import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { BsFillCheckSquareFill, BsFillTelephoneFill, BsSkype } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
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
                  volansoft
              </Link>
          </div>
          <div className="header__navigation">
            <ul className="nav__lists">																
              <li className="lists-item"  >
                  <a href="#getQuoteModal" >
                      <BsFillCheckSquareFill /> 
                      Get Quote
                  </a>
              </li>
              <li className="lists-item" >
                  <a href="mailto:info@volansoft.com">
                      <HiMail />
                      info@volansoft.com
                  </a>
              </li>
              <li className="lists-item" >
                  <a href="tel:9549326532">
                      <BsFillTelephoneFill /> 
                      +919549326532
                  </a>
              </li>
              <li className="lists-item" >
                  <a href="skype:rameshk2316?call">
                      <BsSkype />
                      Skype
                  </a>
              </li>       
              <li  className="lists-item">
                <div className="header__menuButtonOpen" onClick={handleBurgerMenu}>
                  Menu &nbsp; 
                <GiHamburgerMenu />
                </div>
              </li>                
            </ul>
          </div>
          <div className="header__burgerMenu">
            <div className="header__menuButtonClose" onClick={handleBurgerMenu}>
              <div className="menuButton__close">
                <AiOutlineClose />
                Close
              </div>
              <ul className="menuLists">
              {languages.navigation.map((nav, index) => (
                  <li className="menuLists-items" key={index}>
                    <Link to={nav.linkUrl} > 
                      {nav.title}

                    </Link>
                  </li>
                ))}
              </ul>
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
