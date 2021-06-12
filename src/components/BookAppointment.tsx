import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    ScrollView
} from 'react-native';

const FONT_FAMILY = 'Verdana';
interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
}
const BookAppointment: React.FC<props> = (props) => {

    const { navigation } = props;
    const [day, setDay] = useState(0);
    const [time, setTime] = useState(0); // 10 12 2 4 6 
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    //considering the standard appointment timings between 10 AM to 6 PM
    const get2HourTimings = () => {
        let i = 10;
        let output = [];
        while (i <= 18) {
            if (i < 12) {
                output.push(
                    <TouchableHighlight style={styles.timeTouchable} onPress={() => setTime(i)}>
                        <Text style={styles.titleText}>{`${i} AM-${i + 2} PM`}</Text>
                    </TouchableHighlight>
                )
            } else {
                output.push(
                    <TouchableHighlight style={styles.timeTouchable} onPress={() => setTime(i)}>
                        <Text style={styles.titleText}>{`${i > 12 ? i - 12 : i} PM-${(i + 2 - 12)} PM`}</Text>
                    </TouchableHighlight>
                )
            }
            i = i + 2;
        }
        return output;
    }

    const keepBookDisabled = () => {
        let result = false;
        if(day > 0 && time > 0 && username.length && email.length&& phonenumber.length) {
            result = true;
        }
        return result;
    }
    //here store the user's selection in the redux store 

    const handleSubmit = () => {

    }
    return (
        <ScrollView style={styles.mainView}>
            <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom: Dimensions.get('screen').width * 0.2 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Book an appointment</Text>
            </View>
            <View style={styles.bookForm}>
                <View style={styles.day}>
                    <TouchableHighlight style={day === 1 ? styles.touchableSelected : styles.touchable} onPress={() => setDay(1)}>
                        <Text style={styles.titleText}>Today</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={day === 2 ? styles.touchableSelected : styles.touchable} onPress={() => setDay(2)}>
                        <Text style={styles.titleText}>Tomorrow</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={day === 3 ? styles.touchableSelected : styles.touchable} onPress={() => setDay(3)}>
                        <Text style={styles.titleText}>Day After Tomorrow</Text>
                    </TouchableHighlight>
                </View>
                {day != 0 && <View style={styles.time}>
                    {
                        get2HourTimings()
                    }
                </View>}
                {day > 0 && <View style={styles.user}>
                    <TextInput
                        style={styles.username}
                        defaultValue={username}
                        onChangeText={(text) => setUserName(text)}
                        placeholder={`Enter username`}
                    />
                    <TextInput
                        style={styles.email}
                        defaultValue={email}
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                        placeholder={`Enter email`}
                    />
                    <TextInput
                        style={styles.phonenumber}
                        defaultValue={phonenumber}
                        keyboardType="phone-pad"
                        onChangeText={(text) => setPhoneNumber(text)}
                        placeholder={`Enter phone number`}
                    />
                </View>}
                <TouchableHighlight 
                    style={keepBookDisabled() ?  styles.book : styles.bookDisabled}
                    disabled={keepBookDisabled() ? false : true} 
                    onPress={() => handleSubmit()}>
                        <Text style={styles.titleText}>Book</Text>
                </TouchableHighlight>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginHorizontal: Dimensions.get('screen').width * 0.05
    },
    bookForm: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    day: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: Dimensions.get('screen').width * 0.2
    },
    touchable: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        opacity: 0.7,
    },
    touchableSelected: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'blue',
    },
    timeTouchable: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: Dimensions.get('screen').width * 0.3,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        opacity: 0.7,
        marginBottom: Dimensions.get('screen').width * 0.05,
        alignSelf: 'center'
    },
    timeTouchableSelected: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: Dimensions.get('screen').width * 0.3,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'blue',
        marginBottom: Dimensions.get('screen').width * 0.05,
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: FONT_FAMILY,
    },
    time: {
    },
    user: {
    },
    username: {
        height: Dimensions.get('screen').width * 0.05,
        width: Dimensions.get('screen').width * 0.4,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: FONT_FAMILY,
        marginBottom: Dimensions.get('screen').width * 0.05,
    },
    email: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: FONT_FAMILY,
        marginBottom: Dimensions.get('screen').width * 0.05,
    },
    phonenumber: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: FONT_FAMILY,
    },
    book: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: FONT_FAMILY,
        marginBottom: Dimensions.get('screen').width * 0.05,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor:'yellow'
    },
    bookDisabled: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: FONT_FAMILY,
        marginBottom: Dimensions.get('screen').width * 0.05,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor:'grey'
    }
});

export default BookAppointment;