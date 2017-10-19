import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { decideCommuteForDay } from 'js/components/weather/WeatherActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

// This is not yet working
describe('decideCommuteForDay action', () => {

  it('calls request and success actions if the fetch response was successful', () => {
  const store = mockStore({});
  const mockResponse = {
    hourly: {
      data: [
        {
          precipProbability: 0,
          precipType: 'rain',
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          precipType: 'rain',
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        },
        {
          precipProbability: 0,
          temperature: 22.8
        }
      ]
    }
  };

  fetchMock.get('*', mockResponse);

  const userCommuteConditions = {
    minTemp: 45,
    maxTemp: 70,
    maxRain: 60
  };
  const dayData = {
    day: 'Monday',
    idx: 0,
    dateHash: '2017-10-19T00:00:00'
  };
  return store.dispatch(decideCommuteForDay(userCommuteConditions, dayData))
    .then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions.length).toBe(1);
      expect(expectedActions).toContainEqual({type: 'STORE_DECISION'}, {
        decision: 'metro',
        idx: 0,
        day: 'Monday'
      });
    });
  });
  fetchMock.restore();
});
