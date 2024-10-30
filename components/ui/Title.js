import { Platform, StyleSheet, Text, View } from 'react-native'
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
        // borderWidth:Platform.OS ==='android' ? 2 : 0,
        borderWidth:Platform.select({ios:0 , android:2}),
        borderColor:'#fff',
        padding:12,
        borderRadius: 15,
        maxWidth:'80%',
        width:300
      },
})