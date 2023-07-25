import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return ( 
        <div className='header'>
            <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src="src/images/icons/fb.svg" alt="" id='fb-icon'/></Link>

            <div className="top-container">
                <Link to={'/'}><img className='logo' src="src/images/logo/Logo Horizontal.png" alt="Surau Al-Iman Logo " id='logo'/></Link>
                <img className='search-icon' src="src/images/icons/search.svg" alt="" id='search-icon' />
            </div>

            <div className='links'>
                <Link className='link' to={'/donate'}>DONATE</Link>
                <Link className='link' to={'/events'}>WHATS ON</Link>
                <Link className='link' to={'/announcements'}>ANNOUNCEMENTS</Link>
                <Link className='link' to={'/gallery'}>GALLERY</Link>
                <Link className='link' to={'/contact-us'}>CONTACT US</Link>
            </div>
        </div>
     );
}
 
export default Header;