// screens/AboutScreen.tsx
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

function AboutScreen({ route }: any): React.JSX.Element {
  const { deviceWidth, deviceHeight } = route.params;

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons name='information-variant' size={deviceWidth/2}></MaterialCommunityIcons>
          <Text>About Screen</Text>
          <Text>Device Width: {deviceWidth}</Text>
          <Text>Device Height: {deviceHeight}</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default AboutScreen;
