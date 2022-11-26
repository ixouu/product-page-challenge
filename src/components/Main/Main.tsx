import {lazy} from 'react';

import InfosContainer from '../InfosContainer/InfosContainer'
const PicturesContainer = lazy (() => import('../../PicturesContainer/PicturesContainer'))

const Main = () => {
  return (
    <main className='
    flex
    flex-col
    min-h-screen
    overflow-x-scroll
    z-90
    md:flex-row
    '>
        <PicturesContainer/>
        <InfosContainer/>
    </main>
  )
}

export default Main