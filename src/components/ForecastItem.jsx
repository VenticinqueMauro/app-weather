import React from 'react'

export const ForecastItem = ({hora, icon, temp}) => {
    return (
        <div>
            <p>{hora}hs</p>
            <div className='flex items-center justify-center'>
                <img src={icon} alt='iconForecast' />
                <b className='text-lg'>{temp} °C</b>
            </div>
        </div>
    )
}
