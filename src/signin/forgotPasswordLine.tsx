import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SigninLine = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.newText}> Forgot Password? </Text>
        <Pressable 
        onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.pressable}> 
            <Text style={styles.pressableText}>
                Click here.
            </Text>
        </Pressable>
    </View>
  )
}

export default SigninLine

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }, 
    newText: {
        color: 'darkgrey',
    },
    pressable: {

    },
    pressableText: {
        color: 'black',

    },
})