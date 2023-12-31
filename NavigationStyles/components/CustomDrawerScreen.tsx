// components/CustomDrawerScreen.tsx
import React from 'react';
import DrawerContent from './DrawerContent';

interface CustomDrawerScreenProps {
  navigation: any
  deviceWidth: number;
  deviceHeight: number;
}

function CustomDrawerScreen(props: CustomDrawerScreenProps): React.JSX.Element {
  return (
    <DrawerContent {...props} />
  );
}

export default CustomDrawerScreen;
