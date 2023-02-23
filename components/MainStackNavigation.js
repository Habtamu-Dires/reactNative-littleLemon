import {View, Text, StyleSheet, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonFooter from './LittleLemonFooter';
import LittleLemonHeader from './LittleLemonHeader';
import WelcomeScreen from './WelcomeScreen';
import MenuItem from './MenuItems';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

export default function Main() {
   
   return(
      <>
         <View style={styles.container}>
            <LittleLemonHeader />
            <Stack.Navigator 
               initialRouteName='Login'>
               <Stack.Screen 
                  name="Login" component={LoginScreen}/>
               <Stack.Screen name='Welcome' component={WelcomeScreen} />
            </Stack.Navigator>
         </View>
         <View style={styles.footerContainer}>
            <LittleLemonFooter />
         </View>                  
      </>      
   )
   
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   footerContainer:{
      backgroundColor: '#333333'
   }
})

