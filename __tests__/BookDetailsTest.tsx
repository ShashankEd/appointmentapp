import 'react-native';
import React from 'react';
import BookedAppointmentDetails from '../src/components/BookedAppointmentDetails';
import renderer, {create,act} from 'react-test-renderer'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { checkWhetherAppointmentBooked } from '../src/store/appReducers/checkWhetherAppointmentBooked';

//mock store
const sample = {
    checkWhetherAppointmentBookedResponse :{
        flag: false,
        bookingDetails: {
            day:0,
            time:0,
            username:'',
            email:'',
            phonenumber:''
        }
    }
}
// const store = createStore(checkWhetherAppointmentBooked,sample.checkWhetherAppointmentBookedResponse);

const navigation = {
    navigate: jest.fn()
}
//@ts-ignore
const tree = create(<BookedAppointmentDetails navigation={navigation}/>)
test('snapshot',() => {
    expect(tree).toMatchSnapshot()
});

//check if reducer has stored in the store properly
// test('status of store bookingDetails', () => {
//     expect(store.getState().bookingDetails).toEqual(sample.checkWhetherAppointmentBookedResponse.bookingDetails)
// });
