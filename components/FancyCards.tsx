import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View style={styles.Body}>
      <Text style={styles.headingText}>Thats ME</Text>
      <View style={[styles.card, styles.cardElevated]}>
       <Image
       source={{
        uri:'https://hd.wallpaperswide.com/thumbs/batman_minimalist-t2.jpg',
       }}
       style={styles.meImg}
       />
       <View style={styles.cardBody}>
        <Text style={styles.cardTitle}> I AM BATMAN
        </Text>
        <Text style={styles.cardLabel}>
            Bruce Wyne
        </Text>
        <Text style={styles.cardDescription}>
            i am batman i am bat man i am superman
            i am spiderman
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
        paddingHorizontal:10,
    },
    card:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    cardElevated:{},
    meImg:{
        height:350,
        width:350,
        
        
    },
    cardBody:{

    },
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    Body:{
        backgroundColor:'#50DBB3' ,
        borderRadius:8,
       
    }
})