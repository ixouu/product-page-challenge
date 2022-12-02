import InfosContainer from '../InfosContainer/InfosContainer'
import PicturesContainer from '../PicturesContainer/PicturesContainer';
import BottomContainer from '../BottomContainer/BottomContainer';

const Main = () => {
  return (
    <main className='flex flex-col min-h-screen overflow-x-scroll text-gray-900 xl:mx-[10%]'>
      <div className='flex flex-col xl:flex-row'>
        <PicturesContainer/>
        <InfosContainer/>
      </div>
        <BottomContainer/>
    </main>
  )
}

export default Main