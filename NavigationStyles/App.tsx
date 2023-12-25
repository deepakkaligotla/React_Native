import React from 'react';
import { SafeAreaView, StatusBar, useWindowDimensions } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './navigation/AppNavigator';
import CustomDrawerScreen from './components/CustomDrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyThemeProvider from './MyThemeProvider';
import { ThemeProvider, useThemeContext } from './ThemeProvider';

function App(): React.JSX.Element {
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();
  const Drawer = createDrawerNavigator();

  return (
    <ThemeProvider>
      <PaperProvider>
        <MyThemeProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <NavigationContainer>
              <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerScreen {...props} deviceWidth={deviceWidth} deviceHeight={deviceHeight} />}
                screenOptions={{
                  drawerStyle: {
                    width: 200,
                  },
                }}
              >
                <Drawer.Screen
                  name="AppNavigator"
                  children={() => <AppNavigator deviceWidth={deviceWidth} deviceHeight={deviceHeight} />}
                  initialParams={{ deviceWidth, deviceHeight }}
                  options={{
                    headerTitle: 'Deepak Kaligotla',
                    headerTitleAlign: 'center',
                    headerRight: () => {
                      const { isDarkMode, toggleTheme } = useThemeContext();
                      return (
                        <MaterialCommunityIcons.Button
                          name={isDarkMode ? 'theme-light-dark' : 'theme-light-dark'}
                          onPress={toggleTheme}
                        />
                      );
                    },
                  }}
                />
              </Drawer.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </MyThemeProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;