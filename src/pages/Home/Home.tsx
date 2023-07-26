import { Slideshow, Line } from "../../components";
import { constants } from "../../constants";
import './Home.css';

const Home = () => {
    const baseDir = './src/pages/Home/images/slideshow/';
    let images = [
        'iftar.jpeg',
        '1.jpeg',
        '2.png',
        '3.jpeg',
    ]
    let imagePaths = images.map((image:string): string => baseDir + image)

    const targetDiv = document.getElementsByClassName('header')[0];

    // Get the height of the div relative to the viewport
    const rect = targetDiv.getBoundingClientRect();
    const heightToBottom = window.innerHeight - (parseFloat(getComputedStyle(targetDiv).marginTop) + (rect.height) + parseFloat(getComputedStyle(targetDiv).marginBottom));
    document.documentElement.style.setProperty('--large-gutter-margin', `${constants["large-gutter-margins"]}`);
    
    console.log('Height from top to bottom of viewport:', heightToBottom);  
    //q: how to get height of viewport



    return ( 
        <div className="home">
            <div className="home-content-1">
                <div className="background-pattern-container">
                    {/* <img src="src/images/background/islamic-pattern.png" alt="" className="background-pattern-left" />
                    <img src="src/images/background/islamic-pattern.png" alt="" className="background-pattern-right" /> */}
                    <img className="background-pattern" src="src/images/background/islamic-pattern-repeat.png" alt="" />
                </div>
                <div className="slideshow-containter">
                    <Slideshow images={imagePaths} height={`${heightToBottom}px`}/>
                </div>
            </div>

            <div className="about" style={window.innerHeight>768?{
                height: window.innerHeight
            }:{}}>
                <h1>ABOUT SURAU AL-IMAN</h1>
                

                <div className="about-1">
                    <img className="about-picture" src="src/pages/Home/images/about/amir.jpg" alt="" />
                </div>
                <div className="about-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor velit imperdiet nibh rutrum, vel consequat nibh dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta metus eget mauris rutrum facilisis. Quisque eget augue fermentum, pharetra quam ut, porttitor ligula. Ut id urna nec turpis condimentum aliquet. Donec ut mi a urna feugiat suscipit eget eu neque. In molestie ante volutpat, molestie felis eleifend, tristique eros. Fusce sit amet ex a mauris condimentum tincidunt eget eu mi. Etiam quis eros fringilla diam tempor placerat in sed lorem.</p>
                </div>

                <Line style={{
                    bottom: "2rem"
                }}/>
            </div>

            {/* <div className="separator"></div> */}
                

            {/* <img src="src/images/background/banner.png" alt="" className="banner" /> */}
        </div>
     );
}
 
export default Home;