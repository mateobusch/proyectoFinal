import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Registro from './src/screens/Registro';
import HomeMenu from './src/components/HomeMenu';
import NavegacionStack from './src/navigation/NavegacionStack';

export default function App() {
  return (
    <NavegacionStack/>
  );
}