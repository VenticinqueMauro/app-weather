import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY, LANG_ES, UNITS_METRIC, URL_BASE, WEATHER } from "../api/api"
import { Description } from "./Description"
import { InputSearch } from "./InputSearch"
import { Loader } from "./Loader"
import logo from '../img/mauro.png'
import { Error } from "./Error"
import { Time } from "./Time"

export const Weather = () => {


    const [city, setcity] = useState('')
    const [weather, setweather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)


    const callApi = async (ciudad) => {
        await axios.get(`${URL_BASE}${WEATHER}${ciudad}&appid=${API_KEY}${UNITS_METRIC}${LANG_ES}`).then(r => {
            setweather(r.data)
            setLat(r.data.coord.lat)
            setLon(r.data.coord.lon)
            setIsLoading(false)
            setError(false)
        }).catch(e => {
            console.log('error', e.name)
            setError(true)
            setIsLoading(true)
        })
    }

    useEffect(() => {

        city !== '' && callApi(city)

    }, [city])


    return (
        <div className="max-w-2xl mx-auto mb-20">
            <div className="flex items-end justify-center">
                <img src={logo} alt='logo' width={180} />
                <Time />
            </div>
            <InputSearch setcity={setcity} />
            {
                !isLoading && city !== '' && <Description weather={weather} city={city} lat={lat} lon={lon} />
                ||
                error && city !== '' && <Error />
                ||
                city === '' && <Loader />
            }
        </div>
    )
}


