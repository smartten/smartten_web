import { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import { publicRouter } from "./routers";
import languageData from "./config/translation";
import "./App.css";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import blogApi from './api/blogApi'
import Services from "./pages/Services";
import Home from "./pages/Home";
import ServicesPost from "./pages/ServicesPost";

function App() {
  const { i18n } = useTranslation();

  const [languages, setLanguages] = useState(languageData.en);

  const [posts, setPosts] = useState([])

  const [services, setServices] = useState([])

  const [menus, setMenus] = useState([])


  const ScrollTop = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  

  useEffect(() => {
    if (i18n.language === "en") {
      setLanguages(languageData.en);
    } else {
      setLanguages(languageData.vi);
    }
  }, [i18n.language]);

  useEffect(() => {
    async function getPost(){
      let postsData = await blogApi.getBlogs('blog')
      let filteredPosts = postsData.filter(post => post.active === true)
      setPosts(filteredPosts)
      return postsData
    }
    getPost()
  },[])

  useEffect(() => {
    async function getServices(){
      let servicesData = await blogApi.getServices('service')
      let filteredServices = servicesData.filter(service => service.active === true)
      setServices(filteredServices)
      return filteredServices
    }
    getServices()
  },[])
  

  useEffect(() => {
    async function getMenus(){
      let menuData = await blogApi.getMenus('menu')
      // let filteredMenus = menuData.filter(menu => menu.active === true)
      setMenus(menuData)
      return menuData
    }
    getMenus()
  },[])
  

  return (
    <div className="App">
      <Router>
        <ScrollTop>
          <div>
            <Routes>
              {publicRouter.map((route, index) => {
                const Page = route.component;
                const Layout = DefaultLayout;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout menuList={menus}>
                        <Page languages={languages} />
                      </Layout>
                    }
                      />
                    );
                  })},
                  <Route
                    path="/"
                    element={
                      <DefaultLayout menuList={menus}>
                        <Home postsData={posts} servicesData={services} languages={languages} />
                      </DefaultLayout>
                    }
                  />
                  <Route
                    path="/services"
                    element={
                      <DefaultLayout menuList={menus}>
                        <Services servicesData={services} languages={languages} />
                      </DefaultLayout>
                    }
                  />
                  <Route
                    path="/services/post/:serviceIndex"
                    element={
                      <DefaultLayout menuList={menus}>
                        <ServicesPost servicesData={services} languages={languages} />
                      </DefaultLayout>}
                  />
                  <Route
                    path="/blog"
                    element={
                      <DefaultLayout menuList={menus}>
                        <Blog postsData={posts} languages={languages} />
                      </DefaultLayout>}
                  />
                  <Route 
                    path="/blog/post/:blogIndex"
                    element={
                      <DefaultLayout menuList={menus}>
                        <BlogPost postsData={posts} languages={languages} />
                      </DefaultLayout>}
                  >
                  </Route>
                  <Route
                    path="*"
                    element={<NotFound />}
                  >
                  </Route>
            </Routes>
          </div>
        </ScrollTop>
      </Router>
    </div>
  );
}

export default App;
