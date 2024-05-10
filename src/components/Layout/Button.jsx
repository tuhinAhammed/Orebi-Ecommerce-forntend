import React from 'react'

const Button = ({ className , text}) => {
  return (
    <button className={`btn px-[40px] py-[16px] text-sm font-bold ${className}`}>{text}</button>
  )
}

export default Button