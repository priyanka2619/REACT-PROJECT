import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>ReduxToolkit Todo App</h1>
      <AddTodo />
      <TodoItems />
    </Provider>
  )
}

export default App
