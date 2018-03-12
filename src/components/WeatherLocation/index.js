import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location/';
import WeatherData from './WeatherData/';
import transformWeather from './../../services/transformWeather'
import './styles.css';
import {Preloader} from 'react-materialize';
//import { SUNNY } from './../../constants/weathers';

const url_root      = 'http://api.openweathermap.org/data/2.5/weather';
const url_key       = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_units     = 'metric';
class WeatherLocation extends Component { 
    constructor({city}){ 
        super();
        this.state = {
            city,
            data: null, //data1
        };
    };
    componentWillMount() {
        //this.handleUpdateClick();
        const {city} = this.state;
        const api_weather   = `${url_root}?q=${city}&appid=${url_key}&units=${url_units}`;
        fetch(api_weather).then( data => {  
            return data.json();
        }).then(weather_data => { 
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    };
    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city,data} = this.state;
        return (
            <div className="weather--location" onClick={onWeatherLocationClick}>
                <Location city={this.state.city} />
                { data ? 
                    <WeatherData data={this.state.data} /> : 
                    <Preloader size='big' color='green' />
                }
            </div>
        );
    }
};

WeatherLocation.propTypes = { 
    city : PropTypes.string,
    onWeatherLocationClick: PropTypes.func.isRequired,
}
export default WeatherLocation; 

/* BURBUJEO

1. Al dar click en cada WLocation debe abrir el reporte extendido
2. onclick a una funcion, funcion que sera al props
3. En el listado debe darnos un evento y dispararse
4. En el tag de weatherlocation debe al dar click llamar al evento, se usa una funcion
5. En el app debe alimentarse el envio


*/