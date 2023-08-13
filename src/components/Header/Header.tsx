import { Link } from 'react-router-dom';
import './Header.css'
import { useEffect } from 'react';

const Header = ({onHeaderLoad}: {onHeaderLoad: Function}) => {
    useEffect(() => {
        setTimeout(() => {
          onHeaderLoad(); // Call the onHeaderLoad function when the header has loaded
        }, 0); // Simulating a 2-second loading time
      }, [onHeaderLoad]);


    const showSidebar = () => {
        const sidebar = document.getElementsByClassName('sidebar')[0] as HTMLElement;
        const overlay = document.getElementsByClassName('overlay')[0] as HTMLElement;
        const body = document.getElementsByTagName('body')[0] as HTMLElement;
        // sidebar.toggleAttribute('show');
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        body.classList.toggle('no-scroll');
    }

    return ( 
        <div className='header'>

            <div className="top-container">
                <Link to={'/'}><img className='logo' src="/src/images/logo/Logo Transparent.png" alt="Surau Al-Iman Logo " id='logo'/></Link>
                <img className='search-icon' src="/src/images/icons/search.svg" alt="" id='search-icon' />
                <img className='menu-icon' src="/src/images/icons/menu.svg" alt="" id='search-icon' onClick={showSidebar}/>
            </div>

            <div className="navigation">
                <div className='links center'>
                    <Link className='link' to={'/'}>HOME</Link>
                    <Link className='link' to={'/donate'}>DONATE</Link>
                    <Link className='link' to={'/events'}>WHATS ON</Link>
                    <Link className='link' to={'/announcements'}>ANNOUNCEMENTS</Link>
                    {/* <Link className='link' to={'/gallery'}>GALLERY</Link> */}
                    <Link className='link' to={'/contact-us'}>CONTACT US</Link>
                </div>

                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src="/src/images/icons/fb.svg" alt="" id='fb-icon'/></Link>
            </div>

            <div className='overlay' onClick={showSidebar} onScroll={showSidebar}></div>

            <div className="sidebar">
                <ul className='items'>
                    <li className='item' style={{
                            fontWeight: 'normal',
                            marginTop: '1rem',
                            marginBottom: '1.5rem'
                        }}>LINKS</li>
                    <li className='item'><Link className='link' onClick={showSidebar} to={'/'}>HOME</Link></li>
                    <li className='item'><Link className='link' onClick={showSidebar} to={'/donate'}>DONATE</Link></li>
                    <li className='item'><Link className='link' onClick={showSidebar} to={'/events'}>WHATS ON</Link></li>
                    <li className='item'><Link className='link' onClick={showSidebar} to={'/announcements'}>ANNOUNCEMENTS</Link></li>
                    <li className='item'><Link className='link' onClick={showSidebar} to={'/gallery'}>GALLERY</Link></li>
                    <li className='item'><Link className='link' onClick={showSidebar} to={'/contact-us'}>CONTACT US</Link></li>
                    <li className='item' style={{
                        fontWeight: 'normal',
                        marginTop: '2rem',
                        marginBottom: '1.5rem'
                    }}>SOCIALS</li>
                    <li className="item"><Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src="/src/images/icons/fb.svg" alt="" id='fb-icon'/></Link></li>

                    {/* <li className='item'><Link className='link' to="https://www.facebook.com/suraualimanpv8">FACEBOOK</Link></li> */}

                </ul>

            </div>

            </div>
     );
}
 
export default Header;