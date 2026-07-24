import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
      <AddTodo/>
      <Todos></Todos>
    </Provider>
  )
}

export default App
