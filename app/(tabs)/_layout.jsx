import React from 'react'
import { View, Text } from 'react-native'
import { Tabs } from 'expo-router';
import Colors from './../../constants/Colors';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions = {{
            tabBarActiveTintColor: Colors.secundary
        }}
        >
        <Tabs.Screen name="home" 
            options={{
                title: 'Inicio', 
                headerShown: false,
                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
            }}
        />

            <Tabs.Screen name="dates"
                options={{
                    title: 'Citas', 
                    headerShown: false,
                    tabBarIcon:({color}) => <AntDesign name="calendar" size={24} color={color}/>
                }}
            />
            <Tabs.Screen name="notifications" 
                options={{
                    title: 'Mensajes', 
                    headerShown: false,
                    tabBarIcon:({color}) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="ai" 
                options={{
                    title: 'IA', 
                    headerShown: false,
                    tabBarIcon:({color}) => <MaterialCommunityIcons name="google-assistant" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="profile" 
                options={{
                    title: 'Perfil', 
                    headerShown: false,
                    tabBarIcon:({color}) => <Entypo name="baidu" size={24} color={color} />
                }}
            />
    </Tabs>
    
  )
}