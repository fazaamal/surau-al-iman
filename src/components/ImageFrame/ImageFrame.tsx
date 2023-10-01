import { useEffect, useState } from 'react';
import style from './ImageFrame.module.css';

const ImageFrame = ({imgPath, ratio, styles,className, backgroundImage, objectFit='contain'}: {className?:string,imgPath: string, ratio:number, backgroundImage?:boolean, styles?: React.CSSProperties, objectFit?: 'cover'|'contain'}) => {
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
      <div className={`${style['image-container']} ${className}`} style={{paddingBottom: isMobile?`${3/4*100}%`:`${ratio*100}%`, backgroundImage: backgroundImage? `url(${imgPath})`:'', ...styles}}>
        <img src={imgPath} alt="" style={{margin: 0, objectFit, backdropFilter: backgroundImage?'blur(10px)':'', WebkitBackdropFilter:backgroundImage?'blur(10px':''}} />
      </div>
    </> 
  );
}
 
export default ImageFrame;
