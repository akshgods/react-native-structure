import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import BackButton from "../components/BackButton";

class SignInScreen extends Component {
  _login=async()=>{
    await AsyncStorage.setItem('isLogin','true');
    this.props.navigation.navigate('AuthLoader');
  }
  render() {
    return (
      <View style={styles.container}>
        <BackButton />
        <Text>SignInScreen</Text>
        <TouchableOpacity onPress={this._login}><Text>Login</Text></TouchableOpacity>
      </View>
    );
  }
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});