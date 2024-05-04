import React, { Children } from 'react'

const Title = ({className , title }) => {
  return (
<div className={`font-dmSans text-4xl font-bold pb-10 ${className}`}>{title}</div>
  )
}

export default Title