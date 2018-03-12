import React from 'react';
import WeatherIcons from 'react-weathericons';
import {  
    CLOUDY, 
    SUNNY, 
    SNOW, 
    RAIN,  
    THUNDER,
    DRIZZLE } from './../../../constants/weathers';
import PropTypes from 'prop-types';

const stateToIconName = weatherState => {
    switch (weatherState) { 
        case CLOUDY:
            return "cloudy";
        case SUNNY:
            return "day-sunny";
        case SNOW:
            return "snow";
        case RAIN:
            return "rain"; 
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "volcano"; 
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="4x" />);
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <aside className="wl--data-item wl--data-temp">
        {getWeatherIcon(weatherState)} 
        <span>{`${temperature} °C`}</span>
    </aside>

);

WeatherTemperature.propTypes= {
    temperature:    PropTypes.number.isRequired,
    WeatherState:   PropTypes.string,
}
export default WeatherTemperature;