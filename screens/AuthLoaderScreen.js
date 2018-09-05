import React from 'react';
import { Text, View, ActivityIndicator,AsyncStorage } from 'react-native';

export default class AuthLoaderScreen extends React.Component {
    constructor(props){
        super(props);
        this.checkLogin();
    }
    checkLogin=async()=>{
        const isLogin=await AsyncStorage.getItem('isLogin');
        this.props.navigation.navigate(isLogin?'App':'Auth');
    }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
}