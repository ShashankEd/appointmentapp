
 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   BackHandler,
   Alert,
 } from 'react-native';
 import 'react-native-gesture-handler';
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/integration/react';
 //@ts-ignore
 import {get as _get} from 'lodash';
 import {store, persistor} from './src/store/configureStore';
 import { LogBox } from 'react-native';
 LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
 LogBox.ignoreAllLogs();//Ignore all log notifications
 
import HomeHook from './src/components/HomeHook';
import BookedAppointmentDetails from './src/components/BookedAppointmentDetails';
import BookAppointment from './src/components/BookAppointment';
import SplashHook from './src/components/SplashHook';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
  function App() {
    
    useEffect(() => {
    })
    
   return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.mainContainer}>
           <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashHook'>
              <Stack.Screen name="SplashHook" component={SplashHook} options={{header: ()=> null}}/>
              <Stack.Screen name="HomeHook" component={HomeHook} options={{ title: '' ,header: ()=> null }}/>
              <Stack.Screen name="BookAppointment" component={BookAppointment}  options={{header:  ()=> null}}/>
              <Stack.Screen name="BookedAppointmentDetails" component={BookedAppointmentDetails} options={{ title: '' }}/>
            </Stack.Navigator>
           </NavigationContainer>
           </SafeAreaView>
       </PersistGate>
     </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   mainContainer: {
    flex: 1,
    justifyContent: 'center',
   }
 });
 
 export default App;
 