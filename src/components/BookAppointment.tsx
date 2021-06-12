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

interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
}
const  BookAppointment: React.FC<props> = (props) => {

    const {navigation}  = props;
    const [day, setDay] = useState(0);
    const [time,setTime] = useState(0); // 10 12 2 4 6 

    //considering the standard appointment timings between 10 AM to 6 PM
    const get2HourTimings = () => {
        let i =10;
        let output = [];
        while(i <= 18) {
            if(i<12) {
                output.push(
                    <TouchableHighlight style={styles.touchable} onPress={() => setTime(i)}>
                        <Text style={styles.titleText}>{`${i} AM-${i+2} PM`}</Text>
                    </TouchableHighlight>
                )
            } else {
                output.push(
                    <TouchableHighlight style={styles.touchable} onPress={() => setTime(i)}>
                        <Text style={styles.titleText}>{`${i>12 ? i-12 : i} PM-${(i+2 - 12)} PM`}</Text>
                    </TouchableHighlight>
                )
            }
            i = i+2;    
        }
        return output;
    }
    return (
        <ScrollView style={styles.mainView}>
          <View style={{flexDirection:'column',alignItems:'center',paddingBottom:Dimensions.get('screen').width *0.2}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Book an appointment</Text>
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
              {day != 0  && <View style={styles.time}>
                  {
                      get2HourTimings()
                  }
              </View>}
          </View>
          
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainView: { 
        flex: 1, 
        marginHorizontal : Dimensions.get('screen').width * 0.05
    },
    bookForm: {
        flex: 1,
        justifyContent:'flex-start'
    },
    day: {
        // flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom: Dimensions.get('screen').width * 0.2
    },
    touchable: {
        backgroundColor:'#DDDDDD',
        padding:10,
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 10,
        opacity:0.7,
    },
    touchableSelected: {
        backgroundColor:'#DDDDDD',
        padding:10,
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'blue',
    },
    titleText: {
        fontSize:14, 
        fontWeight:'bold', 
        color:'black',
        fontFamily: 'Times new roman',
    },
    time: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between',
    }
  });

export default BookAppointment;