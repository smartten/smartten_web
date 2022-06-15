
import {React, useEffect, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import './style.css';



function DefaultLayout({ children, menuList }) {

  const [isDisplayed, setIsDisplayed] = useState(false)
  function handleSrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  useEffect(() => {
    function handleDisplayScrollTop(){
      if(window.scrollY > 400){
        setIsDisplayed(true)
      }else{
        setIsDisplayed(false)
    }
  }
    window.addEventListener('scroll', handleDisplayScrollTop)
    return () => window.removeEventListener('scroll', handleDisplayScrollTop);
  },[])
 

  return (
    <div>
      <Header languages={children.props.languages} navigation={menuList} />
      <div className="layout__content-main" >{children}</div>
      <div onClick={handleSrollTop} className={isDisplayed? "" : "displayNone"} >
        <a id="scrollUp" href="#top" style={{position: "fixed", zIndex: "1000"}}><i className="ti ti-arrow-up"></i></a>
      </div>
      <Footer languages={children.props.languages} navigation={menuList} />
    </div>


  );
}

export default DefaultLayout;
