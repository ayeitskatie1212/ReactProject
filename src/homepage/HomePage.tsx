import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#887676',
        height: '100%',
        width: '100%'
    },
})