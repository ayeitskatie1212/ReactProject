import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate('Home')}
    >
        <Text> 
            Login
        </Text>
    </TouchableOpacity>
        
  )
}

export default LoginButton

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        backgroundColor: "#D9D9D9",
      },

})