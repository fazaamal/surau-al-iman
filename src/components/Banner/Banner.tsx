import './Banner.css'

const Banner = ({imgPath, text, title, style}: {imgPath?:string, title?: string, text?: string|null , style?:Object}) => {
  return ( 
    <div className="banner" style={{
      // backgroundColor: 'white',
      backgroundImage: `url(${imgPath?imgPath:"/src/components/Banner/images/surau.png"})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      ...style
    }}>
      <div className='banner-overlay'></div>
      <div className='banner-text' style={{
        zIndex:1000
      }}>
        <h1 className='title center' style={{
          fontWeight: 'bold',
          marginBottom: 0
        }
        }>{title}</h1>
        <h1 className='subtitle center' style={{  
          marginTop: 0
        }}>{text}</h1>
      </div>
      
      {/* <img id='banner-img' src={imgPath?imgPath:"src/components/Banner/images/surau.png"} alt="" style={style}/> */}
    </div>
   );
}
 
export default Banner;  