import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  const colorList = ['red', 'blue', 'lavender ', 'green', 'yellow', 'purple', 'olive', 'blue', 'Black', 'grey', 'orange'];

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            {
              colorList.map((buttonColor, index) => (
                <button
                  key={index}
                  className='rounded-full px-4 py-1 text-white shadow-lg'
                  style={{ backgroundColor: buttonColor }}
                  onClick={() => setColor(buttonColor)}>
                  {buttonColor.charAt(0).toUpperCase() + buttonColor.slice(1)}
                </button>

              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
