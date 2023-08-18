import { Link } from "react-router-dom";
import { Banner } from "../../components";
import style from './ContactUs.module.css';

const ContactUs = () => {
  return ( 
    <>
      <Banner title="CONTACT US"></Banner>
      <div className={`${style['contact-us']}`}>
        <div className={style['grid-container']}>
          <div className={style["grid-item"]}>
            {/* <h1>
              Email
            </h1> */}
            <img src="/src/pages/ContactUs/images/email.svg" alt="" />
            <p>
              suraualimanpv8@gmail.com
            </p>
          </div>
          <div className={style["grid-item"]}>
            <img src="/src/pages/ContactUs/images/phone.svg" alt="" />
            <p>
              Chairman of Surau Al-Iman <br />
              +60123456789 
            </p>
          </div>
          <div className={style["grid-item"]}>
            <h1>
              Socials
            </h1>
              <div className={style["socials-container"]}>
                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className={style['social-media-icon']} src="/src/images/icons/yt.svg" alt="" id='fb-icon'/></Link>
                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className={style['social-media-icon']} src="/src/images/icons/fb.svg" alt="" id='fb-icon'/></Link>
                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className={style['social-media-icon']} src="/src/images/icons/ig.svg" alt="" id='fb-icon'/></Link>
              </div>
          </div>
        </div>

      </div>
    </>
   );
}
 
export default ContactUs;