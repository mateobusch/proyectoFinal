import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/Login';
import Registro from './src/screens/Registro/Registro';
import NavegacionStack from './src/navigation/NavegacionStack';

export default function App() {
  return (
    <NavegacionStack/>
  );
}