/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { ThemeProvider } from './theme/ThemeContext';
import {name as appName} from './app.json';

const ThemedApp = () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => ThemedApp);
