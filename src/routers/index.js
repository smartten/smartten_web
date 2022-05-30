import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ServicePost from "../pages/ServicesPost";
import Career from "../pages/Career";
import Solutions from "../pages/Solutions"
import ContactUs from "../pages/ContactUs";

const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/services/post",
    component: ServicePost,
  },
  {
    path: "/career",
    component: Career,
  },
  {
    path:"/solutions",
    component:Solutions,
  },
  {
    path:"/contact-us",
    component:ContactUs,
  }

  
  
];

export { publicRouter };
