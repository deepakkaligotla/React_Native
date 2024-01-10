import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface DrawerContentProps {
  navigation: any
}

function DrawerContent({ navigation }: DrawerContentProps): React.JSX.Element {

  return (
    <DrawerContentScrollView>
      <Image
        source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <DrawerItem
        label="Home"
        icon={({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} />}
        onPress={() => navigation.navigate('Home')}
      />

      <DrawerItem 
        label="Settings" 
        icon={({ color, size }) => <MaterialIcons name="settings-suggest" size={size} color={color} />}
        onPress={() => navigation.navigate('Settings')}
      />

      <DrawerItem 
        label="About"
        icon={({ color, size }) => <MaterialCommunityIcons name="information" size={size} color={color} />}
        onPress={() => navigation.navigate('About')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 'auto',
    height: 150,
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default DrawerContent;
