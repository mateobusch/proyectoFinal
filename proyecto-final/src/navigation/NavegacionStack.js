import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavegacionTab from './NavegacionTab';
import Login from '../screens/Login/Login'
import Registro from '../screens/Registro/Registro'

const Stack = createNativeStackNavigator();

export default function NavegacionStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={ {headerShown: false} }/>
        <Stack.Screen name='Register' component={Registro} options={ {headerShown: false} }/>
        <Stack.Screen name='NavegacionTab' component={NavegacionTab} options={ {headerShown: false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}