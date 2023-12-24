// navigation/AppNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"
import MainNavigator from './MainNavigator';
import CustomDrawerScreen from '../components/CustomDrawerScreen';

const Drawer = createDrawerNavigator();

function AppNavigator(props: any): React.JSX.Element {
  return (
    <Drawer.Navigator
      drawerContent={(drawerProps) => <CustomDrawerScreen {...drawerProps} {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 200,
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        children={() => <MainNavigator deviceWidth={props.deviceWidth} deviceHeight={props.deviceHeight} />}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
