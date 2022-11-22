import PicturesContainer from '../../PicturesContainer/PicturesContainer'
import InfosContainer from '../InfosContainer/InfosContainer'

const Main = () => {
  return (
    <main className='
    flex
    flex-col
    min-h-screen
    overflow-x-scroll

    md:flex-row
    '>
        <PicturesContainer/>
        <InfosContainer/>
    </main>
  )
}

export default Main