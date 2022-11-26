import React from 'react'

interface SizesProps {
    options: {size:string, available:boolean}[]
}

const Sizes = ({ options }:SizesProps) => {
  return (
    <>
    {options.map((option, index) =>{
        return <option
        key={index}
        value={option.size}
        disabled={!option.available}
        >{option.size}
        
        </option>
    })}
    </>
  )
}

export default Sizes