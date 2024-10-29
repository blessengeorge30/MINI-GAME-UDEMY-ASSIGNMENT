import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Card ({children}) {
  return (
    <View style={styles.inputcontainer}>{children}
</View>
  )
}

export default Card;

const styles = StyleSheet.create({
    
})