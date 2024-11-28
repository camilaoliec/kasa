import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Slideshow from '../../components/Slideshow/'
import starAcitve from '../../assets/StarActive-FicheLogement.png'
import starInactive from '../../assets/StarInactive-FicheLogement.png'
import Collapse from '../../components/Collapse'

function FicheLogement() {
  const [data, setData] = useState([])
  const { id } = useParams()

  const fetchData = async () => {
    try {
      const response = await fetch('/logements.json')
      if (!response.ok) throw new Error('Erreur lors du chargement des données')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Erreur lors de la recherche des données :', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const appartement = data.find((apt) => apt.id === id)
  console.log('appartement', appartement)

  if (!appartement) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className="fiche-logement">
        <Slideshow images={appartement.pictures} />
        <div className="fiche-logement__info">
          {/* Left: Title, Location and Tags */}
          <div className="fiche-logement__info-left">
            <h1 className="fiche-logement__title">{appartement.title}</h1>
            <p className="fiche-logement__location">{appartement.location}</p>
            <div className="fiche-logement__tags">
              {appartement.tags.map((tag, index) => (
                <div key={index} className="fiche-logement__tag">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Rigth: Host e Rating */}
          <div className="fiche-logement__info-right">
            <div className="fiche-logement__host">
              <p className="fiche-logement__host-name">
                {appartement.host.name}
              </p>
              <img
                src={appartement.host.picture}
                alt={appartement.host.name}
                className="fiche-logement__host-picture"
              />
            </div>
            <div className="fiche-logement__rating">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={i}
                  src={i < appartement.rating ? starAcitve : starInactive}
                  alt={i < appartement.rating ? 'Étoile pleine' : 'Étoile vide'}
                  className={`fiche-logement__star ${
                    i < appartement.rating ? 'active' : 'inactive'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="sections">
          <Collapse title="Description">
            <p>{appartement.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            {appartement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Collapse>
        </div>
      </div>
    </>
  )
}

FicheLogement.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
}

export default FicheLogement
