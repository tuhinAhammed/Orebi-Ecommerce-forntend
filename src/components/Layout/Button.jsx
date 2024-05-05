import React from 'react'

const Button = ({ className , text}) => {
  return (
    <button className={`btn px-[40px] py-[16px] bg-primary text-sm font-bold text-tertiary ${className}`}>{text}</button>
  )
}

export default Button