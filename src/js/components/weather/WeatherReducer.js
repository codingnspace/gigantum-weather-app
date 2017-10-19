// import Immutable from 'immutable';
export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DECISION':
      return state.concat([action.result]);
    case 'RESET_DECISION':
      return [];
    default:
      return state;
  }
};
