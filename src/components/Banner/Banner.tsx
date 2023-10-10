import './Banner.css'
import bg from './images/surau.png'

const Banner = ({imgPath, text, title, style, blur=false}: {imgPath?:string, title?: string, text?: string|null , style?:React.CSSProperties, blur?:boolean}) => {
  return ( 
    <div className="banner bg-green-100" style={{
      // backgroundColor: 'white',
      backgroundImage: `url(${imgPath?imgPath:bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      ...style
    }}>
      <div className={`banner-overlay ${blur?'backdrop-blur-md':''}`}></div>
      <div className='banner-text center' style={{
        zIndex:1000
      }}>
        <h1 className='title font-bold sm:text-4xl' style={{
          marginBottom: 0
        }
        }>{title}</h1>
        <h2 className='subtitle text-xl mt-2' style={{  
          fontStyle: 'italic',
          color: 'white',
          fontWeight: 200,
          textAlign: 'left',

        }}>{text}</h2>
      </div>
    
    </div>
   );
}
 
export default Banner;  