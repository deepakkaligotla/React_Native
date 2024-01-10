// components/CustomDrawerScreen.tsx
import React from 'react';
import DrawerContent from './DrawerContent';

interface CustomDrawerScreenProps {
  navigation: any
}

function CustomDrawerScreen(props: CustomDrawerScreenProps): React.JSX.Element {
  return (
    <DrawerContent {...props} />
  );
}

export default CustomDrawerScreen;
