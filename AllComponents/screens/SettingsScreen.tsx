import React from 'react';
import { View, Text, SafeAreaView, useWindowDimensions } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useTheme } from '../theme/ThemeContext';

function SettingsScreen({ route }: any): React.JSX.Element {
  const {  } = route.params;
  const { commonStyles } = useTheme();
  
  return (
    <PaperProvider>
      <SafeAreaView style={commonStyles.view}>
        <View style={commonStyles.view}>
          <SimpleLineIcons name='settings' size={useWindowDimensions().width/4} color={commonStyles.text.color}></SimpleLineIcons>
          <Text style={commonStyles.text}>Settings Screen</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default SettingsScreen;
