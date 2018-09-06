//example child component
import React, { Component } from "react";
import { 
    TouchableOpacity,
    Text,
} from "react-native";
import { withNavigation } from "react-navigation";
//with navigation is for navigating from child component

class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                <Text>Back</Text>
             </TouchableOpacity>
        );
    }
}
// withNavigation returns a component that wraps ChildComponent and passes in the
// navigation prop
export default withNavigation(BackButton);