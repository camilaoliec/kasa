import React from 'react'
import Banner from '../../components/Banner'
import backgroundImage from '../../assets/Home-Banner.png'
import Gallery from '../../components/Gallery'

function Home() {
  return (
    <>
        <Banner backgroundImage={backgroundImage}title="Chez vous, partout et ailleurs" />
        <Gallery />
    </>
  )
}
export default Home
