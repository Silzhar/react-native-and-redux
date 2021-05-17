import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { connect } from 'react-redux'

import subjectsReducer from './src/SubjectsReducer'
import Routes from './src/components/Routes.js'
import About from './src/components/About'
import Home from './src/components/Home'

const Stack = createStackNavigator()
const store = createStore(subjectsReducer)



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
          {/* <Routes /> */}
             <Stack.Screen
                name="Home"
                component={Home}
              />
              <Stack.Screen
                name="About"
                component={About}
              />
          </Stack.Navigator>
        </NavigationContainer>

      </Provider>

  //    <NavigationContainer>
  //    <Stack.Navigator>
  //      <Stack.Screen
  //        name="Home"
  //        component={Home}
  //      />
  //      <Stack.Screen
  //        name="About"
  //        component={About}
  //      />
  //    </Stack.Navigator>
  //  </NavigationContainer>
   
  );

  }
 
};
export default App
AppRegistry.registerComponent('reactApp', () => App)