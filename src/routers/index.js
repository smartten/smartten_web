import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

import Career from "../pages/Career";
import Solutions from "../pages/Solutions"
import ContactUs from "../pages/ContactUs";

const publicRouter = [
  
  {
    path: "/about-us",
    component: AboutUs,
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
