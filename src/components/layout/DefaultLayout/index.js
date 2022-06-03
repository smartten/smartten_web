
import Header from "../Header";
import Footer from "../Footer";
import './style.css';



function DefaultLayout({ children, menuList }) {
  
  function handleSrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <div>
      <Header languages={children.props.languages} navigation={menuList} />
      <div className="layout__content-main">{children}</div>
      <div onClick={handleSrollTop} className="layout__scrollTop">
        <i className="fa-solid fa-angle-up"></i>
      </div>
      <Footer languages={children.props.languages} navigation={menuList} />
    </div>


  );
}

export default DefaultLayout;
