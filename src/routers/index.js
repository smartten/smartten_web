import AboutUs from "../pages/AboutUs";
import Career from "../pages/Career";
import Solutions from "../pages/Solutions"
import Team from "../pages/ServiceTeam";
import TestingAndAssurance from "../pages/TestingAndAssurance"
import CustomerCases from "../pages/CustomerCases";
import ServiceQualityAssurance from "../pages/TestingAndAssurance";
import ServiceCloudSolution from "../pages/ServiceCloudSolutions"

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
    path:"/services/team",
    component:Team,
  },
  {
    path:"/quality-assurance-and-testing",
    component: TestingAndAssurance
  },
  {
    path:"/customer-cases",
    component: CustomerCases
  },
  {
    path:"/services/quality-assurance-and-testing",
    component: ServiceQualityAssurance
  },
  {
    path:"/services/cloud-solutions",
    component: ServiceCloudSolution
  }
  

  
];

export { publicRouter };
