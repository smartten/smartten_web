import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import './style.css'



function MobileMenuItem( {data, languages, onClick}) {
    const [isActive, setIsActive] = useState(false)
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n]);
    console.log(data)



    return (

            <li  >
                {data.subMenu.length > 0 ?
                    <p onClick={() => setIsActive(!isActive)} className="mobileMenuItem-link">{data.lang[languages.lang]}
                        <i className="burger__menus-list-icon ti ti-angle-down"></i>
                    </p>

                    :

                    <Link onClick={onClick} to={data.linkUrl}>{data.lang[languages.lang]}
                    </Link>

                }
                    {(data.subMenu.length > 0 && isActive) &&

                        (<ul className="burger__menu-submenu">
                            {data.subMenu.map((item,index) => {
                                return (
                                    <li onClick={onClick} key={index}>
                                        <Link to={item.linkUrl} style={{color: "#323"}}>{item.lang[languages.lang]}</Link>
                                    </li>
                                )
                            })}
                        </ul>)
                    }
            </li>
    );
}

export default MobileMenuItem;
