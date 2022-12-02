import { useRef, useEffect, useState } from 'react';
import bitcoin from './bitcoin.webp'
import mastercard from './mastercard.webp'
import paypal from './paypal.webp'


const PaiementFacilities = ()=> {

    const sectionRef = useRef<HTMLElement>(null);

    const [sectionIsVisible, setSectionIsVisible] = useState<boolean>(false)

    useEffect(()=>{
        const observer: IntersectionObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSectionIsVisible(entry.isIntersecting)
        })
        observer.observe(sectionRef.current!)
    },[])

  return (
    <section ref={sectionRef} className="flex w-full justify-start items-center my-10">
            <img className={sectionIsVisible ? 'pl-3 h-[20px] duration-1000 delay-300 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5' : 'pl-3 h-[20px] duration-1000 delay-300 opacity-0 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5'} src={bitcoin} alt="moyen de paiement bitcoin" />
            <img className={sectionIsVisible ? 'pl-3 h-[20px] duration-1000 delay-300 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5' : 'pl-3 h-[20px] duration-1000 delay-300 opacity-0 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5'} src={mastercard} alt="moyen de paiement mastercard" />
            <img className={sectionIsVisible ? 'pl-3 h-[20px] duration-1000 delay-300 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5' : 'pl-3 h-[20px] duration-1000 delay-300 opacity-0 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5'} src={paypal} alt="moyen de paiement paypal" />
    </section>
  )
}

export default PaiementFacilities