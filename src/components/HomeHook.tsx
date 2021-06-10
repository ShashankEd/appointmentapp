import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Dimensions
} from 'react-native';

interface props {
    navigation: {
        navigate: (routeName: string) => void;
    };
    isChecked: boolean
}
const  HomeHook: React.FC<props> = (props) => {

    const [navigation, setNavigation] = useState(props.navigation);
    const [title, setTitle] = useState('');
    return (
        <View style={{ flex: 1, padding: Dimensions.get('screen').width *0.2 }}>
          <View style={{flexDirection:'column',alignItems:'center',paddingBottom:Dimensions.get('screen').width *0.2}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Add and appointment</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('dfd')}>
              <Text>Add Appointments</Text>
          </TouchableOpacity>
      </View>
    )
}

export default HomeHook;