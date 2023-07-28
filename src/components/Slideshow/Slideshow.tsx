import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import the CSS file for slideshow styles

const Slideshow = ({ images, style }: { images: string[], style?: Object }) => {
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
    <div className="slideshow" style={style}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentImageIndex ? 'visible' : ''}`}
        />
      ))}

      <div className="buttons">
        <button onClick={goToPrevSlide} className="prevButton" 
        style={
          images.length === 1 ?{
          display: 'none'
        }: {}
        }/>
        <button onClick={goToNextSlide} className="nextButton" 
        style={
          images.length === 1 ?{
          display: 'none'
        }: {}} />
      </div>
    </div>
  );
};

export default Slideshow;
