import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainStackNav from './components/MainStackNavigation';
import MainTabNav from './components/MainTabNavigation';
import MainDrawerNav from './components/MainDrawerNavigation';
import MainNewsLetter from './components/MainNewsLetter';

export default function App() {
  return(
    <NavigationContainer>
        <MainNewsLetter />
    </NavigationContainer>    
  );  
};
