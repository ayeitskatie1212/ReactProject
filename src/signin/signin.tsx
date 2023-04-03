import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextBox from './textBox'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign in</Text>
        <TextBox defaultText = 'Email'/>
        <TextBox defaultText  = 'Password'/>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#887676",
    }, 
    headerText: {
      fontSize: 40,
    }
})