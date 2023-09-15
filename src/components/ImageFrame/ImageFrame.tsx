import { useEffect, useState } from 'react';
import style from './ImageFrame.module.css';

const ImageFrame = ({imgPath, ratio, styles, objectFit='contain'}: {imgPath: string, ratio:number, styles?: React.CSSProperties, objectFit?: 'cover'|'contain'}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Define a media query
  const mediaQuery = window.matchMedia('(max-width: 600px)');

  // Function to handle the media query change
  const handleMediaQueryChange = (e:any) => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    // Add a listener to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    // Initial check of the media query
    setIsMobile(mediaQuery.matches);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return ( 
    <> 
      <div className={style['image-container']} style={{paddingBottom: isMobile?`${1*100}%`:`${ratio*100}%`, ...styles}}>
        <img src={imgPath} alt="" style={{margin: 0, objectFit}} />
      </div>
    </> 
  );
}
 
export default ImageFrame;
