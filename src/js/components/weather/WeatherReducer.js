// import Immutable from 'immutable';
export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
