import { useState } from 'react'
import WeatherService from '../services/weather'

const Weather = ({ city }) => {
    const [lon, setLon] = useState('')
    const [lat, setLat] = useState('')
    const [temp, setTemp] = useState(0)
    const [windSpeed, setWindSpeed] = useState('')

    WeatherService
        .getGeo(city)
        .then(geo => {
            setLat(geo[0].lat)
            setLon(geo[0].lon)
        })

    const weatherShow = () => {
        WeatherService
          .weatherUrl({ lon, lat })
          .then(weather => {
            setTemp(weather.main.temp - 273.15)
            setWindSpeed(weather.wind.speed)
        })
    }

    weatherShow()

    return (
        <div>
            <p>temperature {temp} Celsius</p>
            <img src={WeatherService.weather(temp)} alt="weather image" />
            <p>wind {windSpeed} m/s</p>
        </div>
    )
}

export default Weather