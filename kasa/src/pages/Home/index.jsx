import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import logements from '../../data/logements.json'

function Home() {
  return (
    <div>
        <Banner title="Chez vous, partout et ailleurs" />
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
