import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import About from './About.js'
import Login from './Login.js'
import Slider from './Slider.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

const Routes = () => (
   <Router>
      <Stack.Screen key = "root">
         <Stack.Screen key = "login" component = {Login} title = "Login" initial = {true} />
         {/* <Scene key = "home" component = {Home} title = "Home" initial = {true} /> */}
         <Stack.Screen key = "about" component = {About} title = "About" />
         <Stack.Screen key = "slider" component = {Slider} title = "Slider" />
      </Stack.Screen>
      </Router>
)
export default Routes