import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'

const RegisterLine = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.newText}> New? Register </Text>
        <Pressable 
        onPress={() => Alert.alert("trying to register")}
        style={styles.pressable}> 
            <Text style={styles.pressableText}>
                Here
            </Text>
        </Pressable>
    </View>
  )
}

export default RegisterLine

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