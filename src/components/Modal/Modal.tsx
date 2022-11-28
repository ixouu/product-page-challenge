import ReactDOM from 'react-dom';

// onClose props unable to close the modal 
interface ModalProps {
  onClose : () => void;
  picture : string;
}

const Modal = ({ onClose, picture }:ModalProps) => {


  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} id='modalBlur' className='backdrop-blur-md w-full h-full fixed bg-cover bg-no-repeat z-2000 top-0 '>
      </div>
      <div 
      onClick={onClose}
      id='modalImgContainer'
      className="
      fixed
      top-[50%]
      left-[50%] 
      -translate-x-1/2
      -translate-y-1/2
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