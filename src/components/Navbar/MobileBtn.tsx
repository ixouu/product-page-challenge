import React from 'react';
import { useMobileMenuContext } from '../../context/MobileMenu'
import MobileMenu from './MobileMenu';

const MobileBtn: React.FC = () => {

    const {isOpen, setIsOpen} = useMobileMenuContext();

    // toggle Mobile menu 
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

  return (
    <>
    <button className='bg-transparent h-10' onClick={(e) => handleClick(e)}>
        <div className="w-5 bg-black h-0.5 mb-1"></div>
        <div className="w-3 bg-black h-0.5"></div>
    </button>
    {isOpen && <MobileMenu />}
    </>
  )
}

export default MobileBtn