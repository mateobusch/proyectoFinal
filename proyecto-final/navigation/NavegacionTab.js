import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";


import AntDesign from '@expo/vector-icons/AntDesign';
import Home from '../screens/Home';
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator()
export default function NavegacionTab(){
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{headerShown: false,
                    tabBarIcon: () => <AntDesign name="alibaba" size={24} color="black" />
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,
                    tabBarIcon: () => <AntDesign name="account-book" size={24} color="black" />
                }}/>
                
            </Tab.Navigator>
    )
}