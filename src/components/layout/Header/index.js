import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logoSvg from '../../../assets/images/smartten_logo-red.svg'
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
        <div className="container">
          <div className="header__logo">
              <Link className="logo-link" to="/">
                <img src={logoSvg} alt=""/>
              </Link>
          </div>
          <div className="header__navigation d-md-flex">
            <ul id="navigation">
            { navigation && navigation.map((nav, index) => index > 0 &&(
                      <li key={index} className={nav.subMenu.length >0 ?"has-child": ""}>
                        <Link to={nav.linkUrl}>
                          {nav.lang[languages.lang]}
                        </Link>
                        {nav.subMenu.length > 0 && 
                        <div className="menu-display-table" >
                              <ul>
                                {nav.subMenu.map((child, index1) => (
                                  <li key={index1} className="col-md-6 col-sm-6 col-12" >
                                    <Link to={child.linkUrl}> {child.lang[languages.lang]} </Link>
                                  </li>
                                ))}
                              </ul>
                        </div>}
                      </li> 
                    ))}
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
            </ul>
          </div>
          
        </div>
    </div>
  );
}

export default Header;
