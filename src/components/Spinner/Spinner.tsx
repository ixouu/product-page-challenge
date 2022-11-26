import React from "react";

const Spinner = () => {
	return (
        <>
        <div className="
        relative 
        min-h-[500px] 
        min-w-18
         flex 
         items-center 
         justify-center

         md:w-[50%]
         
         lg:w-[55%]
         lg:h-screen

         xl:w-[60%]
         ">
            <div className="
            h-14 
            w-14 
            animate-spin 
            rounded-full 
            border-4
            border-l-blue-900
            border-t-blue-800/90
            border-r-blue-700/80

            md:w-20
            md:h-20

            lg:w-32
            lg:h-32
            ">
		    </div>
            <span className='
            animate-spinner 
            font-cinzel 
            text-4xl
            absolute 
            left-1/2 
            top-1/2 
            -translate-x-[60%] 
            -translate-y-[30%] 
            
            md:text-5xl

            lg:text-7xl
            '>V</span>
        </div>
        </>
		
	);
};

export default Spinner;