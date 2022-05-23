import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Desc from "../Desc";
import Category from "../Category";
import  Service from "../Service";

import How from "../How";
import Client from "../Client";
import FeedBack from "../FeedBack"


import Blog from "../Blog";
import './style.css';
import News from "../News/News";
import Process from "../Process/Process";


function DefaultLayout({ children }) {
  return (
   
     <div>
      <Header />
      <Banner/>
      <Desc />
      
      <Category />
      <Service/>
      <News/>
      <Process />
      <How/>
      <Client />
      <FeedBack />
      <div className="layout__content-main">{children}</div>
      <Footer />
    </div>
   
    
  );
}

export default DefaultLayout;
