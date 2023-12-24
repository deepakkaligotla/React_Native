// components/DrawerContent.tsx
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface DrawerContentProps {
  deviceWidth: number;
  deviceHeight: number;
}

function DrawerContent({ navigation, deviceWidth, deviceHeight }: DrawerContentProps): React.JSX.Element {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        icon={({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} />}
        onPress={() => navigation.navigate('Home', { deviceWidth, deviceHeight })}
      />

      <DrawerItem 
        label="Settings" 
        icon={({ color, size }) => <MaterialIcons name="settings-suggest" size={size} color={color} />}
        onPress={() => navigation.navigate('Settings', { deviceWidth, deviceHeight })}
      />

      <DrawerItem 
        label="About"
        icon={({ color, size }) => <MaterialCommunityIcons name="information" size={size} color={color} />}
        onPress={() => navigation.navigate('About', { deviceWidth, deviceHeight })}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
