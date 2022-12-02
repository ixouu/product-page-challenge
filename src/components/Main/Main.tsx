import InfosContainer from '../InfosContainer/InfosContainer'
import PicturesContainer from '../PicturesContainer/PicturesContainer';

const Main = () => {
  return (
    <main className='flex flex-col min-h-screen overflow-x-scroll md:flex-row bg-gray-100 text-gray-900'>
        <PicturesContainer/>
        <InfosContainer/>
    </main>
  )
}

export default Main