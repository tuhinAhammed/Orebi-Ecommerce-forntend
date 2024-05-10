import React from 'react'

const Input = ({inputTitle , inputPlaceholder , inpurtType }) => {
    return (
        <div>
            <p className='text-base text-primary font-dmSans '>{inputTitle}</p>
            <input type={inpurtType} className=' text-sm text-secondary font-dmSans focus-visible:outline-none' placeholder={inputPlaceholder} />
        </div>
    )
}

export default Input