import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants /colors';

function Card ({children}) {
  return (
    <View style={styles.card}>{children}
</View>
  )
}

export default Card;

const deviceWidth = Dimensions.get ('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 18 :20,
        marginBottom:18,
        borderRadius: 20,
        padding: 30,
        backgroundColor:Colors.primary600,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.75
    },
})