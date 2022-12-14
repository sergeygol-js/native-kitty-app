import React from 'react'
import { cardReducer } from './cardReducer'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

export const CardState = ({ children }: CardStateProp) => {
  const store = configureStore({ reducer: cardReducer })

  return <Provider store={store}>{children}</Provider>
}
