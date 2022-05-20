import Header from "../Header";
import Footer from "../Footer";
import { FaAngleUp } from "react-icons/fa"
import './style.css'

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
      <Footer languages={children.props.languages} />
    </div>
  );
}

export default DefaultLayout;
