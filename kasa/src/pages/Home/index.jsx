import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import logements from '../../data/logements.json'
import backgroundImage from '../../assets/Home-Banner.png'

function Home() {
  return (
    <div>
        <Banner backgroundImage={backgroundImage}title="Chez vous, partout et ailleurs" />
      <div className='card-box'>
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            picture={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}
export default Home
