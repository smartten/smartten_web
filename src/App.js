import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import { useTranslation } from "react-i18next";

import { publicRouter } from "./routers";
import languageData from "./config/translation";
import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  const { i18n } = useTranslation();

  const [languages, setLanguages] = useState(languageData.en);

  useEffect(() => {
    if (i18n.language === "en") {
      setLanguages(languageData.en);
    } else {
      setLanguages(languageData.vi);
    }
  }, [i18n.language]);

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
              path="*"
              element={<NotFound />}
            />
          </Routes>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
