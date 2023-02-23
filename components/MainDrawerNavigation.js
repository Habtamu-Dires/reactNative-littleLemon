import React from "react";
import {createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import { View, StyleSheet } from "react-native";
import LittleLemonFooter from "./LittleLemonFooter";
import LittleLemonHeader from "./LittleLemonHeader";

const Drawer = createDrawerNavigator();

export default function MainDrawerNav() {
    return(
        <>
        <View style={styles.container}>
            <LittleLemonHeader />
            <Drawer.Navigator 
                useLegacyImplementation 
                initialRouteName="Login"
                >
                <Drawer.Screen name='Login' component={LoginScreen} />
                <Drawer.Screen name='Welcome' component={WelcomeScreen} />
            </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
            <LittleLemonFooter />
        </View>
        </>
        
    )
}


const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    footerContainer:{
       backgroundColor: '#333333'
    }
 })