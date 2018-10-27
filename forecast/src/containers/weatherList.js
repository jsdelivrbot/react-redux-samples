import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component {
  renderWeather(data) {
    const name = data.city.name;
    const { lat, lon } = data.city.coord;

    const temps = data.list.map(weather => weather.main.temp);
    const pressures = data.list.map(
      weather => weather.main.pressure
    );
    const humidities = data.list.map(
      weather => weather.main.humidity
    );

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K) </th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return {
    // weather: state.weather
    weather: weather
  };
};

export default connect(mapStateToProps)(WeatherList);
