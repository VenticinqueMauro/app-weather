import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, FORECAST, LANG_ES, UNITS_METRIC, URL_BASE } from '../api/api'
import { ForecastItem } from './ForecastItem'
import { Loader } from './Loader'

export const Forecast = ({ lat, lon, city }) => {

    const [forecast, setForecast] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [icon1, setIcon1] = useState('')
    const [hour1, setHour1] = useState('')

    const [icon2, setIcon2] = useState('')
    const [hour2, setHour2] = useState('')

    const [icon3, setIcon3] = useState('')
    const [hour3, setHour3] = useState('')

    const [icon4, setIcon4] = useState('')
    const [hour4, setHour4] = useState('')


    const callForecast = async () => {
        // await axios.get(`${URL_BASE}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}${UNITS_METRIC}${LANG_ES}`)
        await axios.get(`${URL_BASE}${FORECAST}${city}&appid=${API_KEY}${UNITS_METRIC}${LANG_ES}`)
            .then(r => {
                setForecast(r.data.list)
                setIsLoading(false)
            })
    }

    // console.log(forecast);


    useEffect(() => {
        callForecast()
    }, [city])

    useEffect(() => {

        if (forecast && isLoading === false) {

            setIcon1(`https://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`)
            setIcon2(`https://openweathermap.org/img/w/${forecast[1].weather[0].icon}.png`)
            setIcon3(`https://openweathermap.org/img/w/${forecast[2].weather[0].icon}.png`)
            setIcon4(`https://openweathermap.org/img/w/${forecast[3].weather[0].icon}.png`)

            setHour1(forecast[0].dt_txt.slice(11, -3))
            setHour2(forecast[1].dt_txt.slice(11, -3))
            setHour3(forecast[2].dt_txt.slice(11, -3))
            setHour4(forecast[3].dt_txt.slice(11, -3))

            console.log('ciudad', city);
            console.log('lat', lat);
            console.log('lon', lon);
        }

    }, [forecast])


    return (
        <div className='relative grid grid-cols-2 gap-5 place-content-center w-80 lg:w-auto mx-auto lg:flex lg:justify-evenly mt-5'>
            {
                !isLoading
                    ?
                    <>
                        <ForecastItem hora={hour1} icon={icon1} temp={forecast[0].main.temp.toFixed()} />
                        <div className='hidden lg:block lg:border lg:border-t-0 lg:border-stone-600 lg:h-[60px] lg:my-auto' />
                        <ForecastItem hora={hour2} icon={icon2} temp={forecast[1].main.temp.toFixed()} />
                        <div className='hidden lg:block lg:border lg:border-t-0 lg:border-stone-600 lg:h-[60px] lg:my-auto' />
                        <ForecastItem hora={hour3} icon={icon3} temp={forecast[2].main.temp.toFixed()} />
                        <div className='hidden lg:block lg:border lg:border-t-0 lg:border-stone-600 lg:h-[60px] lg:my-auto' />
                        <ForecastItem hora={hour4} icon={icon4} temp={forecast[3].main.temp.toFixed()} />
                    </>
                    :
                    <div className='absolute inset-0'>
                        <Loader />
                    </div>
            }

        </div>
    )
}
