import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path:"/about-us",
    component: AboutUs,
  }
];

export { publicRouter };
