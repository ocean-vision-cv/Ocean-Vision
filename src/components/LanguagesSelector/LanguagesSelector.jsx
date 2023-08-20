import i18next from "i18next";
import { useTranslation } from "react-i18next";
import './LanguagesSelector.css';

import { useState } from 'react';

const languages = [
  {
    code: 'pt',
    name: 'Português',
    country_code: 'pt'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  }
]

const LanguagesSelector = () => {

  const { t } = useTranslation()
  const [isDropDownVisible, setIsDropDownVisible] = useState(false)

  function updateLanguage(languageCode) {
    i18next.changeLanguage(languageCode)
  }

  function getCountryCode(languageName) {
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].name === languageName)
        return languages[i].country_code
    }
    return ""
  }

  function toggle(e) {
    setIsDropDownVisible(!isDropDownVisible)
  }
  function selectLanguage(languageCode) {
    updateLanguage(languageCode);
    setIsDropDownVisible(false)
  }

  return (
    <div className="languages-dropdown">
      <div className={"selected-language " + (isDropDownVisible ? "open" : "")} onClick={toggle}>
        <span className={`fi fi-${getCountryCode(t("language"))}`}></span>
        <p className="language-name" >{t("language")}</p>
      </div>
      {isDropDownVisible ? (languages.map(({ code, name, country_code }) => (
        <div key={country_code} className="language-item" onClick={() => selectLanguage(code)}>
          <span className={`fi fi-${country_code}`}></span>
          <p className="language-name">{name}</p>
        </div>)
        )
      ) : <></>
      }
    </div>

  )
}
export default LanguagesSelector

