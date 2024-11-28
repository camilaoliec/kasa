import React from 'react'
import Banner from '../../components/Banner'
import backgroundImage from '../../assets/Home-Banner.png'
import Gallery from '../../components/Gallery'

function Home() {
  return (
    <div className='home-container'>
      <Banner backgroundImage={backgroundImage}title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  )
}
export default Home
