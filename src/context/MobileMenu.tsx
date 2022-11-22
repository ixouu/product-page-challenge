import React, { createContext, useContext, useState } from "react";

interface MobileMenuContextType {
    isOpen: boolean,
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>,
}


const Context = createContext< MobileMenuContextType >({
    isOpen: false,
    setIsOpen : useState,
});

const MobileMenuContext = ({ children }: any) => {
    
    const [isOpen, setIsOpen] = useState< boolean >(false);
    
    
    return (
        <Context.Provider  value={{ isOpen, setIsOpen }}>
            {children}
        </Context.Provider>
    )
}


const useMobileMenuContext = () => useContext(Context)

export {MobileMenuContext, useMobileMenuContext }