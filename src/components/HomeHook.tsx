import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    PixelRatio
} from 'react-native';

interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
    isChecked: boolean
}
const  HomeHook: React.FC<props> = (props) => {

    const {navigation} = props;
    
    return (
        <View style={styles.mainView}>
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('BookAppointment')}>
              <Text style={styles.titleText}>Book Appointment</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        padding: Dimensions.get('screen').width *0.2,
        justifyContent:'center'
    },
    titleView: {
        flexDirection:'column',
        alignItems:'center',paddingBottom:Dimensions.get('screen').width *0.2
    },
    titleText: {
        fontSize:20, 
        fontWeight:'bold', 
        color:'black',
        fontFamily: 'Times new roman'
    },
    touchable: {
        backgroundColor:'#DDDDDD',
        padding:10,
        alignItems:'center'
    }
  });

export default HomeHook;