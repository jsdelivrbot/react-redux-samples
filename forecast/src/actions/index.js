import axios from 'axios';

import config from '../../config';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  config.WEATHER_API_KEY
}`;

// Action Creator for Making OpenWeather API Requests
export const fetchWeather = city => {
  const forecastURL = `${rootURL}&q=${city},us`;

  const req = axios.get(forecastURL);

  return {
    type: FETCH_WEATHER,
    payload: req
  };
};
