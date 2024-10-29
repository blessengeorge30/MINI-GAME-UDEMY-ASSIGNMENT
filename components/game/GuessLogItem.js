


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants /colors';


function GuessLogItem({roundNumber,guess}){
  return (
    <View style={styles.ListItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess:{guess}</Text>
    </View>
  )
}

export default GuessLogItem;

const styles =StyleSheet.create({
    ListItems: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        alignSelf:'center',
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:100, height:10},
        shadowOpacity: 0.95,
        shadowRadius: 10,
        
    },
    itemText:{
        fontFamily: 'open-sans'
    }

});
