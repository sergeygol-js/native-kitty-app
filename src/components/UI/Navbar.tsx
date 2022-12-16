import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Native Kitty App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#198ac2',
    paddingBottom: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
})
