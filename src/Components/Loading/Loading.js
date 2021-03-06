import React from 'react'
import './Loading.css'
import LoadingDots from '../LoadingDots/LoadingDots'

const Loading = () => {
    return (
        <div className='loader'>
            <LoadingDots />
        </div>
    )
}

export default Loading