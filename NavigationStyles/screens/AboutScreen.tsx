// screens/AboutScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

function AboutScreen({ route }: any): React.JSX.Element {
  const { deviceWidth, deviceHeight } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
      <Text>Device Width: {deviceWidth}</Text>
      <Text>Device Height: {deviceHeight}</Text>
    </View>
  );
}

export default AboutScreen;
