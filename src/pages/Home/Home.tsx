import { Slideshow } from "../../components";

const Home = () => {
    const baseDir = './src/pages/Home/images/slideshow/';
    let images = [
        '1.jpeg',
        '2.png'
    ]
    let imagePaths = images.map((image:string): string => baseDir + image)

    return ( 
        <div>
            <Slideshow images={imagePaths} height={'750px'}/>
        </div>
     );
}
 
export default Home;