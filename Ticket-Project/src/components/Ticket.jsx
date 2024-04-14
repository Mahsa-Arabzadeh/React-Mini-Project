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


  return (
    <div>
        
    </div>
  )
}
