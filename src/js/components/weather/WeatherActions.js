import {getApiData} from 'js/utils/api';
import {testUrl} from 'js/config';

export function getWeather() {
  return (dispatch, getState) => {
    // const something = api();
    fetch(testUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };
}
