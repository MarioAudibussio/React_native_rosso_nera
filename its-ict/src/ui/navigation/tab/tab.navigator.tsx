import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams, Screen } from '../types';
import HomeScreen from '../../screens/home/home.screen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from '../../screens/notifications/favoritesScreen';

const Tab = createBottomTabNavigator<TabParams>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#001945',
            borderTopColor: '#333333',
          },
          headerStyle: {
            backgroundColor: '#001945',
          },
          headerTintColor: '#001945',
          tabBarIconStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarIcon: ({ focused }) => {
            const iconName = () => {
              switch (route.name) {
                case Screen.Home:
                  return 'home';
                case Screen.Favorites:
                  return 'heart';
              }
            };

            return (
              <Ionicons 
                name={iconName()} 
                size={24} 
                color={focused ? '#f5f5f5' : '#006BFA'}
              />
            );
          },
        };
      }}>
      <Tab.Screen name={Screen.Home} component={HomeScreen}initialParams={{ hasFavoritesUpdated: false }}/>
      <Tab.Screen name={Screen.Favorites} component={FavoritesScreen}initialParams={{ hasFavoritesUpdated: false }}/>
    </Tab.Navigator>
  );
}