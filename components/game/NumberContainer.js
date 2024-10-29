import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants /colors'

function NumberContainer ({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        borderWidth: 0.5,
    borderColor:Colors.accentcolor100,
      
        padding:14,
        borderRadius:10,
        margin:24,
        alignitem:'center',
        justifyContent:'center' 
    },
    numberText:{
      color: Colors.accentcolor100,
      fontSize:34,
      fontWeight: 'bold',
      textAlign:'center',
        justifyContent:'center' 
    }
})