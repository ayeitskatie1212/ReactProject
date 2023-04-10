import { StyleSheet } from "react-native";

const Backgrounds = StyleSheet.create({
    main: {
        paddingTop:150,
        width: '100%',
        height: '100%',
        gap: 50,
        alignItems: 'center',
        backgroundColor: "#887676",
        flexDirection: 'column',
    }, 
})

const Containers = StyleSheet.create({
    InputContainers:{
        width: '90%',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
    }

})
export {Backgrounds, Containers}