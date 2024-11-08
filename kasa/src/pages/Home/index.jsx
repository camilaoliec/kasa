import React from 'react'
import Banner from '../../components/Banner'
import backgroundImage from '../../assets/Home-Banner.png'

function Home() {
  return (
    <div>
        <Banner backgroundImage={backgroundImage}title="Chez vous, partout et ailleurs" />
    </div>
  )
}
export default Home
