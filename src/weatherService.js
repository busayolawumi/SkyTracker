const API_KEY = '3007613b273257b9ed0cd77318572f5d'

const makeIconURL = (iconID) => `http://openweathermap.org/img/wn/${iconID}@2x.png`

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data);

    const{
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind:{ speed },
        sys: { country },
        name,
} = data;

const { description, icon} = weather[0]

    return{
        description, iconURL: makeIconURL(icon), speed, humidity, feels_like, temp, temp_min, temp_max, pressure, country, name
    }
}

export { getFormattedWeatherData }
