import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



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
      fontFamily:'open-sans-bold',
        fontSize:24,
        // fontweight:'bold',
        color: 'white',
        textAlign:'center',
        borderWidth:0.5,
        borderColor:'#fff',
        padding:12,
        borderRadius: 15
        
    
       
      
    
      },
})