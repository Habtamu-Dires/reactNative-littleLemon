import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text , Image, TextInput, Pressable} from "react-native";
import { validateEmail } from "../utils";
   
      

export default function SubscribeScreen() {
    const [email, onChangeEmail] = useState('');
    const [subscribe, onChangeSubscribe] = useState(false);
    return(
        <ScrollView style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../img/little-lemon-logo-grey.png')}
                resizeMode={'contain'}
            />
            <Text style={styles.regularText}>
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={onChangeEmail}
                keyboardType={'email-address'}
                placeholder={'Type your email'}
            />
             <Pressable 
                style={[styles.button,
                    validateEmail(email)? {backgroundColor: '#0c3819'}: {backgroundColor: 'gray'}
                ]
                }
                disabled={!validateEmail(email)}
                onPress={()=> {
                    onChangeSubscribe(true);
                    Alert.alert('Thank you for Subscribing, \n stay tuned!')}
                }
                >
                <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>   
                  
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginVertical: 28
    },
    regularText:{
        fontSize: 24,
        margin: 10,
        textAlign: 'center'
    },
    input:{
        height: 40,
        padding: 10,
        margin: 18,
        borderWidth: 1,
        fontSize: 16,
        borderColor: 'gray',
        backgroundColor: '#EDEFEE',
        borderRadius: 12
    },
    button: {
        borderRadius: 12,
        margin: 18,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        padding: 10,
       
    }

})
