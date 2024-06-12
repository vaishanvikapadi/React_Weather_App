import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WheatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"NASHIK",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.03,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:'center'}}>
            <h2>Wheather App By VK</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}