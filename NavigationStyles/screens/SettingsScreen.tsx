// screens/SettingsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

function SettingsScreen({ route }: any): React.JSX.Element {
  const { deviceWidth, deviceHeight } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>Device Width: {deviceWidth}</Text>
      <Text>Device Height: {deviceHeight}</Text>
    </View>
  );
}

export default SettingsScreen;
