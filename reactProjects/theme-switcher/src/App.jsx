import ThemeBtn from './components/Card'
import Card from './components/ThemeBtn'
import { ThemeProvider } from './context/Theme'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light');
  const lightMode = () => {
    setTheme('light')
  };
  const darkMode = () => {
    setTheme('dark')
  }

  useEffect(() => {
    const tagName = document.querySelector('html').classList
    tagName.remove('light', 'dark')
    tagName.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{ theme, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
