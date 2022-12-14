import React from 'react'
import { MainLayout } from './src/MainLayout'
import { CardState } from './src/store/CardState'

export default function App() {
  return (
    <CardState>
      <MainLayout />
    </CardState>
  )
}
