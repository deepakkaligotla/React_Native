import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useThemeContext } from '../ThemeProvider';

function SettingsScreen({ route }: any): React.JSX.Element {
  const { deviceWidth, deviceHeight } = route.params;
  console.log("Settings: "+useThemeContext().isDarkMode)
  
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SimpleLineIcons name='settings' size={deviceWidth/2}></SimpleLineIcons>
          <Text>Settings Screen</Text>
          <Text>Device Width: {deviceWidth}</Text>
          <Text>Device Height: {deviceHeight}</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default SettingsScreen;
