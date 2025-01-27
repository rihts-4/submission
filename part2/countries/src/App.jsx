import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import CountryService from './services/countries'
import Country from './components/Country'
import WeatherService from './services/weather'

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [show, setShow] = useState(null)

  useEffect(() => {
    console.log('effect run, currently searching for ', country)

    if (country) {
      console.log('fetching countries...')
      CountryService
        .getAll()
        .then(all => {
          setCountries(all.filter(c => c.name.common.toLowerCase().includes(value.toLowerCase())))
          console.log('done')
        })
    }
  }, [country])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountry(value)
    setShow(null)
  }

  const showCountry = (name) => {
    CountryService
      .show(name)
      .then(country => {
        setShow(country)
      })
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries <input value={value} onChange={handleChange} />
        <button type="submit">search</button>
      </form>
      <Countries countries={countries} onclick={showCountry} />
      <Country country={show} />
    </div>
  )
}

export default App