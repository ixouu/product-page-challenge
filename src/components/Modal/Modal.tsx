import ReactDOM from 'react-dom';

// onClose props unable to close the modal 
interface ModalProps {
  onClose : () => void;
  picture : string;
}

const Modal = ({ onClose, picture }:ModalProps) => {

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} id='modalBlur' className='backdrop-blur-md w-full h-full fixed bg-cover bg-no-repeat top-0 '>
      </div>
      <div 
      onClick={onClose}
      id='modalImgContainer'
      className="fixed  border-2 border-zinc-900 w-fit rounded animate-imgInModal origin-top-left">
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