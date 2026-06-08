import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Home from '../screens/Home/Home'
import MiPerfil from '../screens/MiPerfil/MiPerfil'
import Post from '../components/Post/Post'

const Tab = createBottomTabNavigator()
export default function NavegacionTab(){
    return (
            <Tab.Navigator screenOptions={ {headerShown: false , tabBarShowLabel: false} }>
                
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => <FontAwesome name="home" size={24} color="black"/>}}/>
                <Tab.Screen name="Profile" component={MiPerfil} options={{
                    tabBarIcon: () => <FontAwesome name="account-book" size={24} color="black"/>}}/>
                <Tab.Screen name="Post" component={Post} options={{
                    tabBarIcon: () => <FontAwesome name="account-book" size={24} color="black"/>}}/>
            </Tab.Navigator>
    )
}