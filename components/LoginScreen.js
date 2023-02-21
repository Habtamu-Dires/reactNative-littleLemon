import React, { useState } from "react";
import { Text, TextInput, ScrollView, StyleSheet, Pressable, View } from "react-native";

export default function LoginScreen() {
  const [logedIn, setLogin] = useState(false);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

    return(
        <ScrollView style={styles.container} keyboardDismissMode={'on-drag'}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {logedIn && <Text style={styles.regularText}>Your are logged in!</Text>}
            {!logedIn && (
              <>
                <Text style={styles.regularText}> Login to continue </Text>
                <TextInput 
                  style={styles.input}
                  value={email}
                  onChangeText={onChangeEmail}
                  keyboardType={'email-address'}
                  placeholder={'email'}
                />
                <TextInput 
                  style={styles.input}
                  value={password}
                  onChangeText={onChangePassword}
                  secureTextEntry={true}
                  placeholder={'password'}
                />
                <Pressable style={styles.button} onPress={()=>{
                  setLogin(!logedIn)
                }}>
                  <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
              </>
            )}            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333'
    },
    headerText: {
      padding: 50,
      fontSize: 34,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 28,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    input:{
      height: 40,
      padding: 10,
      margin: 12,
      borderWidth: 1,
      fontSize: 16,
      borderColor: 'EDEFEE',
      backgroundColor: '#EDEFEE',
    },
    button:{
      fontSize: 32,
      backgroundColor: '#EE9972',
      paddingVertical: 12,
      marginVertical: 8,
      margin: 120,
      borderRadius: 24
    },
    buttonText: {
      textAlign: "center",
      fontSize: 24
    }
  });
  