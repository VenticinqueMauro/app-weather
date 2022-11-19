import React, { useEffect, useState } from 'react'
import { DateTime } from "luxon";


export const Time = () => {

    const [date, setDate] = useState(null)

    let hoy = DateTime.now().setLocale("es").toFormat('cccc, T')

    useEffect(() => {
        setDate(hoy)
    },[])

    return (
        <h3 className='text-lg text-center pb-3 text-[#0099ff]'>
            <span className='capitalize'>
                {date && date}
            </span>
            hs
        </h3>
    )
}
