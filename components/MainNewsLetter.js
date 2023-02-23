import React from "react";
import  { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, StyleSheet } from "react-native";
import Welcome from "./Welcome";
import SubscribeScreen from "./SubscribeScreen";

const Stack = createNativeStackNavigator();


export default function MainNewsLetter() {
    return(
        <View style={styles.container}>
            <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='Subscribe' component={SubscribeScreen}/>
            </Stack.Navigator>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})
