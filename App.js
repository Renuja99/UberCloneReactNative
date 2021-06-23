/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen/index';



const App= () => {
 

  return (
    < >
    <StatusBar barStyle={"dark-content"} backgroundColor="#a0abff"/>
     <HomeScreen />
      <Icon name="rocket" size={30} color="#900" />
    </>
  );
};




export default App
