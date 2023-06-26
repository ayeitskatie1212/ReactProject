import { StyleSheet, Text, View } from 'react-native'

function capitalize(input: string): string  {
    return input[0].toUpperCase() + input.slice(1).toLowerCase()
}

export {capitalize};
