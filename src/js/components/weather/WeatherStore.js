import {weatherReducer} from 'js/components/weather/WeatherReducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {compose} from 'recompose';

const rootReducer = combineReducers({
  form: formReducer,
  weatherReducer
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const weatherStore = createStore(rootReducer, {}, enhancers);
