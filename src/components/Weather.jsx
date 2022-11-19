import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY, LANG_ES, UNITS_METRIC, URL_BASE, WEATHER } from "../api/api"
import { Description } from "./Description"
import { InputSearch } from "./InputSearch"
import { Loader } from "./Loader"
import logo from '../img/mauro.png'

export const Weather = () => {


    const [city, setcity] = useState('')
    const [weather, setweather] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const callApi = async (ciudad) => {
        await axios.get(`${URL_BASE}${WEATHER}${ciudad}&appid=${API_KEY}${UNITS_METRIC}${LANG_ES}`).then(r => {
            setweather(r.data)
            setIsLoading(false)
        })
    }


    useEffect(() => {

        city !== '' && callApi(city)

    }, [city])



    return (
        <div className="max-w-2xl mx-auto">
            {/* <h1 className="text-center m-2">Weather App</h1> */}
            <img className="mx-auto" src={logo} alt='logo' width={250}/>
            <InputSearch setcity={setcity} />
            {
                !isLoading && city !== ''
                ?
                <Description weather={weather} city={city} />
                :
                <Loader />
            }
        </div>
    )
}
