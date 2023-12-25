// MyThemeProvider.tsx
import React, { useEffect } from 'react';
import { MD3DarkTheme, MD3LightTheme, ThemeProvider } from 'react-native-paper';
import { useThemeContext } from './ThemeProvider';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

interface MyThemeProviderProps {
  children: React.ReactNode;
}

const MyThemeProvider: React.FC<MyThemeProviderProps> = ({ children }) => {
  const { isDarkMode } = useThemeContext();
  const paperTheme = DarkTheme;

  console.log("MyThemeProvider: "+isDarkMode)

  const customTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#3498db',
      background: '#ecf0f1',
      text: '#2c3e50',
    },
  };

  useEffect(() => {

  }, [customTheme])

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
