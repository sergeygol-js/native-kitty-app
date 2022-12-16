import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Clipboard from '@react-native-clipboard/clipboard'

export const Card = ({ item, handleAddLike, handleDeleteCard }: CardProps) => {
  const copyToClipboard = () => {
    Clipboard.setString(item.url)
  }

  return (
    <View style={styles.imgWrap}>
      <Text style={styles.text}>Ссылка на картинку: {item.url}</Text>
      <Text style={styles.text}>
        Оригинальный размер: {item.height}x{item.width}
      </Text>
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={styles.buttons}>
        <AntDesign
          name='like1'
          size={35}
          color={item.like ? 'green' : 'white'}
          onPress={() => handleAddLike(item)}
        />
        <AntDesign
          name='delete'
          size={35}
          color={'red'}
          onPress={() => handleDeleteCard(item)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrap: {
    padding: 30,
    paddingTop: 10,
    height: 550,
    margin: 10,
    width: '95%',
    backgroundColor: '#2c5cb0',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  hyperLink: {
    color: 'blue',
  },
})
