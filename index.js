/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import BgChanger from './components/BgChanger';
import ShapeColorChanger from './components/ShapeColorChanger';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => ShapeColorChanger);