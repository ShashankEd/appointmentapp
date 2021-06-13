import {actionTypes} from '../actionTypes'
/**
* Action which will store the flag specifying whethere the user has booked the appointment or not
* @param bookedObj
*/
 export const checkWhetherAppointmentBooked = (bookedObj:object) => {
  return {
    type: actionTypes.IS_BOOKED,
    payload: bookedObj,
  };
 };