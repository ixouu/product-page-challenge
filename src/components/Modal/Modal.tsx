import ReactDOM from 'react-dom';

// onClose props unable to close the modal 
interface Props {
  onClose : () => void;
  picture : string;
}

const Modal = ({ onClose, picture }:Props) => {


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
      xl:w-1/2
      max-w-[90vw]
      md:max-h-[95vh]
      ">
        <img 
        src={picture} 
        alt="Prévisualisation de l'artcile"
        className='md:max-h-[95vh]'>
        </img>
      </div>
    </>, 
    document.getElementById('modal-root') as HTMLElement
  )
}

export default Modal