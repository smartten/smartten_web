import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function Header() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("vi");

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n]);
  const changeLanguageVI = () => {
    i18n.changeLanguage("vi");
    setCurrentLang("vi");
  };

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    setCurrentLang("en");
  };

  return (
    <>
      <button onClick={changeLanguageVI}>VI</button>
      <button onClick={changeLanguageEN}>EN</button>
    </>
  );
}

export default Header;
