import { Banner } from '../../components';
import './Donate.css'
import qr from './images/QR.png'

const Donate = () => {
  return ( 
    <>
      <Banner title="DONATE" 
      // imgPath="src/pages/Donate/images/banner.jpeg"
      ></Banner>
      <div className="donate center mt-4">
      <div className="grid-container">
        <div className="grid-item">
          <h2 className='mb-4'>QR</h2>
          <img src={qr} alt="" className="qr mx-auto" />
        </div>
        <div className='grid-item'>
          {/* <h1>OR</h1> */}
        </div>
        <div className="grid-item portrait:mt-6">
          <h2 className={'mb-4'}>BANK TRANSFER</h2>
          <div className="details">
            <h3>Bank</h3>
            <p>Bank Islam</p>
            <h3>Name</h3>
            <p>Surau Al-Iman</p>
            <h3>Account Number</h3>
            <p>12113010051540</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
 
export default Donate;