import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, useWindowDimensions } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './components/navigation/AppNavigator';
import CustomDrawerScreen from './components/navigation/CustomDrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from './components/theme/ThemeContext';

function App(): React.JSX.Element {
  const { theme, toggleTheme, isDarkTheme, commonStyles } = useTheme();
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();
  const Drawer = createDrawerNavigator();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerScreen {...props} />}
            screenOptions={{
              drawerStyle: {
                width: 200,
              },
              drawerIcon: ({ size, focused }) => (
                <AntDesign
                  name={focused ? 'menuunfold' : 'menufold'}
                  size={size}
                  color={commonStyles.bar.color}
                />
              ),
              headerTintColor: commonStyles.bar.color,
              headerStyle: {
                backgroundColor: commonStyles.bar.backgroundColor,
              },
            }}
          >
            <Drawer.Screen
              name="AppNavigator"
              children={() => <AppNavigator />}
              initialParams={{ deviceWidth, deviceHeight }}
              options={{
                headerTitle: '',
                headerTitleAlign: 'center',
                headerRight: () => (
                  <MaterialCommunityIcons.Button
                    name={isDarkTheme ? 'weather-sunny' : 'weather-night'}
                    color={commonStyles.bar.color}
                    backgroundColor= 'transparent'
                    onPress={toggleTheme}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;