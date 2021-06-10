import { actionTypes } from "../actionTypes";

const initialState = {
    flag: false,
};

export const checkWhetherAppointmentBooked = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_BOOKED:
            return {
                ...state,
                flag : action.payload.flag,
            }
        default:
            return state
    }
};
