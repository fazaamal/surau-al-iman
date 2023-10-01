import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from 'react';
import { Paper, Transition } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import logo from '../../images/logo/Logo Transparent.png';
import { fb, ig, tg, menu } from '../../images/icons';


const Header = () => {
    // useEffect(() => {
    //     setTimeout(() => {
    //       onHeaderLoad(); // Call the onHeaderLoad function when the header has loaded
    //     }, 0); // Simulating a 2-second loading time
    //   }, [onHeaderLoad]);

    const [opened, setOpened] = useState(false);
    const clickOutsideRef = useClickOutside(() => setOpened(false));

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

            <div className="top-container center">
                <div className="logo-container">
                <Link to={'/'}><img className='logo' src={logo} alt="Surau Al-Iman Logo " id='logo'/></Link>
                </div>
                <div className="socials-container hidden sm:flex">  
                    <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src={fb} alt="" id='fb-icon'/></Link>
                    <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src={tg} alt="" id='fb-icon'/></Link>
                    <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src={ig} alt="" id='fb-icon'/></Link>
                </div>

                {/* <img className='search-icon' src="/src/images/icons/search.svg" alt="" id='search-icon' /> */}

                <img className='menu-icon block sm:hidden' src={menu} alt="" id='search-icon' onClick={showSidebar}/>
            </div>

            <div className="navigation">
                <div className='links center'>
                    <Link className='link' to={'/'}>HOME</Link>
                    <Link className='link' to={'/events'}>WHAT'S ON</Link>
                    <Link className='link' to={'/announcements'}>ANNOUNCEMENTS</Link>
                    <Link className='link' to={'/donate'}>DONATE</Link>
                    <div className='link' style={{position:'relative'}} onMouseOver={()=>{setOpened(true)}} onMouseOut={()=>setOpened(false)} onClick={()=>setOpened(true)}>
                        ABOUT US
                        <Transition
                            mounted={opened}
                            transition={{
                                in: { opacity: 1, transform: 'scaleY(1)' },
                                out: { opacity: 0, transform: 'scaleY(0)' },
                                common: { transformOrigin: 'top'},
                                transitionProperty: 'transform, opacity',
                            }}
                            duration={200}
                            timingFunction="ease"
                        >
                            {(transitionStyle) => (
                            <Paper

                                shadow="xl"
                                p="sm"
                                pos="absolute"
                                top={'100%'}     
                                left={0}
                                right={0}
                                radius={0}
                                ref={clickOutsideRef}
                                
                                style={{ ...transitionStyle, zIndex: 2000, display:'grid', gridTemplateColumns:'1fr', rowGap:'1rem'}}
                            >
                                <Link className='sublink' to={'/about-us'}>An Overview</Link>
                                <Link className='sublink' to={'/contact-us'}>Contact Us</Link>
                            </Paper>
                            )}
                        </Transition>
                    </div>  
                </div>

            </div>

            <div className='overlay' onClick={showSidebar} onScroll={showSidebar}></div>

            <div className="sidebar">
                <ul className='items'>
                    <li key={'links-title'} className='item' style={{
                            fontWeight: 'normal',
                            marginTop: '1rem',
                            marginBottom: '1.5rem'
                        }}>LINKS</li>
                    <li key={'home'} className='item'><Link className='link' onClick={showSidebar} to={'/'}>HOME</Link></li>
                    <li key={'donate'} className='item'><Link className='link' onClick={showSidebar} to={'/donate'}>DONATE</Link></li>
                    <li key={'whatson'} className='item'><Link className='link' onClick={showSidebar} to={'/events'}>WHAT'S ON</Link></li>
                    <li key={'announcements'} className='item'><Link className='link' onClick={showSidebar} to={'/announcements'}>ANNOUNCEMENTS</Link></li>

                    <li key={'aboutus'} className='item'><Link className='link' onClick={showSidebar} to={'/about-us'}>ABOUT US</Link></li>
                    {/* <li className='item'><Link className='link' onClick={showSidebar} to={'/gallery'}>GALLERY</Link></li> */}
                    <li key={'contactus'} className='item'><Link className='link' onClick={showSidebar} to={'/contact-us'}>CONTACT US</Link></li>
                    <li className='item' style={{
                        fontWeight: 'normal',
                        marginTop: '2rem',
                        marginBottom: '1.5rem'
                    }}>SOCIALS</li>
                    <li className='item'>
                        <div className="socials-container flex">  
                            <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon pl-0' src={fb} alt="" id='fb-icon'/></Link>
                            <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src={tg} alt="" id='fb-icon'/></Link>
                            <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className='social-media-icon' src={ig} alt="" id='fb-icon'/></Link>
                        </div>
                    </li>
  {/* <li className='item'><Link className='link' to="https://www.facebook.com/suraualimanpv8">FACEBOOK</Link></li> */}

                </ul>

            </div>

            </div>
     );
}
 
export default Header;