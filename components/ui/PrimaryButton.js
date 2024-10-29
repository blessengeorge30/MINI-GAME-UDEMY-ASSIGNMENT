import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants /colors'

function PrimaryButton({ children,onPress }) {
  function pressHandler() {
    console.log('Pressed!')
  }
  return (
     <View style={styles.buttonoutercontainer}>
    <Pressable style={({pressed}) => pressed ? [styles.buttoninnercontainer, styles.pressed] : styles.buttoninnercontainer}
     onPress={onPress}>
        <Text style={styles.buttontxt}>{children}</Text>     
    </Pressable>
    </View>

  )
}

export default PrimaryButton

const styles = StyleSheet.create({
 buttoninnercontainer:{
  backgroundColor: Colors.primary500,
  borderRadius: 18,
  paddingVertical: 10,
  padding: 12,
  marginVertical:5,
  shadowOffset:10,
  shadowOpacity:0.2
 },
 buttonoutercontainer:{
  borderRadius:28,
  margin:2,
  overflow:'hidden'

 },
 buttontxt:{
  color:'#fff',
  fontSize:16,
  padding:3,
  textAlign:'center'
 },
 pressed: {
  opacity: 0.75,
 }



});