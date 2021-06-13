import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {useSelector,shallowEqual } from "react-redux";
const FONT_FAMILY = 'Verdana';
interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
    checkWhetherAppointmentBooked: (payload:object) => any;
}
const  BookedAppointmentDetails: React.FC<props> = (props) => {
    const {navigation} = props;
    const checkWhetherAppointmentBookedResponse = useSelector((state:props)=> state.checkWhetherAppointmentBooked,shallowEqual);
    const {
        day,time,username,email,phonenumber
    } = checkWhetherAppointmentBookedResponse?.bookingDetails;

    const getTime = (day:number) => {
        let i =10;
        let result = '';
        while(i <=18) {
            if(i < 12) {
                if(day === i) {
                    result = `${i} AM-${i + 2} PM`;
                    break;
                }
            } else {
                if(day === i) {
                    result = `${i > 12 ? i - 12 : i} PM-${(i + 2 - 12)} PM`;
                    break;
                }
            }
            i = i+2;
        }
        return result;
    }
    const getDay =(day:number) => {
        return day === 1 ? 'Today' : ( day === 2 ? 'Tomorrow' : 'Day After Tomorrow')
    }
    return (
        <View style={styles.mainView}>
          <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>{`Hi ${username}, Your appointment has been booked for ${getDay(day)}, and the details are shown below: `}</Text>
            <Text style={styles.itemText}>{`Time - ${getTime(time)}`}</Text>
            <Text style={styles.itemText}>{`Email-  ${email}`}</Text>
            <Text style={styles.itemText}>{`Contact Number-  ${phonenumber}`}</Text>
          </View>
          
      </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
        marginTop: Dimensions.get('screen').width * 0.2,
    },
    titleText: {
        fontSize: 15,
        color: 'black',
        fontFamily: FONT_FAMILY,
        paddingBottom: Dimensions.get('screen').width * 0.1,
    },
    detailsContainer: {
    //    alignItems:'center'
    },
    itemText: {
        fontSize: 15,
        color: 'black',
        fontFamily: FONT_FAMILY,
        fontWeight:'bold',
        paddingBottom: Dimensions.get('screen').width * 0.05,
    },
});
export default BookedAppointmentDetails;