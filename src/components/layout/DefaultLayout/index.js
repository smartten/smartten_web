import Header from "../Header";
import Footer from "../Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="layout__content-main">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
