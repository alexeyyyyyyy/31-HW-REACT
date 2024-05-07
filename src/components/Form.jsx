// Form.jsx

import React, { useState } from 'react';


const Form = ({ setMessage }) => {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        setMessage(`Getting weather for ${city}...`);


        setWeatherInfo({
            location: city,
            temp: 25,
            pressure: 700
        });

        e.currentTarget.city.value = '';
    }

    return (
        <form onSubmit={getCity}>
            <input type={'text'} name={'city'} placeholder={'Enter Your city'} />
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;
