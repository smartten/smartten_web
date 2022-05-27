import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import { publicRouter } from "./routers";
import languageData from "./config/translation";
import "./App.css";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import blogApi from './api/blogApi'


function App() {
  const { i18n } = useTranslation();

  const [languages, setLanguages] = useState(languageData.en);

  const [posts, setPosts] = useState([])

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
  

  return (
    <div className="App">
      <Router>
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
                    <Layout>
                      <Page languages={languages} />
                    </Layout>
                  }
                    />
                  );
                })}
                <Route
                  path="/blog"
                  element={
                    <DefaultLayout>
                      <Blog postsData={posts} languages={languages} />
                    </DefaultLayout>
                  }
                />
                <Route 
                  path="/blog/post/:blogIndex"
                  element={
                    <DefaultLayout>
                      <BlogPost postsData={posts} languages={languages} />
                    </DefaultLayout>
                  }
                >
                </Route>
                <Route
                  path="*"
                  element={<NotFound />}
                >

                </Route>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
