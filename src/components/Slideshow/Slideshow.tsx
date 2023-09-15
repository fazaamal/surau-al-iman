import { useState, useEffect } from 'react';
import style from './Slideshow.module.css';

interface Slide {
  imgPath: string;
  title?: string;
  description?: string;
}

const Slideshow = ({ images, styles }: { images: string[], styles?: Object }) => {
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
    <div className={style['slideshow']} style={styles}>
      <h1 style={{color:'white'}}>Testing 123</h1>
      <h3 style={{color:'white'}}>Description 123</h3>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`${style['slide']} ${index === currentImageIndex ? style['visible'] : ''}`}
        />
      ))}

      <div className={style['buttons']}>
        <button onClick={goToPrevSlide} className={style['prevButton']} 
        style={
          images.length === 1 ?{
          display: 'none'
        }: {}
        }/>
        <button onClick={goToNextSlide} className={style['nextButton']} 
        style={
          images.length === 1 ?{
          display: 'none'
        }: {}} />
      </div>
    </div>
  );
};

export default Slideshow;
