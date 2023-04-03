import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.square}> 
            <Text> 
                Home
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
            <Text> 
                Search
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
            <Text> 
                Map
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
            <Text> 
                Chat
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
            <Text> 
                Settings
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: '#D9D9D9',
        height: '10%',
        verticalAlign: 'center',
        alignItems: 'center',
    },
    square: {

    }

})