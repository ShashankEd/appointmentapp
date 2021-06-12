import React, {useEffect, useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import { useSelector } from "react-redux";
interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
    state: {
        storeWhetherUserLoggedIn: {
            flag: boolean
        }
    }
}
const SplashHook: React.FC<props> = (props) =>{
    const [navigation, setNavigation] = useState(props.navigation);
    useEffect (() => {
        setTimeout(() => {
            navigation.navigate('HomeHook');
        },2000)
    },[])
    return (
        <View style={{ flex: 1, padding: 24,backgroundColor:'yellow'}}>
            <Text>Splash</Text>
        </View>
    )
}

export default SplashHook;