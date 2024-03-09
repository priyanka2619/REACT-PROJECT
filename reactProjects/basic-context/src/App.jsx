import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className="flex justify-center items-center h-screen">
        <Login />
        <Profile />

      </div>
    </UserContextProvider>
  )
}

export default App
