import { useRef, useEffect, useState } from 'react';
import bitcoin from './bitcoin.webp'
import mastercard from './mastercard.webp'
import paypal from './paypal.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';


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
      
      <LazyLoadImage src={bitcoin} alt={"moyen de paiement bitcoin"} effect="opacity" height={"20px"} className={sectionIsVisible ? 'pl-3 duration-1000 delay-300 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5' : 'pl-3  duration-1000 delay-300 opacity-0 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5'}></LazyLoadImage>

      <LazyLoadImage src={mastercard} alt={"moyen de paiement mastercard"} effect="opacity" height={"20px"} className={sectionIsVisible ? 'pl-3 duration-1000 delay-300 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5' : 'pl-3  duration-1000 delay-300 opacity-0 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5'}></LazyLoadImage>

      <LazyLoadImage src={paypal} alt={"moyen de paiement paypal"} effect="opacity" height={"20px"} className={sectionIsVisible ? 'pl-3 duration-1000 delay-300 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5' : 'pl-3  duration-1000 delay-300 opacity-0 xl:h-[30px] 2xl:h-[45px] xl:pl-4 2xl:pl-5'}></LazyLoadImage>

    </section>
  )
}

export default PaiementFacilities