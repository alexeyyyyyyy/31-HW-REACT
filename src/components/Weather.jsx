

const Weather = ({ setWeatherInfo }) => {
    const weatherData = {
        location: "Il, Rehovot",
        temp: 25,
        pressure: 700
    };

    const updateWeatherInfo = () => {
        setWeatherInfo(weatherData);
    };

    return (
        <div>
            <p>Location: {weatherData.location}</p>
            <p>Temp: {weatherData.temp}</p>
            <p>Pressure: {weatherData.pressure}</p>
            <button onClick={updateWeatherInfo}>Update Weather Info</button>
        </div>
    );
};

export default Weather;
