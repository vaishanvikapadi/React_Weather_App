

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const CLOUDY = "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY = "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD = "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherImage = () => {
        if (info.humidity > 64) {
            return RAINY;
        } else if (info.temp > 30) {
            return HOT;
        } else if (info.temp >= 15 && info.temp <= 30) {
            return CLOUDY;
        } else {
            return COLD;
        }
    };

    // const getWeatherIcon = () => {
    //     if (info.humidity > 64) {
    //         return <ThunderstormIcon />;
    //     } else if (info.temp > 30) {
    //         return <WbSunnyIcon />;
    //     } else if (info.temp >= 15 && info.temp <= 30) {
    //         return <WbSunnyIcon />;
    //     } else {
    //         return <AcUnitIcon />;
    //     }
    // };

    const getWeatherIcon = () => {
      if (info.humidity > 64) {
          return <ThunderstormIcon />;
      } else if (info.temp > 30) {
          return <WbSunnyIcon />;
      } else if (info.temp >= 15 && info.temp <= 30) {
          return <WbSunnyIcon />;
      } else if (info.temp < 15 && info.temp >= 0) {
          return <AcUnitIcon />;
      } else if (info.temp < 0) {
          return <AcUnitIcon />;
      }
  };
  
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={getWeatherImage()}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {getWeatherIcon()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <i>{info.weather}</i> feels Like : {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}


