/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import {observer} from 'mobservable-react/native';


import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,  
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
});

let CounterUI = observer(React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Mobservable Counter</Text>
        <TouchableHighlight onPress={() => this.props.store.increment()}>
          <Text style={styles.text}>|   +   | </Text>
        </TouchableHighlight>
        
        <Text style={styles.text}>Clicked: {this.props.store.counter} times</Text>

        <TouchableHighlight onPress={() => this.props.store.decrement()}>
          <Text style={styles.text}>|   -   | </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.store.incrementAsync()}>
          <Text style={styles.text}>|   + Async   | </Text>
        </TouchableHighlight>
      </View>
    );
  }

}));

CounterUI.propTypes = {
  store: PropTypes.object.isRequired
};

module.exports = CounterUI;
