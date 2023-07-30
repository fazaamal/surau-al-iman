import './Banner.css'

const Banner = ({imgPath, text, style}: {imgPath:string, text?: string , style?:Object}) => {
  return ( 
    <div className="banner">
      <div className='banner-text'>
        <h1>{text}</h1>
      </div>
      <div className='banner-overlay'></div>
      <img id='banner-img' src={imgPath} alt="" style={style}/>
    </div>
   );
}
 
export default Banner;