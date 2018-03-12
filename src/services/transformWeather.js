import {  
    CLOUDY, 
    SUNNY, 
    SNOW, 
    RAIN,  
    THUNDER,
    DRIZZLE } from './../constants/weathers';

const getWeatherState = weather => {
    const {id} = weather[0];
    if (id<300){
        return THUNDER;
    }else if (id<400) {
        return DRIZZLE;
    }else if (id<600) {
        return RAIN;
    }else if (id<700) {
        return SNOW;
    }else if (id===800){
        return SUNNY;
    }else {
        return CLOUDY;
    }
}
const transformWeather = (weather_data) => {
    const {weather} = weather_data;
    const {temp, humidity} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather); 

    const data = {
        humidity,
        weatherState,
        temperature : temp,
        wind: speed,
    };
    return data;
}

export default transformWeather;