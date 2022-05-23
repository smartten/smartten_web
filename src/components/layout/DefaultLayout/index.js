import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import { FaAngleUp } from "react-icons/fa"
import Desc from "../Desc";
import Category from "../Category";
import  Service from "../Service";

import How from "../How";
import Client from "../Client";
import FeedBack from "../FeedBack";


import './style.css';
import News from "../News/News";
import Process from "../Process/Process";


function DefaultLayout({ children }) {
  function handleSrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div>
      <Header languages={children.props.languages} />
      <div className="layout__content-main">{children}</div>
      <div onClick={handleSrollTop} className="layout__scrollTop">
        <FaAngleUp  />
      </div>

        <Banner/>
        <Desc />
        <Category />
        <Service/>
        <News/>
        <Process />
        <How/>
        <Client />
        <FeedBack />
      <Footer languages={children.props.languages} />
    </div>


  );
}

export default DefaultLayout;
