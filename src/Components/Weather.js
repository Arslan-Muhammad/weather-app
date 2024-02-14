import React, { Component } from 'react'
import Search from './Search';
import Result from './Result';
import axios from 'axios';
class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: "",
      lon: '',
      weatherData: null,
      city: '',
    };
  }
  onChangeHandler = (event) => {
    const name = event.target.name;
    if (name === 'city') {
      this.setState({
        city: event.target.value
      })
    }
    else if (name === 'lat') {
      this.setState({
        lat: event.target.value
      })
    }
    else if (name === 'lon') {
      this.setState({
        lon: event.target.value
      });
    }
  };
  locationHandler = () => {
    this.setState({
      lat: "",
      lon: '',
      weatherData: null,
      city: '',
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude
            })
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=55445239f3e669882a877a224e186fc6`)
              .then((res) => {
                this.setState({
                  city: res.data.name,
                  weatherData: res.data
                })
              })
              .catch((err) => {

              })
          }, 500)
        },
        (err) => { console.log(err); });
    } else {
      console.log('Location not available');
    }
  };
  render() {
    return (
      <div className='container pt-4' style={{ height: '500px' }}>
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          weatherData={this.state.weatherData}
          city={this.state.city}
          change={this.onChangeHandler}
          getlocation={this.locationHandler} />
        <Result weatherData={this.state.weatherData} />
      </div>
    )
  }
}

export default Weather
