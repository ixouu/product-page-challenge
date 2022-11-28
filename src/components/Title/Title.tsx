import React from "react";

interface titleProps {
    color?: string;
    position: "static" | "relative" | "absolute" | "sticky" | "fixed";
    fontSize: string;
}

const Title = ({ color, position, fontSize }: titleProps) => {
  return (
    <h1 className='font-cinzel absolute left-1/2 -translate-x-1/2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
    style={{ 
        color: color && `${color}`,
        position: `${position}`,
        fontSize: `${fontSize}`
        }}>
        YOUVERSACE
    </h1>
  )
}

export default Title