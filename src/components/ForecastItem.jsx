import React from 'react'

export const ForecastItem = ({hora, icon, temp}) => {
    return (
        <div>
            <p className='text-[#0099ff]'>{hora}hs</p>
            <div className='flex items-center justify-center'>
                <img src={icon} alt='iconForecast' />
                <b className='text-lg text-amber-400'>{temp} °C</b>
            </div>
        </div>
    )
}
