import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import User from './User'
import Profile from './Profile'

function App() {
  return (
    <UserContextProvider>
      <User></User>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App