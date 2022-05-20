import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Post from "../pages/Post";

const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path:"/about-us",
    component: AboutUs,
  },
  {
    path:"/blog",
    component: Blog,
  },
  {
    path:"/blog/post/:blogIndex",
    component:Post,

  }
  
];

export { publicRouter };
