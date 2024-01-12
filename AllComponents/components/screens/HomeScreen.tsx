import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, useWindowDimensions, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';
import Search from '../search/Search';
import PaperSearch from '../search/PaperSearch';
import ElementsSearch from '../search/ElementsSearch';

function HomeScreen({ route }: any): React.JSX.Element {
  const { } = route.params;
  const { isDarkTheme, commonStyles } = useTheme();

  return (
    <PaperProvider>
      <SafeAreaView style={[{ width: useWindowDimensions().width, height: useWindowDimensions().height }, commonStyles.view]}>

          {/* Elements library */}
          <Text style={{ fontSize: 24 }}>Elements library</Text>
          <ElementsSearch />

          <View style={{ height: 1, backgroundColor: isDarkTheme ? 'white' : 'black', marginVertical: 10, width: useWindowDimensions().width }} />

          {/* Paper library */}
          <Text style={{ fontSize: 24 }}>Paper library</Text>
          <PaperSearch />

          <View style={{ height: 1, backgroundColor: isDarkTheme ? 'white' : 'black', marginVertical: 10, width: useWindowDimensions().width }} />

          {/* Own Implementation */}
          <Text style={{ fontSize: 24 }}>Own Implementation</Text>
          <Search />

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});

export default HomeScreen;