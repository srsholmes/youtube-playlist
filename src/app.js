require('babelify/polyfill');
import 'whatwg-fetch';

let React = require('react');
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

//Needed for React Developer Tools
window.React = React;

import { start } from './components/App';
start();