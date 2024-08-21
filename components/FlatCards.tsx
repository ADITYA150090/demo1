import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>
                red
            </Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>
                Green
            </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>
                Blue
            </Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>
                Green
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:28,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'20%',
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardOne:{
        backgroundColor:'#EF5354',
    },
    cardTwo:{
        backgroundColor:'#50DBB3',
    },
    cardThree:{
        backgroundColor:'#5DA3FA',
    },
})