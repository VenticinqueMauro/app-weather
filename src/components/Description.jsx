import React, { useEffect, useState } from 'react'
import 'animate.css'
// import { DateTime } from "luxon";
import { Forecast } from './Forecast';


export const Description = ({ weather, city, lat, lon}) => {

    const [iconURL, setIconURL] = useState('')
    
    // const [date, setDate] = useState(null)
    // let hoy = DateTime.now().setLocale("es").toFormat('cccc, T')

    useEffect(() => {
        // setDate(hoy)
        weather && setIconURL(`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    }, [weather])

    return (
        <div className='text-center animate__animated animate__fadeIn'>
            <h2 className='text-lg  text-center ' > {weather && weather.name
            } / {weather && weather.sys.country}</h2>
            {/* <h3 className='text-lg text-center'><span className='capitalize'>{date && date}</span>hs</h3> */}
            <hr className='w-20 mx-auto border-stone-600 m-3' />
            <h3 className='text-stone-600'>Actual</h3>
            <div className='flex justify-evenly items-center mt-4'>
                <div className='text-center '>
                    <p className='text-5xl lg:text-6xl font-semibold text-amber-400'>{weather && weather.main.temp.toFixed()} °C</p>
                    <div className='flex justify-center items-center'>
                        <img className='' src={iconURL} alt='ClimaIcon' width={50} />
                        <h3 className='capitalize text-sm lg:text-base'>{weather.weather[0].description}</h3>
                    </div>
                </div>
                <div className='text-xs lg:text-base text-start '>
                    <p>ST {weather && weather.main.feels_like.toFixed(1)}°C</p>
                    <p>Viento: {weather && weather.wind.speed} km/h</p>
                    <p>Humedad: {weather && weather.main.humidity}%</p>
                    <p>Presión: {weather && weather.main.pressure} hPa</p>
                </div>
            </div>
            <hr className='w-44 mx-auto border-stone-600 m-3 ' />
            <h3 className='text-stone-600'>Pronóstico</h3>

            <Forecast city={city} lat={lat} lon={lon} />
        </div >
    )
}
