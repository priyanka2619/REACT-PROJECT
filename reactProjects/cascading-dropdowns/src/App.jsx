import { useState } from 'react'
import './App.css'
import { CountryApi } from './CountryApi'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
    setSelectedState('')
    setSelectedCity('')
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
    setSelectedCity('')
  }

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value)
  }

  return (
    <>

      <span>Country: </span>
      <select id='country' value={selectedCountry} onChange={handleCountryChange} style={{ marginRight: '10px' }}>
        {
          CountryApi.map((country) => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))
        }
      </select>


      {
        selectedCountry &&
        <>
          <span>State: </span>
          <select id='state' value={selectedState} onChange={handleStateChange} style={{ marginRight: '10px' }}>
            {
              CountryApi.find(country => country.code == selectedCountry).regions.map((state) => (
                <option key={state.name} value={state.name}>{state.name}</option>
              ))
            }
          </select>
        </>
      }

      {
        selectedCountry && selectedState &&
        <>
          <span>City: </span>
          <select id='city' value={selectedCity} onChange={handleCityChange}>
            {
              (CountryApi.find((country) => country.code == selectedCountry).regions.find((state) => state.name == selectedState)).cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))
            }
          </select>
        </>
      }
    </>
  )
}


export default App
