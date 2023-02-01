import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';


// import (alias) function TabTwoScreen(): JSX.Element
// import import TabTwoScreen

// import HomeScreen from '../screens/HomeScreen';
// import MovieDetailsScreen from '../screens/MovieDetailsScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color}  style={{marginBottom: 8}}/>,
        }}
      />
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createNativeStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{
          title: ' '
          }}
      />

    <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}