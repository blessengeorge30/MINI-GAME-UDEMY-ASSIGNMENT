import React from "react"
import { Text, View, Image,StyleSheet} from 'react-native'
import Title from "../components/ui/Title"
import Colors from "../constants /colors"
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
return (
    <View style={styles.rootcontainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imagecontainer} >
             <Image style={styles.image} source={require('../assets/images/success.png')}></Image>
        </View>
       <Text style={styles.summaryText}> 
          Your phone required <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess 
        <Text style={styles.highlight}> {userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
    </View>
)
}


export default GameOverScreen

const styles = StyleSheet.create({
rootcontainer:{
  marginTop:50,
    padding:24,
    alignItems:'center',
    justifyContent: 'center'
    

},

 imagecontainer: {
  width:300,
  height:300,
  borderRadius:150,
  borderWidth:3,
  borderColor: Colors.primary600,
  overflow:'hidden',
  margin:36,
 
 },
 image:{
    width: '100%',
    height: '100%',
 },
 summaryText:{
    fontFamily:'open-sans',
    color:'white',
    fontSize:29,
    textAlign:'center',
    marginBottom:30
 },
 highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
 }
})