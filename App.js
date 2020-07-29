import React from 'react';
import Navigator from './components/routes/HomeStack';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default function App() {
  let [fontsLoaded] = useFonts({ PressStart2P_400Regular });
  
  return ( !fontsLoaded ? <AppLoading /> : <Navigator/>)
}