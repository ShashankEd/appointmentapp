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
    PixelRatio,
    BackHandler
} from 'react-native';

interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
    isChecked: boolean
}
const  HomeHook: React.FC<props> = (props) => {

    const {navigation} = props;
    //If user presses hardware back button more than once, then following method will show alert, and on clicking OK it will signout 
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want Exit the app?", [
        {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
         return () => backHandler.remove();
    },[])
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
        fontSize:Dimensions.get('screen').scale * 6, 
        fontWeight:'bold', 
        color:'black',
        fontFamily: 'Verdana'
    },
    touchable: {
        backgroundColor:'#DDDDDD',
        padding:10,
        alignItems:'center'
    }
  });

export default HomeHook;