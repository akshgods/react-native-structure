import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

class HomeScreen extends Component {
  _logout= async ()=>{
    await AsyncStorage.removeItem('isLogin');
    this.props.navigation.navigate('AuthLoader');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={this._logout}><Text>Logout</Text></TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});