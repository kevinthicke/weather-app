const apiKey = '155e62c19b94f386f3ebcadddbf8d7a8';
const url = "http://api.openweathermap.org/data/2.5/"
city = "London"

const urlWeather = city => `${url}weather?q=${city}&APPID=${apiKey}`;

const fetch = require('node-fetch');

fetch(urlWeather(city)).then(res => res.json()).then(data => console.log(data));