import { Banner } from "../../components";
import picture from '../Home/images/about/amir.jpg';
import style from './AboutUs.module.css';

const AboutUs = () => {
  return ( 
      <>
        <Banner title="ABOUT US"></Banner>
        <div className={`${style['about-container']} center`}>

            <div className={style['grid-item']}>
                <img src={picture} alt="" />
                {/* <ImageFrame objectFit='cover' styles={{borderRadius: '6rem', maxHeight:'200px', maxWidth:'400px'}} imgPath="/src/pages/Home/images/about/amir.jpg" ratio={1}></ImageFrame> */}
            </div>
            <div className={style['grid-item']}>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor velit imperdiet nibh rutrum, vel consequat nibh dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta metus eget mauris rutrum facilisis. Quisque eget augue fermentum, pharetra quam ut, porttitor ligula. Ut id urna nec turpis condimentum aliquet. Donec ut mi a urna feugiat suscipit eget eu neque. In molestie ante volutpat, molestie felis eleifend, tristique eros. Fusce sit amet ex a mauris condimentum tinci</p>
            </div>
            
            <div className={style['grid-item']}>
                <h1>OUR LOCATION</h1>
                <p style={{
                    textAlign: 'center',
                }}>We are situated at the ground floor of the PV8 condominium, near the Block B lobby.</p>
            </div>
            <div className={style['grid-item']} style={{
                display: 'flex',
                justifyContent: 'center',
            }} >
                <iframe
                    className={'w-full rounded-xl h-[300px]'}
                    // style={{"border":"0", width: '90%', height: '300px'}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBhPhyRynHm41oSEiC6pQ6GBPrXysDwkJE
                        &q=PV8, Kuala+Lumpur">
                </iframe>
            </div>

        </div>
      </>

  )}
 
export default AboutUs;