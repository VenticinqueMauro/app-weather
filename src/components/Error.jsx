import React from 'react'
import error from '../img/noEncuentro.png'

export const Error = () => {
    return (
        <div className='flex items-center w-[350px] justify-center mx-auto'>
            <p className='text-center text-lg'><b className='text-xl'>WHATS!?</b><br />
                intentalo nuevamente!</p>
            <img className='mx-auto' src={error} alt='imgError' width={150} />
        </div>
    )
}
