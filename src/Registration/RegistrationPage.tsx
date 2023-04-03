import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextBox from '../components/textBoxes'
import {GeneralContainer} from '../styles/Containers'
import {Texts} from '../styles/text'

const RegistrationPage = () => {
  return (
    
    <View style={GeneralContainer.container}>
        <Text style={Texts.heading}> Header</Text>
      <TextBox type="fn"/>
      <TextBox type="ln"/>
      <TextBox type="email"/>
      <TextBox type="pass"/>
    </View>
  )
}

export default RegistrationPage

const styles = StyleSheet.create({})