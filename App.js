import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown : false,
          tabBarStyle: [
            {
              display: 'flex', 
              backgroundColor: 'black',
            },
            null
          ],
        }}

      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ size }) => <Ionicons name="home" size={size} color="white" /> }} />
        <Tab.Screen name="Downloads" component={DownloadsScreen}  options={{ tabBarIcon: ({ size }) => <Ionicons name="download" size={size} color="white" /> }} />
      </Tab.Navigator>
      <StatusBar style='light'/>
    </NavigationContainer>
  );
}


