import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingsScreen() {
  return (
        <View style={styles.set}>
          <Text>Settings!</Text>
        </View>
      );
}

const styles = StyleSheet.create({
   set:{
    flex: 1,
     justifyContent: 'center',
      alignItems: 'center' 
   }
})