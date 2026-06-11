import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrearPost from '../screens/CrearPost/CrearPost'
import Comentarios from '../components/Comentarios/Comentarios'

const Stack = createNativeStackNavigator();

export default function StackSecundaria() {

  return (
      <Stack.Navigator>
        <Stack.Screen name='NuevoPost' component={CrearPost} options={ {headerShown: false} }/>
        <Stack.Screen name='Comentarios' component={Comentarios} options={ {headerShown: false} }/>
      </Stack.Navigator>
  );
}