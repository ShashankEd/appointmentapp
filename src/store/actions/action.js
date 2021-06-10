import {actionTypes} from '../actionTypes'
/**
* Action which will store the flag specifying whethere the user jas booked the appointment or not
* @param flag
*/
 export const checkWhetherAppointmentBooked = (bookedObj) => {
  return {
    type: actionTypes.IS_BOOKED,
    payload: bookedObj,
  };
 };