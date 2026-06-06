import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home/Home';
import MiPerfil from '../../screens/MiPerfil/MiPerfil';
import CrearPost from '../../screens/CrearPost/CrearPost';

const Tab = createBottomTabNavigator();

export default function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Usuarios" component={Usuarios} />
      <Tab.Screen name="NuevoPost" component={CrearPost} />

    </Tab.Navigator>
  );
}