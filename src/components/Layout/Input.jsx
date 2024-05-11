import React from 'react'

const Input = ({inputTitle , inputPlaceholder , inpurtType , className}) => {
    return (
        <div className={`${className}`}>
            <p className='text-base text-primary font-dmSans font-bold'>{inputTitle}</p>
            <input type={inpurtType} className=' text-sm text-secondary font-dmSans focus-visible:outline-none' placeholder={inputPlaceholder} />
        </div>
    )
}

export default Input