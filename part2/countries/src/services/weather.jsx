import axios from 'axios'
const apiKey = '3fae82854e9c582aaa079c8900c20f35'

const getGeo = (city) => {
    const request = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
    return request.then(response => response.data)
}

const weatherUrl = ({ lon, lat }) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const req = axios.get(url)
    return req.then(response => response.data)
}

const weather = (temp) => {
    if (temp < 0) {
        return 'https://openweathermap.org/img/wn/13d@2x.png'
    } else if (temp > 0 && temp < 10) {
        return 'https://openweathermap.org/img/wn/02n@2x.png'
    } else if (temp > 10) {
        return 'https://openweathermap.org/img/wn/01d@2x.png'
    }
}

export default { getGeo, weatherUrl, weather }