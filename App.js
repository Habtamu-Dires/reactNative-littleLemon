import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './components/MainComponent';
import MainTabNav from './components/MainTabNavigation';

export default function App() {
  return(
    <NavigationContainer>
        <MainTabNav />
    </NavigationContainer>    
  );  
};
