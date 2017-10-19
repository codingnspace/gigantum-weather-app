import {buildApiUrl, weekDays } from 'js/config';

export function storeDecision(result) {
  return {
    type: 'STORE_DECISION',
    result
  };
}

export function resetDecision() {
  return {
    type: 'RESET_DECISION'
  };
}

export function getWeather(formData) {
  return (dispatch) => {
    return weekDays.map((dayWithOffset) => {
      const apiUrl = buildApiUrl(dayWithOffset.dateHash);
      fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const morningCommute = response.hourly && response.hourly.data[8];
        const eveningCommute = response.hourly && response.hourly.data[17];
        // When the any of the user sumbitted conditions exceed the weather conditions in the evening
        // or morning set decision for that day as 'metro'
        if ((morningCommute && eveningCommute) && morningCommute.temperature < formData.minTemp
            || morningCommute.temperature > formData.maxTemp
            || (morningCommute.precipProbability > (formData.maxRain / 100) && morningCommute.precipType === 'rain')
            || eveningCommute.temperature < formData.minTemp
            || eveningCommute.temperature > formData.maxTemp
            || (eveningCommute.precipProbability > (formData.maxRain / 100) && morningCommute.precipType === 'rain')) {
          return dispatch(storeDecision({
            day: dayWithOffset.day,
            decision: 'metro',
            idx: dayWithOffset.idx
          }));
        } else {
          return dispatch(storeDecision({
            day: dayWithOffset.day,
            decision: 'bike',
            idx: dayWithOffset.idx
          }));
        }
      })
      .catch((error) => {
        throw error;
      });
    });
  };
}
