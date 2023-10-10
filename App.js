<<<<<<< HEAD
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from './screens/homescreen';
import LocalScreen from './screens/localscreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Local') {
              iconName = focused ? 'location-arrow' : 'location-arrow';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue', // Set the active tab color
          tabBarInactiveTintColor: 'gray', // Set the inactive tab color
          tabBarStyle: { display: 'flex' }, // Set your tab bar style here
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'My Home' }} />
        <Tab.Screen name="Local" component={LocalScreen} options={{ title: 'Local Files' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
=======
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import { Foundation } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const handleLogin = () => {
    setUserAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: [
                {
                  display: 'flex',
                  backgroundColor: 'black',
                },
                null,
              ],
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <Foundation name="home" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <EvilIcons name="search" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="Downloads"
              component={DownloadsScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <Octicons name="download" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="My Space"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ size }) => (
                  <FontAwesome name="user-circle-o" size={size} color="white" />
                ),
              }}
            />
          </Tab.Navigator>
          <StatusBar style="light" />
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
>>>>>>> origin/Samarth/week-4-assignment
