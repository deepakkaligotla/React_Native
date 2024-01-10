import React, { useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, View, useWindowDimensions, Button } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';
import ElementsMenu from '../menu/ElementsMenu';
import PaperMenu from '../menu/PaperMenu';
import Menu from '../menu/Menu';

function HomeScreen({ route }: any): React.JSX.Element {
  const { } = route.params;
  const { isDarkTheme, commonStyles } = useTheme();
  const [elementsDialog, setElementsDialog] = useState(false)

  return (
    <PaperProvider>
      <SafeAreaView style={[{ width: useWindowDimensions().width, height: useWindowDimensions().height }, commonStyles.view]}>

        <View style={{ height: 1, backgroundColor: isDarkTheme ? 'white' : 'black', marginVertical: 10, width: useWindowDimensions().width }} />

        <View style={{ height: 1, backgroundColor: isDarkTheme ? 'white' : 'black', marginVertical: 10, width: useWindowDimensions().width }} />

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  
});

export default HomeScreen;