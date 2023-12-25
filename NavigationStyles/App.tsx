import React, { useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, useWindowDimensions } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './navigation/AppNavigator';
import CustomDrawerScreen from './components/CustomDrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');
  const paperTheme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();
  const Drawer = createDrawerNavigator();

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView style={{ backgroundColor: paperTheme.colors.background, flex: 1 }}>
        <StatusBar />
        <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerScreen {...props} deviceWidth={deviceWidth} deviceHeight={deviceHeight} />}
            screenOptions={{
              drawerStyle: {
                width: 200,
              },
              drawerActiveBackgroundColor: paperTheme.colors.onBackground,
              headerTintColor: isDarkTheme ? '#fff' : '#000'
            }}
          >
            <Drawer.Screen
              name="AppNavigator"
              children={() => <AppNavigator deviceWidth={deviceWidth} deviceHeight={deviceHeight} />}
              initialParams={{ deviceWidth, deviceHeight }}
              options={{
                headerTitle: '',
                headerTitleAlign: 'center',
                headerRight: () => (
                  <MaterialCommunityIcons.Button
                    name={isDarkTheme ? 'theme-light-dark' : 'theme-light-dark'}
                    color={isDarkTheme ? '#000' : '#fff'}
                    backgroundColor={isDarkTheme ? '#fff' : '#000'}
                    onPress={() => setIsDarkTheme((prev) => !prev)}
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