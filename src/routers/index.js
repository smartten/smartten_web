import AboutUs from "../pages/AboutUs";
import Career from "../pages/Career";
import Solutions from "../pages/Solutions"
import ContactUs from "../pages/ContactUs";
import Team from "../pages/ServiceTeam";
import TestingAndAssurance from "../pages/TestingAndAssurance"

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
  },
  {
    path:"/services/team",
    component:Team,
  },
  {
    path:"/services/quality-assurance-and-testing",
    component: TestingAndAssurance
  }
  
  
];

export { publicRouter };
