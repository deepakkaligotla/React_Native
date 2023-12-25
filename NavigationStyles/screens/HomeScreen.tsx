import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ColorSchemeName } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign"

function HomeScreen({ route }: any): React.JSX.Element {
  const { deviceWidth, deviceHeight } = route.params;

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign name='home' size={deviceWidth/2}></AntDesign>
          <Text>Home Screen</Text>
          <Text>Device Width: {deviceWidth}</Text>
          <Text>Device Height: {deviceHeight}</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});

export default HomeScreen;