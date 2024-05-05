import React from 'react'

const Badge = ({className , title}) => {
  return (
    <div className={`itemArrived px-6 py-1 text-tertiary rounded-[2px] font-sm bg-primary absolute top-[5%] left-[5%] z-[999] ${className}`}>{title}</div>
  )
}

export default Badge