// navigation/AppNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './MainNavigator';
import CustomDrawerScreen from '../components/CustomDrawerScreen';
import { useTheme } from '../theme/ThemeContext';

const Drawer = createDrawerNavigator();

function AppNavigator(props: any): React.JSX.Element {
  const { theme, isDarkTheme, commonStyles } = useTheme();

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
        children={() => <MainNavigator/>}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;