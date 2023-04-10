import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import LoginButton from './signinButton'
import RegisterLine from './registerLine'
import TextBox from '../components/textBoxes'
import {Texts} from '../styles/text'
import {Backgrounds, Containers} from '../styles/Containers'
import ForgotPasswordLine from './forgotPasswordLine'

const SignIn = () => {
  return (
    <View style={Backgrounds.main}>
      <Text style={Texts.heading}>Sign in</Text>
        <View style={Containers.InputContainers}>
          <TextBox type="email" />
          <TextBox type="pass" />
          <LoginButton />
        </View>
        <ForgotPasswordLine/>
        <RegisterLine></RegisterLine>


    </View>
    
  )
}

export default SignIn;

const styles = StyleSheet.create({
  
    inputContainer: {
      width: '90%',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 20

      
    },
})