import React, {useState} from 'react'
import{ Text, TextInput, View, StyleSheet} from 'react-native'



function EmailBox() {
  const [text, onChangeText] = useState('');
  return (
      <TextInput
      style = {styles.style}
      onChangeText={onChangeText}
      value={text}
      placeholder={'Email'}
      textContentType='emailAddress'
      />
  );
}

function PasswordBox() {
  const [text, onChangeText] = useState('');
  return (
      <TextInput
      style = {styles.style}
      onChangeText={onChangeText}
      value={text}
      placeholder={'Password'}
      />
  );
}


const styles = StyleSheet.create({
  style:{
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    width: '100%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    backgroundColor: "#D9D9D9",
  }

})

export {EmailBox, PasswordBox}
