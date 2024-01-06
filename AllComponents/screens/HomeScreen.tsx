import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen({ route }: any): React.JSX.Element {
  const { } = route.params;
  const { theme, isDarkTheme, commonStyles } = useTheme();

  return (
    <PaperProvider>
      <SafeAreaView style={commonStyles.view}>
        <ScrollView>

        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;