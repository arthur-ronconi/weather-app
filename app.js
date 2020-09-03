require('dotenv').config()
const fetch = require('node-fetch')
const apiKey = process.env.API_KEY

const getData = (location) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log((data.main.temp - 273).toFixed(1)))
    .catch(err => console.log(err))
}

getData('colatina')






// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY ---