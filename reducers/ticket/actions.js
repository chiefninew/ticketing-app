import Types from './types';

const { SELECT_TICKET } = Types;

export const selectTicket = (ticket) => {
  return {
    type: SELECT_TICKET,
    payload: ticket
  }
}