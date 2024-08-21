import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <View style={styles.home}>
          <Text>Home!</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    home:{
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center'
    }
})