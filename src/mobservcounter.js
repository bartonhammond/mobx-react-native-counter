/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import counterStore from './store/counter';
import CounterUI from './CounterUI';

import React, {
  AppRegistry
} from 'react-native';


export default function init() {
  let  mobservCounter = React.createClass({
    render() {
      return (
          <CounterUI store={counterStore}/>
      );
    }
  });

  AppRegistry.registerComponent('mobservCounter', () => mobservCounter);
}
