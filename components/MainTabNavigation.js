import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./LittleLemonHeader";
import LittleLemonFooter from "./LittleLemonFooter";

const Tab = createBottomTabNavigator();

export default function MainTabNav () {
    return(
       <>
       <View style={styles.container}>
            <LittleLemonHeader />
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({color, size }) => {
                        let iconName;
                        if(route.name === 'Login') {
                            iconName = 'login' 
                        } else if(route.name === 'Welcome') {
                            iconName = 'home'
                        }
                        return <AntDesign name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'gray'
                })}
                >
                <Tab.Screen name='Login' component={LoginScreen}/>
                <Tab.Screen name='Welcome' component={WelcomeScreen}/>
            </Tab.Navigator>        
       </View>
       <View style={styles.footerContainer}>
         <LittleLemonFooter />
       </View>        
       </> 
        
    );
}


const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    footerContainer:{
       backgroundColor: '#333333'
    }
 })