import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Post from "../pages/BlogPost";
import Services from "../pages/Services";
import ServicePost from "../pages/ServicesPost";
import Career from "../pages/Career";
import Solutions from "../pages/Solutions"

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
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/post/:blogIndex",
    component: Post,
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
  }
  
];

export { publicRouter };
