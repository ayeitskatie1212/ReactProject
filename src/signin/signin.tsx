import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginButton from './signinButton'
import RegisterLine from './registerLine'
import TextBox from '../components/textBoxes'
const SignIn = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Sign in</Text>
        <View style={styles.inputContainer}>
          <EmailBox />
          <PasswordBox />
          <LoginButton/>
        </View>
        <RegisterLine></RegisterLine> */}
      <TextBox type="email" />
      <TextBox type="pass" />
    </View>
    
  )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        paddingTop:150,
        width: '100%',
        height: '100%',
        gap: 50,
        alignItems: 'center',
        backgroundColor: "#887676",
        flexDirection: 'column',
    }, 
    inputContainer: {
      width: '90%',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 20

      
    },
    headerText: {
      fontSize: 40,
    }
})