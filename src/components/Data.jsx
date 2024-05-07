import React from "react";
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: null,
            message: ''
        };
    }

    render() {
        return (
            <div>
                <Form setMessage={message => this.setState({message})}
                      setWeatherInfo={weatherInfo => this.setState({weatherInfo})}/>
                <Weather weatherInfo={this.state.weatherInfo}/>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Data;
