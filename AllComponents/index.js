/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { ThemeProvider } from './components/theme/ThemeContext';
import {name as appName} from './app.json';

const ThemedApp = () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => ThemedApp);
