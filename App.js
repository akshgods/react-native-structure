/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createSwitchNavigator , createStackNavigator } from "react-navigation";
import AuthLoaderScreen  from "./screens/AuthLoaderScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";

const AuthStack=createStackNavigator({
  WelcomeScreen:WelcomeScreen,
  SignInScreen:SignInScreen,
  SignUpScreen:SignUpScreen
})
const AppStack=createStackNavigator({
  HomeScreen:HomeScreen
})
export default createSwitchNavigator({
  AuthLoader:AuthLoaderScreen,
  Auth:AuthStack,
  App:AppStack
})