import React, {useState} from 'react'
import{ Text, TextInput, View, StyleSheet, Alert} from 'react-native'


//Note: this could also process whether or not it is protected? like a passwords
function determineType(type: string){
    var defaultText = "" //What will be displayed in the text input
    var reactType = ""       //What the name of the type is in react's TextInputs
    if (type == "email" || type == "Email") {
        defaultText = "Email"
        reactType = 'emailAddress'
    }
    else if(type == 'Password' || type == 'Pass' || type == 'password' || type == 'pass'){
        defaultText = "Password"
        reactType= "password"
    }
    else if(type =='First Name' || type =='First' || type =='first' || type =='first name' || type =="fn" || type =="FN"){
        defaultText = "First Name"
        reactType= "name"
    }
    else if (type =='Last Name' || type =='Last' || type =='last' || type =='last name' || type =="ln" || type =="LN"){
        defaultText = "Last Name"
        reactType= "name"
    }
    else{
        defaultText = ''
        reactType = 'none'
    }
    return [defaultText, reactType]

}

function TextBox(props:{ type:string }){
    const[text, setText] = useState('');
    var data = determineType(props.type);
    var defaultText = data[0]
    var reactType = data[1]
    // Alert.alert(reactType)
    // Alert.alert(defaultText)
    return(
        <TextInput 
        style = {styles.style}
        onChangeText={setText}
        value={text}
        placeholder={defaultText}
        textContentType= 'none'
        />
        
        )
    }
    
    export default TextBox
    
    
    const styles = StyleSheet.create({
        style:{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 3,
            width: '80%',
            height: 50,
            borderRadius: 25,
            padding: 10,
            backgroundColor: "#D9D9D9",
        }
        
    })
    
    
// function EmailBox() {
    //   const [text, onChangeText] = useState('');
    //   return (
        //       <TextInput
        //       style = {styles.style}
        //       onChangeText={onChangeText}
        //       value={text}
        //       placeholder={'Email'}
        //       textContentType='emailAddress'
        //       />
        //   );
        // }
            
// function PasswordBox() {
    //   const [text, onChangeText] = useState('');
    //   return (
        //       <TextInput
        //       style = {styles.style}
        //       onChangeText={onChangeText}
        //       value={text}
        //       placeholder={'Password'}
        //       />
        //   );
        // }



// switch (type) {
//     case ("Email" || "email"):
//         break;
//     case ('Password' || 'Pass' || 'password' || 'pass'):
//         break;
//     case ('First Name' || 'First' || 'first' || 'first name' || "fn" || "FN"):
//         break;
//     case ('Last Name' || 'Last' || 'last' || 'last name' || "ln" || "LN"):
//         break;
//     default:
//         return ['I went to default','none']
//         break;
// }
// return [defaultText, reactType]