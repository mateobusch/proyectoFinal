import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Comentarios from '../screens/Comentarios/Comentarios'

const Stack = createNativeStackNavigator();

export default function StackSecundaria() {

  return (
      <Stack.Navigator>
        <Stack.Screen name='HomeReal' component={Home} options={ {headerShown: false} }/>
        <Stack.Screen name='Comentarios' component={Comentarios} options={ {headerShown: false, title: 'Comentarios'} }/>
      </Stack.Navigator>
  );
}