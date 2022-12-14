import React from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { Navbar } from './components/UI/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD } from './store/reducerTypes'
import { Card } from './components/Card'

export const MainLayout = () => {
  const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'

  useEffect(() => {
    axios.get(URL).then((response) => {
      const responseBase = response.data.map((data: IList) => ({
        id: data.id,
        url: data.url,
        width: data.width,
        height: data.height,
        like: false,
      }))
      loadFromBase(responseBase)
    })
  }, [])

  const [onlyLiked, setOnlyLiked] = useState<boolean>(false)

  const dispatch = useDispatch()

  const cards = useSelector((state: any) => state.cards)

  const loadFromBase = (data: IList[]) =>
    dispatch({ type: LOAD, payload: data })

  const handleShowOnlyLiked = () => {
    setOnlyLiked(!onlyLiked)
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.onlyLikeButton}>
        <Button
          title={!!onlyLiked ? 'Show All Photos' : 'Show Only With Likes'}
          color={'green'}
          onPress={() => handleShowOnlyLiked()}
        />
      </View>
      <FlatList
        keyExtractor={(item: IList) => item.id}
        data={
          !!onlyLiked
            ? cards.filter((item: IList) => item.like === true)
            : cards
        }
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e08f51',
    marginBottom: 120,
    height: '100%',
  },
  onlyLikeButton: {
    alignSelf: 'center',
    width: '50%',
    marginTop: 10,
    marginBottom: 10,
  },
})
