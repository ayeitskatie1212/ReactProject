import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../styles/RootStackParams';

const SigninLine = () => {
    const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
        <Text style={styles.newText}> Already have an account? Sign in </Text>
        <Pressable 
        onPress={() => navigation.navigate("SignIn")}
        style={styles.pressable}> 
            <Text style={styles.pressableText}>
                Here
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