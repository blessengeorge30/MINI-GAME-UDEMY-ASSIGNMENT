import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants /colors'

function NumberContainer ({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        borderWidth: 0.5,
    borderColor:Colors.accentcolor100,
    // backgroundColor:'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    shadowOpacity: 0.75,
        padding: deviceWidth < 380 ? 16 : 18,
        borderRadius:10,
        margin:deviceWidth < 380 ? 16 : 20,
        alignitem:'center',
        justifyContent:'center' 
    },
    numberText:{
      color: Colors.accentcolor100,
      fontSize:deviceWidth < 380 ? 25 : 36,
      textAlign:'center',
        justifyContent:'center',
        fontFamily:'open-sans-bold', 
    }
})