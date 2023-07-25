import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import the CSS file for slideshow styles

const Slideshow = ({ images, height }: { images: string[], height: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow" style={{
      height
    }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentImageIndex ? 'visible' : ''}`}
        />
      ))}

      <button onClick={goToPrevSlide} className="prevButton">
        &#8249;
      </button>
      <button onClick={goToNextSlide} className="nextButton">
        &#8250;
      </button>
    </div>
  );
};

export default Slideshow;
