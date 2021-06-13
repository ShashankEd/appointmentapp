import React, {useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
}
const SplashHook: React.FC<props> = (props) =>{
    const {navigation} = props;
    useEffect (() => {
        setTimeout(() => {
            navigation.navigate('HomeHook');
        },2000)
    },[])
    return (
        <View style={styles.mainView}>
            <Text style={styles.titleText}>Appointment Booking App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        justifyContent:'center',
        backgroundColor:'#DDDDDD',
        alignItems:'center'
    },
    titleText: {
        fontSize: Dimensions.get('screen').scale * 8, 
        fontWeight:'bold', 
        fontFamily: 'Verdana',
    },
  });


export default SplashHook;