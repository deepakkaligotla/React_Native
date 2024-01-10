// screens/AboutScreen.tsx
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useTheme } from '../theme/ThemeContext';

function AboutScreen({ route }: any): React.JSX.Element {
  const {  } = route.params;
  const { commonStyles } = useTheme();

  return (
    <PaperProvider>
      <SafeAreaView style={commonStyles.view}>
        <View style={commonStyles.view}>
          <MaterialCommunityIcons name='information-variant' size={useWindowDimensions().width/4}  color={commonStyles.text.color}/>
          <Text style={commonStyles.text}>About Screen</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default AboutScreen;
