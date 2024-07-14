import "./Ticket.css"
import React, { useState } from 'react'

export default function Ticket() {

    const [countriesData,setCountriesData] = useState({

        countriesData: {
            Iran: ["Tabriz","Tehran","Shiraz","Esfahan","Mashhad"],
            Turkey: ["Istanbul","Ezmir","Ankara"],
            US: ["Los Angles","San Diego","Chicago"]
        }
        
    })

    const [mainProvinceCities,setMainProvinceCities] = useState({
        mainProvinceCities: []
    })

    const selectHandling = (e) => {
        let mainCountry = e.target.value

        if(mainCountry === "SELECT"){
            setMainProvinceCities({
                mainProvinceCities: []
            })
        }else{
            let mainCountryCities = countriesData.countriesData[mainCountry]
            setMainProvinceCities({
                mainProvinceCities: mainCountryCities
            })
        }
    }

  return (
    <>
        <div className="container">
        <select className="select-box" onChange={(e) => selectHandling(e)}>
            <option className="option-box" value="SELECT">Select a country</option>
            <option className="option-box" value="Iran">Iran</option>
            <option className="option-box" value="Turkey">Turkey</option>
            <option className="option-box" value="US">United State</option>
        </select>
        <select className="select-box" >
            {mainProvinceCities.mainProvinceCities.length ?  mainProvinceCities.mainProvinceCities.map(city => (
                <option value={city}>{city}</option>
            )) : (
                <option value={"SELECT"}>Please select...</option>
            ) }
        </select>
        </div>
    </>
  )
}
