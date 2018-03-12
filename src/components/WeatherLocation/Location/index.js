import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';

const Location = ({city}) => (
    <header className="wl--header" >
        <h3>{city}</h3>
    </header>
);

Location.propTypes = {
    city : PropTypes.string
}

export default Location;