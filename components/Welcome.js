import React from "react";
import { View, Image, ScrollView, StyleSheet, Text, Pressable } from "react-native";



export default function Welcome({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image 
                    style={styles.image}
                    source={require('../img/little-lemon-logo.png')}
                    resizeMode={'contain'}
                />
                <Text style={styles.regularText}>
                    Little Lemon, your local Mediterranean Bistro
                </Text>
            </View>
            <Pressable 
                style={styles.button}
                onPress={()=> navigation.navigate('Subscribe')}
                >
                <Text style={styles.buttonText}>NewsLetter</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    innerContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },  
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        margin: 20
    },
    regularText:{
        fontSize: 24,
        margin: 20,
        textAlign: 'center',
        paddingTop: 40
    },
    button: {
        borderRadius: 12,
        backgroundColor: '#0c3819',
        margin: 18,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        padding: 10,
       
    }
})