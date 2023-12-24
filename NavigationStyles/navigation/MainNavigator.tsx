// navigation/MainNavigator.tsx
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

function MainNavigator({ deviceWidth, deviceHeight }: any): React.JSX.Element {
  const route = useRoute();
  const [screenTitle, setScreenTitle] = useState('Initial Title');

  useEffect(() => {
    setScreenTitle(route.name);
  }, [route]);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ deviceWidth, deviceHeight }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" size={size} />
          ),
        }}
        listeners={{
          focus: () => setScreenTitle('Home'),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{ deviceWidth, deviceHeight }} // Pass the parameters here
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ size }) => (
            <MaterialIcons name="settings-suggest" size={size} />
          ),
        }}
        listeners={{
          focus: () => setScreenTitle('Settings'),
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ deviceWidth, deviceHeight }} // Pass the parameters here
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="information" size={size} />
          ),
        }}
        listeners={{
          focus: () => setScreenTitle('About'),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainNavigator;
