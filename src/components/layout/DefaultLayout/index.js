
import {React, useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import './style.css';



function DefaultLayout({ children, menuList }) {
  
  function handleSrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  function handleBurgerMenu(){
    document.querySelector(".header__burgerMenu").classList.remove('openBurgerMenu')
  }
  useEffect(() => {
    function handleDisplayScrollTop(){
      if(window.scrollY > 400){
        document.querySelector(".layout__scrollTop").classList.remove('displayNone')
      }else{
        document.querySelector(".layout__scrollTop").classList.add('displayNone')
    }
  }
    window.addEventListener('scroll', handleDisplayScrollTop)
    return () => window.removeEventListener('scroll', handleDisplayScrollTop);
  },[])
 

  return (
    <div>
      <Header languages={children.props.languages} navigation={menuList} />
      <div className="layout__content-main" onClick={handleBurgerMenu}>{children}</div>
      <div onClick={handleSrollTop} className="layout__scrollTop displayNone">
        <a id="scrollUp" href="#top" style={{position: "fixed", zIndex: "1000"}}><i className="ti ti-arrow-up"></i></a>
      </div>
      <Footer languages={children.props.languages} navigation={menuList} />
    </div>


  );
}

export default DefaultLayout;
