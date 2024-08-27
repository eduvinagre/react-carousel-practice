import React, { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
  cycle?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ images, cycle = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (cycle ? images.length - 1 : prevIndex) : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? (cycle ? 0 : prevIndex) : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Canada's Carousel</h1>
      <div className="carousel-wrapper">
        <button
          className="carousel__button carousel__button--left"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>
        <div className="carousel">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel__image"
          />
        </div>
        <button
          className="carousel__button carousel__button--right"
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
