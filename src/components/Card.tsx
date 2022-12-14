import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { ADD_LIKE, DEL_CARDS } from '../store/reducerTypes'
import { useDispatch } from 'react-redux'

export const Card = ({ item }: CardProps) => {
  const dispatch = useDispatch()

  const handleDeleteCard = (data: IList) => {
    dispatch({ type: DEL_CARDS, payload: data })
  }

  const handleAddLike = (data: IList) =>
    dispatch({ type: ADD_LIKE, payload: data })

  return (
    <View style={styles.imgWrap}>
      <Text style={styles.text}>Ссылка на картинку {item.url}</Text>
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
  container: {
    backgroundColor: '#e08f51',
    marginBottom: 120,
    height: '100%',
  },
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
})
