import ReactDOM from 'react-dom';
import {useRef} from 'react'

// onClose props unable to close the modal 
interface Props {
  onClose : () => void;
  picture : string;
}

const Modal = ({ onClose, picture }:Props) => {

  const magnifyingGlassRef = useRef<HTMLDivElement>(null)
  
   const handleMove = (e :React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    magnifyingGlassRef.current!.style.left = e.clientX + "px";
    magnifyingGlassRef.current!.style.top = e.clientY + 'px';
    magnifyingGlassRef.current!.style.backgroundSize = (1200 * 2)+"px";
    magnifyingGlassRef.current!.style.backgroundPosition = (-e.currentTarget.offsetLeft*2)+'px'+(-e.currentTarget.offsetTop*2)+'px'
  }


  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className='backdrop-blur-md w-full h-full fixed bg-cover bg-no-repeat z-200 top-0 '>
      </div>
      <div 
      onClick={onClose} 
      className="
      absolute 
      top-[50%]
      left-[50%] 
      -translate-x-[50%] 
      -translate-y-[50%] 
      w-screen 
      md:w-3/4
      xl:w-[1200px]
      ">
        <img 
        onMouseMove={(e) => handleMove(e)}
        src={picture} 
        alt="Prévisualisation de l'artcile"
        className='w-screen xl:max-w-full xl:w-[1200px] '>
        </img>
        <div id='magnifyingGlass' ref={magnifyingGlassRef} className='
        w-[150px] 
        h-[150px]
        border-white
        border-2 
        rounded-full
        absolute
        translate-x-[-50%]
        translate-y-[-50%]
        '
        style={{ backgroundImage: `url(${picture})`,backgroundRepeat:"no-repeat", backgroundSize:"1200px auto"}}
        ></div>
      </div>
    </>, 
    document.getElementById('modal-root') as HTMLElement
  )
}

export default Modal