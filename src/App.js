import { useTranslation } from "react-i18next";
import i18next from "i18next"; 


const languages = [
  {
    code:'fr',
    name:"française",
    country_code:'fr'
  },
  {
    code:'en',
    name:"English",
    country_code:'gb'
  },
  {
    code:'tm',
    name:"தமிழ்",
    country_code:'tn'
  }
]

function changeLanCode(e){
  i18next.changeLanguage(e.target.value)
}

function App() {
  const { t } = useTranslation();

  let number_of_days = "Nithesh Kumar"
  return (
    <div className="App">
      <div style={{marginLeft:'80%'}}>
        <select onChange={changeLanCode}>
          <option selected hidden>Language</option>
         {languages.map(({code,name,country_code})=>(
          <option value={code}>{name}</option>
         ))}
        </select>

      </div>
     <h1>{t('welcome_message')}</h1>
    <p>{t('days_since_release',{number_of_days})}</p>
    </div>
  );
}

export default App;
