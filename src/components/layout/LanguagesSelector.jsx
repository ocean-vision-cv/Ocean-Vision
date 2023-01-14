import './LanguagesSelector.css'
import { useTranslation} from "react-i18next";
import i18next from "i18next";

import { useState } from 'react';

const languages = [
  {
    code:'pt',
    name:'Português',
    country_code:'pt'
  },
  {
    code:'en',
    name:'English',
    country_code:'gb'
  }
]
const LanguagesSelector = () => {
  function updateLanguage(languageCode){
    console.log(languageCode)
    i18next.changeLanguage(languageCode)

  }
  function getCountryCode(languageName){
    for (let i = 0; i < languages.length; i++) {
      if(languages[i].name === languageName){
        return languages[i].country_code
      }
    }
    return ""
  }
  const {t} = useTranslation()
  const [isDropDownVisible, setIsDropDownVisible]= useState(false)
  return (
  <div className="languages-dropdown">
    <div className={"selected-language " + (isDropDownVisible ? "open" : "")} onClick={e=>{setIsDropDownVisible(!isDropDownVisible)}}>
    <span className={`fi fi-${getCountryCode(t("language"))}`}></span>{t("language")}
    </div>
   {
    isDropDownVisible ? (
      languages.map(
        ({code, name ,country_code})=>(
        <div key={country_code} className="language-item" onClick={e=>{updateLanguage(code); setIsDropDownVisible(false)}}>
          <span className={`fi fi-${country_code}`}></span>{name}
        </div>  
       ))
    ):<></>
   }
  </div>

  )
}
export default LanguagesSelector

// <select className='language-selector' onChange={(e)=>{updateLanguage(e.target.value)}}>
    //  {languages.map(
    //   ({code, name ,country_code})=>(
    //   <option key={country_code} value={code} selected={t("language") === name}>
    //     {name}
    //   </option>
    //   // <span className={`fi fi-${country_code}`}></span>
    //  ))}
    // </select> 