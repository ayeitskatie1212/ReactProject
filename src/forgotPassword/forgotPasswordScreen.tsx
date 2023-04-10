import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import TextBox from '../components/textBoxes'
import {Backgrounds, Containers} from '../styles/Containers'
import { useNavigation } from '@react-navigation/core'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={Backgrounds.main}>
      <TextBox type="email"/>
      <Pressable 
        onPress={() => navigation.navigate("SignIn")}> 
            <Text>
                Go back to signin.
            </Text>
        </Pressable>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})