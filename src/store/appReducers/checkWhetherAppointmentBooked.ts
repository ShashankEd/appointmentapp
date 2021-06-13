import { actionTypes } from "../actionTypes";

const initialState = {
    flag: false,
    bookingDetails: {}
};

export const checkWhetherAppointmentBooked = (state = initialState, action:any) => {
    switch (action.type) {
        case actionTypes.IS_BOOKED:
            return {
                ...state,
                flag : action.payload.flag,
                bookingDetails: action.payload.bookingDetails
            }
        default:
            return state
    }
};
