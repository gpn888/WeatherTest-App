import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log('ejecuta');
        onSelectedLocation(city);
    }
    const strToComponent = cities => (
        cities.map( city => (
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={
                    () => handleWeatherLocationClick(city)
                } />)
        )
    );

    return (
        <div>
            {strToComponent(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;

/*

en map se necesita mayor eficiencia y cada componenete necesita ser individual
para eso se usa un key
1) cities.map( (city, index) => (<WeatherLocation key={index} city={city} />))
2) el problema es que el index puede variar la posicion, la city siempre sera unica
Toda key debe ser una propiedad unica


*/