import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <aside className="wl--data-item wl--data-info">
        <p><strong>Humedad: </strong>{`${humidity} %`}</p>
        <p><strong>Viento: </strong>{`${wind} m/s`}</p>
    </aside>

);

WeatherExtraInfo.propTypes = {
    humidity    : PropTypes.number.isRequired,
    wind        : PropTypes.number.isRequired,
}

export default WeatherExtraInfo;