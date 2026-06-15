import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home/Home'
import MiPerfil from '../screens/MiPerfil/MiPerfil'
import CrearPost from '../screens/CrearPost/CrearPost'
import StackSecundaria from "./StackSecundaria"; 

const Tab = createBottomTabNavigator()

export default function NavegacionTab(){
    return (
            <Tab.Navigator screenOptions={ {headerShown: false , tabBarShowLabel: false} }>

                <Tab.Screen name="HomeTab" component={StackSecundaria} options={{
                    tabBarIcon: () => <FontAwesome name="home" size={24} color="black"/>}}/>
                <Tab.Screen name="CrearPost" component={CrearPost} options={{
                    tabBarIcon: () => <Entypo name="new-message" size={24} color="black" />}}/>
                <Tab.Screen name="Profile" component={MiPerfil} options={{
                    tabBarIcon: () => <Ionicons name="person" size={24} color="black" />}}/>
            </Tab.Navigator>
    )
}