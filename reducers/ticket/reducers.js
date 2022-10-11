import Types from './types';
import InitialState from './initialState';

const { SELECT_TICKET } = Types;

const ticket = (state = InitialState, action = {}) => {
  switch(action.type) {
    case SELECT_TICKET: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default ticket;