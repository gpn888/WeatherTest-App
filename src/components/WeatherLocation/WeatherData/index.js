import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import './styles.css';

const WeatherData = ({data}) => {
    const {temperature, weatherState, humidity, wind} = data;
    return (
    <article className="wl--data">
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </article>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature:    PropTypes.number.isRequired,
        weatherState:   PropTypes.string,
        humidity:       PropTypes.number.isRequired,
        wind:           PropTypes.number.isRequired,
    }),
}

export default WeatherData;