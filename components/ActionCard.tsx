import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.headingText, styles.ElevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            Whats new in javascript 21 -ES12
        </Text>
        </View>
        <Image
        source={{
            uri:'https://anettemossbacher.com/wp-content/media/lioness-staring-intensely-into-camera-print-305x305.jpg',
        }}
        style={styles.sush}/>
        <View style={styles.FooterContainer}>
         <TouchableOpacity
         onPress={()=> openWebsite('https://www.instagram.com/aditya_1000_/')}>
            <Text>
                Follow Me
            </Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    ElevatedCard:{},
    headingContainer:{},
    headerText:{},
    sush:{
        height:300,
        width:300,
    },
    FooterContainer:{},
})