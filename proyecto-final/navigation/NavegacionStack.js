import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import NavegacionTab from './NavegacionTab';

const Stack = createNativeStackNavigator();

export default function NavegacionStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='NavegacionTab' component={NavegacionTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}