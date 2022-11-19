import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, FORECAST, LANG_ES, UNITS_METRIC, URL_BASE } from '../api/api'
import { ForecastItem } from './ForecastItem'
import { Loader } from './Loader'

export const Forecast = ({ city }) => {

    const [forecast, setForecast] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [icon12, SetIcon12] = useState('')
    const [icon15, SetIcon15] = useState('')
    const [icon18, SetIcon18] = useState('')
    const [icon21, SetIcon21] = useState('')

    const callForecast = async () => {
        await axios.get(`${URL_BASE}${FORECAST}${city}&appid=${API_KEY}${UNITS_METRIC}${LANG_ES}`)
            .then(r => {
                setForecast(r.data.list)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        callForecast()
    }, [city])

    useEffect(() => {

        forecast && isLoading === false && SetIcon12(`https://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`)
        forecast && isLoading === false && SetIcon15(`https://openweathermap.org/img/w/${forecast[1].weather[0].icon}.png`)
        forecast && isLoading === false && SetIcon18(`https://openweathermap.org/img/w/${forecast[2].weather[0].icon}.png`)
        forecast && isLoading === false && SetIcon21(`https://openweathermap.org/img/w/${forecast[3].weather[0].icon}.png`)

    }, [forecast])


    return (
        <div className='relative grid grid-cols-2 gap-2 place-content-center w-80 lg:w-auto mx-auto lg:flex lg:justify-evenly mt-5'>
            {
                !isLoading
                    ?
                    <>
                        <ForecastItem hora={'12:00'} icon={icon12} temp={forecast[0].main.temp.toFixed()} />
                        <ForecastItem hora={'15:00'} icon={icon15} temp={forecast[1].main.temp.toFixed()} />
                        <ForecastItem hora={'18:00'} icon={icon18} temp={forecast[2].main.temp.toFixed()} />
                        <ForecastItem hora={'21:00'} icon={icon21} temp={forecast[3].main.temp.toFixed()} />
                    </>
                    :
                    <div className='absolute inset-0'>
                        <Loader />
                    </div>
            }

        </div>
    )
}
