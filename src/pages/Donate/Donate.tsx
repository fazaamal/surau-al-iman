import { Banner } from '../../components';
import './Donate.css'

const Donate = () => {
  return ( 
    <>
      <Banner title="DONATE" imgPath="src/pages/Donate/images/banner.jpeg"></Banner>
      <div className="donate center">
      {/* <h1>MAKE A DONATION</h1> */}
      <div className="grid-container">
        <div className="grid-item">
          <h2>QR</h2>
          <img src="/src/pages/Donate/images/QR.png" alt="" className="qr" />
        </div>
        <div className='grid-item'>
          <h1>OR</h1>
        </div>
        <div className="grid-item">
          <h2>BANK TRANSFER</h2>
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