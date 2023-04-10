import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextBox from '../components/textBoxes'
import {Backgrounds} from '../styles/Containers'
import {Texts} from '../styles/text'
import SigninLine from './signinLine'
const RegistrationPage = () => {
  return (
    
    <View style={Backgrounds.main}>
        <Text style={Texts.heading}> Header</Text>
      <TextBox type="fn"/>
      <TextBox type="ln"/>
      <TextBox type="email"/>
      <TextBox type="pass"/>
      <SigninLine></SigninLine>
    </View>
  )
}

export default RegistrationPage

const styles = StyleSheet.create({})