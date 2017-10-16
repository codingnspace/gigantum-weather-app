// import {loadCSS} from 'js/utils/loaders';
import App from 'js/components/App';
import {weatherStore} from 'js/components/weather/WeatherStore';
import Dom from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
//- Get webpack to extract this and use it to generate critical.css
//- For production, config/inline-style.js will inline this into html via html-webpack-plugin
import 'css/critical.scss';
import 'css/app.scss';


//- Lazy load esri css

// Apply any default configurations here if necessary

// Initialize the app
const reactMountPoint = document.getElementById('react-mount');
Dom.render(
  <Provider store={weatherStore}>
    <App />
  </Provider>, reactMountPoint);
