import React, { useCallback } from 'react'
import { StyleSheet, View, FlatList, Button, Alert, Text } from 'react-native'
import { Navbar } from './components/UI/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './components/Card'
import { ADD_LIKE, DEL_CARDS, LOAD } from './store/reducerTypes'

export const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [updatePage, setUpdatePage] = useState(false)
  const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(URL)
      .then((response) => {
        const responseBase = response.data.map((data: IList) => ({
          id: data.id,
          url: data.url,
          width: data.width,
          height: data.height,
          like: false,
        }))
        loadFromBase(responseBase)
        setIsLoading(false)
      })
      .catch((e) => Alert.alert('Error\n' + e))
  }, [updatePage])

  const [onlyLiked, setOnlyLiked] = useState<boolean>(false)
  const handleShowOnlyLiked = () => {
    setOnlyLiked(!onlyLiked)
  }

  const dispatch = useDispatch()
  const handleAddLike = useCallback(
    (data: IList) => dispatch({ type: ADD_LIKE, payload: data }),
    []
  )
  const handleDeleteCard = useCallback(
    (data: IList) => dispatch({ type: DEL_CARDS, payload: data }),
    []
  )
  const loadFromBase = (data: IList[]) =>
    dispatch({ type: LOAD, payload: data })

  const cards = useSelector((state: any) => state.cards)

  return (
    <View style={styles.container}>
      <Navbar />
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <>
          <View style={styles.onlyLikeButton}>
            <Button
              title={!!onlyLiked ? 'Show All Photos' : 'Show Only With Likes'}
              color={'green'}
              onPress={() => handleShowOnlyLiked()}
            />
            <Button
              title={'Update All Photos'}
              color={'blue'}
              onPress={() => setUpdatePage(!updatePage)}
            />
          </View>
          <FlatList
            keyExtractor={(item: IList) => item.id}
            data={
              !!onlyLiked
                ? cards.filter((item: IList) => item.like === true)
                : cards
            }
            renderItem={({ item }) => (
              <Card
                item={item}
                handleAddLike={handleAddLike}
                handleDeleteCard={handleDeleteCard}
              />
            )}
          />
        </>
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: '50%',
    color: 'white',
  },
})
