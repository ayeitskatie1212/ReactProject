import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RegisterLine = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.newText}> New? Register </Text>
        <Pressable 
        onPress={() => navigation.navigate("Registration")}
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