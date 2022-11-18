import React, { useEffect, useState } from 'react'
import 'animate.css'
import { DateTime } from "luxon";


export const Description = ({ weather }) => {

    let hoy = DateTime.now().setLocale("es").toFormat('cccc, T')

    const [date, setDate] = useState(null)
    const [icon, setIcon] = useState(null)

    const iconWeather = weather.weather[0].icon
    const URL_ICONS = `https://openweathermap.org/img/w/${iconWeather}.png`


    useEffect(() => {
        setDate(hoy)
        weather && setIcon(URL_ICONS)
    }, [])


    return (
        <div className='text-center animate__animated animate__zoomIn'>
            <h2 className='text-xl text-center '>{weather && weather.name} / {weather && weather.sys.country}</h2>
            <div className='flex justify-evenly items-center mt-4'>
                <div className='text-start'>
                    <p className='text-7xl font-semibold '>{weather && weather.main.temp.toFixed()} °C</p>
                    <p className=''>ST {weather && weather.main.feels_like.toFixed(1)}°C</p>
                    <p className=''>Viento: {weather && weather.wind.speed} m/s</p>
                </div>
                <div className='text-md a'>
                    <h3 className='text-2xl'><span className='capitalize'>{date && date}</span>hs</h3>
                    <div className='flex justify-center items-center'>
                        <img className='a' src={icon} alt='ClimaIcon' width={60} />
                        <h3 className='capitalize'>{weather.weather[0].description}</h3>
                    </div>
                    <p className=''>Humedad: {weather && weather.main.humidity}%</p>
                    <p className=''>Presión: {weather && weather.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    )
}
