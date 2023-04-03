import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import React from 'react'

const LoginButton = () => {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => Alert.alert('signin Requested')}
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
        width: '100%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        backgroundColor: "#D9D9D9",
      },
    touchable: {

    }

})