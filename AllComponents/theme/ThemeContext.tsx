// ThemeProvider.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { useColorScheme, StyleSheet } from 'react-native';
import { commonStyles } from './commonStyles';

type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: any;
  commonStyles: any;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const theme = isDarkTheme ? { ...DarkTheme, ...MD3DarkTheme } : { ...DefaultTheme, ...MD3LightTheme };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme, commonStyles: commonStyles(isDarkTheme) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};