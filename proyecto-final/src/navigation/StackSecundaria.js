<Tab.Screen name="CrearPost" component={CrearPost} options={{
                    tabBarIcon: () => <FontAwesome name="account-book" size={24} color="black"/>}}/>

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrearPost from '../screens/CrearPost/CrearPost'
import Comentarios from '../components/Comentarios/Comentarios'

const Stack = createNativeStackNavigator();

export default function StackSecundaria() {

  return (
      <Stack.Navigator>
        <Stack.Screen name='CrearPost' component={CrearPost} options={ {headerShown: false} }/>
        <Stack.Screen name='Comentarios' component={Comentarios} options={ {headerShown: false} }/>
      </Stack.Navigator>
  );
}