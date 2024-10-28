import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants /colors'


function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}  </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize:24,
        fontweight:'bold',
        color: Colors.accentcolor100,
        textAlign:'center',
        borderWidth:1.5,
        borderColor:'#fff',
        padding:12
    
       
      
    
      },
})