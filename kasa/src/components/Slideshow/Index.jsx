import React, { useState } from 'react';
import leftArrow from '../../assets/Arrow-left-Slideshow.png';
import rigthArrow from '../../assets/Arrow-right-Slideshow.png'

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }
  // Si le tableau images n'existe pas ou est vide, le composant affiche le message "Aucune image disponible" (aucune image disponible).
  if (!images || images.length === 0) {
    return <p>Aucune image disponible</p>
  }

  // S'il n'y a qu'une seule image, le composant restitue uniquement l'image sans flèches ni compteur.

  if (images.length === 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt="logement" className="slideshow__image" />
      </div>
    )
  }
  return (
    <div className="slideshow">
      <button
        onClick={prevSlide}
        className="slideshow__arrow slideshow__arrow--left"
      >
        <img src={leftArrow} alt="Slide précédent" />
      </button>
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
        className="slideshow__image"
      />
      <button
        onClick={nextSlide}
        className="slideshow__arrow slideshow__arrow--right"
      >
        <img src={rigthArrow} alt="Slide suivants" />
      </button>
      <div className="slideshow__counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  )
}
export default Slideshow
