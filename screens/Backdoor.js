import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

export default class Backdoor extends Component {

    signup = () => {
        this.props.navigation.navigate({routeName: 'SignupScreen'})
    }

    login = () => {
        this.props.navigation.navigate({routeName: 'LoginScreen'})
    }

    mainpage = () => {
        this.props.navigation.navigate({routeName: 'MainScreen'})
    }

    render () {
        return(
            <View style={styles.container}>
                <Button title="Go to Main Screen" onPress={this.mainpage} />
                <Button title="Go to Signup Screen" onPress={this.signup} />
                <Button title="Go to Login Screen" onPress={this.login} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#12799f', 
      fontSize:16,
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500',
    }
});

