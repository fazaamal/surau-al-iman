import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Slideshow} from "../../components";
import style from './Home.module.css';
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Button, Card, CardSection, Grid, Group, Image, Text } from "@mantine/core";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
// import '@coreui/coreui/dist/css/coreui.min.css'

interface ImageSlide {
    src: string;
    alt: string;
    title: string; 
    description: string;
    link? : string;
    fit?: 'cover' | 'contain';
}

const slides: ImageSlide[] = [
    {
        src: '/src/pages/Home/images/slideshow/iftar.jpeg',
        alt: 'iftar',
        title: 'Iftar',
        description: 'We provide free iftar for the residents of PV8 condominium every year during the month of Ramadan.',
        link: '/events/1',
        fit: 'cover'
    },
    {
        src: '/src/pages/Home/images/slideshow/RE.png',
        alt: 'iftar',
        title: 'Iftar',
        description: 'Join our Revivers event this year!',
        link: '/events/1',
        fit: 'contain'
    },
]

const Home = () => {
    const theme = useTheme();
    const baseDir = '/src/pages/Home/images/slideshow/';
    let images = [
        'iftar.jpeg',
        '1.jpeg',
        // '2.png',
        '3.jpeg',
        '2.png',
        'RE.png'
    ]
// Add zakat, prayer times
    return ( 
        <div className={style.home}>
            {/*  */}
            {/* <div className="home-content-1">
                <div className="slideshow-containter">
                    <Slideshow images={imagePaths}/>
                </div>
            </div> */}

            {/* <div className="separator"></div> */}
                
            <Carousel classNames={{root:style.slideshow, container:style['slides-container']}} styles={{root:{overflow:'hidden'},control:{height:'2rem', width:'2rem', borderRadius:'100px', opacity:0.6}} } w={'100%'} mx="auto" withIndicators loop>
                {   
                    slides.map((slide: ImageSlide): JSX.Element => {
                        return <Carousel.Slide className={style.slide} style={{backgroundImage:slide.fit==='contain'?`url(${slide.src})`:'none', backgroundPosition: 'center'}}>
                            <div className={style['slide-text']}> 
                                <h1>{slide.title}</h1> 
                                <p style={{marginTop:'0 '}}>{slide.description.length > 30? slide.description.slice(0,40).trim() + '...':  slide.description}</p>
                                { slide.link && <Button w={'fit-content'} mx={'auto'} color="gray">Read more</Button>}
                            </div>  
                            <img style={{width:'100%', height:'100%', objectFit:slide.fit ?? 'cover', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)'}} src={slide.src} alt="" />
                        </Carousel.Slide>
                    })
                }
            </Carousel>
            <div style={{marginTop:'2rem'}} className={`${style['events']} center`}>
                <h1>Check out what's going on!</h1>
            
                <Card mt={'2rem'} mx={'auto'} withBorder w={'700px'} maw={'100%'} h={'150px'} padding={0} shadow="lg" radius={'lg'}>
                    <Grid align="center">
                        <Grid.Col  maw={'40%'} span={'content'}> 
                            <BackgroundImage src="/src/pages/Home/images/slideshow/RE.png">

                                <CardSection h={'150px'} w={'250px'} style={{overflow:'hidden'}}>
                                    {/* <Image styles={{image:{objectFit:'contain', objectPosition:'center'}}} src={'/src/pages/Home/images/slideshow/iftar.jpeg'} h={'150px'} width={'250px'}></Image> */}
                                </CardSection>
                            </BackgroundImage>
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Grid gutter={10} align="center" pr={'1rem'}>
                                <Grid.Col p={0} xs={12} sm={'auto'}>
                                    <Text weight={500} size={'xl'}>Title would be here</Text>
                                    <Text size={'md'} color="dimmed">Description wouerwwerldhere</Text>
                                </Grid.Col>
                                <Grid.Col p={0} m={10} ml={0} span={'content'}>
                                    <Button color="green">Read more</Button>
                                </Grid.Col >
                            </Grid>
                        </Grid.Col>
                    </Grid>
                </Card>
                <Card mt={'2rem'} mx={'auto'} withBorder w={'700px'} maw={'100%'} h={'150px'} padding={0} shadow="lg" radius={'lg'}>
                    <Grid align="center">
                        <Grid.Col  maw={'40%'} span={'content'}> 
                            <BackgroundImage src="/src/pages/Home/images/slideshow/iftar.jpeg">

                                <CardSection h={'150px'} w={'250px'} style={{overflow:'hidden'}}>
                                    {/* <Image styles={{image:{objectFit:'contain', objectPosition:'center'}}} src={'/src/pages/Home/images/slideshow/iftar.jpeg'} h={'150px'} width={'250px'}></Image> */}
                                </CardSection>
                            </BackgroundImage>
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Grid align="center" pr={'1rem'}>
                                <Grid.Col span={'auto'}>
                                    <Text weight={500} size={'xl'}>Title would be here</Text>
                                    <Text size={'md'} color="dimmed">Description would be here</Text>
                                </Grid.Col>
                                <Grid.Col span={'content'}>
                                    <Button color="green">Read more</Button>
                                </Grid.Col >
                            </Grid>
                        </Grid.Col>
                    </Grid>
                </Card>
                <Card mt={'2rem'} mx={'auto'} withBorder w={'700px'} maw={'100%'} h={'150px'} padding={0} radius={'lg'}>
                    <Grid align="center">
                        <Grid.Col  maw={'40%'} span={'content'}> 
                            <BackgroundImage src="/src/pages/Home/images/slideshow/iftar.jpeg">

                                <CardSection h={'150px'} w={'250px'} style={{overflow:'hidden'}}>
                                    {/* <Image styles={{image:{objectFit:'contain', objectPosition:'center'}}} src={'/src/pages/Home/images/slideshow/iftar.jpeg'} h={'150px'} width={'250px'}></Image> */}
                                </CardSection>
                            </BackgroundImage>
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Grid align="center" pr={'1rem'}>
                                <Grid.Col span={'auto'}>
                                    <Text weight={500} size={'xl'}>Title would be here</Text>
                                    <Text size={'md'} color="dimmed">Description would be here</Text>
                                </Grid.Col>
                                <Grid.Col p={0} span={'content'}>
                                    <Button color="green">Read more</Button>
                                </Grid.Col >
                            </Grid>
                        </Grid.Col>
                    </Grid>
                </Card>
                
            </div>
            <Link to={"/events"}>
                <Text align="center" className="center">Check out all our events here!</Text>
            </Link>
        </div>
     );
}
 
export default Home;