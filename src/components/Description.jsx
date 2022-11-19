import React, { useEffect, useState } from 'react'
import 'animate.css'
import { DateTime } from "luxon";
import { Forecast } from './Forecast';


export const Description = ({ weather, city }) => {

    const [date, setDate] = useState(null)
    const [iconURL, setIconURL] = useState('')

    let hoy = DateTime.now().setLocale("es").toFormat('cccc, T')

    // const iconWeather = weather.weather[0].icon
    // const URL_ICONS = `https://openweathermap.org/img/w/${icon}.png`


    useEffect(() => {
        setDate(hoy)
        weather && setIconURL(`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    }, [weather])


    return (
        <div className='text-center animate__animated animate__zoomIn'>
            <h2 className='text-lg  text-center' > {weather && weather.name
            } / {weather && weather.sys.country}</h2>
            <h3 className='text-lg text-center'><span className='capitalize'>{date && date}</span>hs</h3>
            <hr className='w-48 mx-auto border-stone-600 m-3' />
            <div className='flex justify-evenly items-center mt-4'>
                <div className='text-center'>
                    <p className='text-5xl lg:text-6xl font-semibold'>{weather && weather.main.temp.toFixed()} °C</p>
                    <div className='flex justify-center items-center'>
                        <img className='' src={iconURL} alt='ClimaIcon' width={50} />
                        <h3 className='capitalize'>{weather.weather[0].description}</h3>
                    </div>
                </div>
                <div className='text-sm lg:text-base text-start'>
                    <p><b>ST</b> {weather && weather.main.feels_like.toFixed(1)}°C</p>
                    <p><b>Viento:</b> {weather && weather.wind.speed} m/s</p>
                    <p><b>Humedad:</b> {weather && weather.main.humidity}%</p>
                    <p><b>Presión: </b>{weather && weather.main.pressure} hPa</p>
                </div>
            </div>
            <Forecast city={city} />
        </div >
    )
}
