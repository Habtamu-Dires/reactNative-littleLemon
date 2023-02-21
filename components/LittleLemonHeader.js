import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}> Little Lemon </Text>
        </View>
    )
} 

const headerStyles = StyleSheet.create({
    container: { 
        flex: 0.1,
        backgroundColor: '#EE9972', 
        alignItems: 'center'
    },
    headerText:{
        paddingTop: 40, 
        fontSize: 30, 
        color: 'black'
    }
})