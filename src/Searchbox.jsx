import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';
export default function Searchbox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d22efaeb4f21651797e7f7bb66e433a9";

//     let getWeatherInfo=async ()=>{
//         try{
//             let respons=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//         let jsonResponse=await respons.json();
//         // console.log(jsonResponse);
//         let Result={
//             city:city,
//             temp:jsonResponse.main.temp,
//             tempMin:jsonResponse.main.temp_min,
//             tempMax:jsonResponse.main.temp_max,
//             humidity:jsonResponse.main.humidity,
//             feelsLike:jsonResponse.main.feels_like,
//             weather:jsonResponse.weather[0].description,
//         }
//         console.log(Result);
//         return Result;
//     }catch(err){
//         throw err;
//     }
//  };

const getWeatherInfo = async () => {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();

        const result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        console.log(result);
        return result;
    } catch (err) {
        console.error('Error fetching weather data:', err);
        throw err;
    }
};


let handleChange=(event)=>{
    setCity(event.target.value);
}
let handleSubmit=async (event)=>{
    try{
        event.preventDefault();
    console.log(city);
    setCity("")
   let newInfo=await getWeatherInfo();
   updateInfo(newInfo);
}
catch(err){
    setError(true);
}
    
}
    return(
        <div className='SearchBox'>
            {/* <h3>Search For the Weather </h3> */}
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city"
             label="City Name"
              variant="outlined" 
               required 
               value={city}
               onChange={handleChange}

               />
            {/* </Button> */}
            <br  />
            <br  />
                <Button variant="contained" type="submit" endIcon={<SendIcon />} >
                Search
            </Button>
            {error && <p style={{color:'red'}}>No such Place Exists!!</p>}
            </form>

        </div>
    )
}