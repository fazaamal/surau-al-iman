import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Card, CardSection, Grid, Skeleton, Text } from "@mantine/core";
import { EventType, SlideType, checkType } from "al-iman-types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils";
import style from './Home.module.css';
// import '@coreui/coreui/dist/css/coreui.min.css'


// const slides: ImageSlide[] = [
//     {
//         src: images.iftar,
//         alt: 'iftar',
//         title: 'Iftar',
//         description: 'We provide free iftar for the residents of PV8 condominium every year during the month of Ramadan.',
//         link: '/events/1',
//         fit: 'cover'
//     },
//     {
//         src: images.test,
//         alt: 'iftar',
//         title: 'Iftar', 
//         description: 'Join our Revivers event this year!',
//         link: '/events/1',
//         fit: 'contain'
//     },
// ]

const EventLoadingCard = () => {
    return <>
        <Card className={style.card} mt={'2rem'} mx={'auto'} withBorder w={'700px'} maw={'100%'} h={'150px'} padding={0} shadow="lg" radius={'lg'}>
            <Grid align="center">
                <Grid.Col  maw={'40%'} span={'content'}> 
                    <Skeleton>
                        <CardSection h={'150px'} w={'250px'} style={{overflow:'hidden'}}>
                            {/* <Skeleton sx={{[theme.fn.smallerThan('sm')]: {width:'120px'}}} height={150} width={250} maw={'90%'} /> */}
                        </CardSection>
                    </Skeleton>
                </Grid.Col>
                <Grid.Col span={'auto'}>
                    <Grid gutter={10} align="center" pr={'1rem'}>
                        <Grid.Col p={0} xs={12} sm={12} md={'auto'}>
                            <Skeleton my={10}>
                                <Text weight={500} size={'xs'}>The title goes here</Text>
                            </Skeleton>
                            <Skeleton>
                                <Text className={style['card-description']} size={'xs'} color="dimmed">Description goes here brothers</Text>
                            </Skeleton>
                        </Grid.Col>
                        <Grid.Col p={0} m={10} ml={0} span={"content"}>
                            <Skeleton sx={{'&':{marginLeft:10},'@media (max-width: 600px)': {marginLeft:0}}}>
                                <button className={' bg-green-600 py-2 px-4 rounded-md text-white hover:bg-green-700  ' }>Read more</button>
                            </Skeleton>
                        </Grid.Col >
                    </Grid>
                </Grid.Col>
            </Grid>
        </Card>                

    </>
}

const Home = () => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [slides, setSlides] = useState<SlideType[]>([]);
    const eventFetch = useFetch('/events', {}, 1500);
    const slidesFetch = useFetch('/slides', {}, 800);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(eventFetch.data && !eventFetch.error){
            setEvents(((eventFetch.data.data as any[]).filter((obj: Record<string,any>)=>checkType.isEventType(obj)) as EventType[]).sort((a:EventType,b:EventType)=>b.timeAdded-a.timeAdded))
        }
        if(slidesFetch.data && !slidesFetch.error){
            setSlides(((slidesFetch.data.data as any[]).filter((obj: Record<string,any>)=>checkType.isSlideType(obj)) as SlideType[]).sort((a:SlideType,b:SlideType)=>b.timeAdded-a.timeAdded))
        }
        
        
    }, [eventFetch.data, slidesFetch.data])    
    // Add zakat, prayer times

    return ( 
        <div className={style.home}>
            {
                slidesFetch.isLoading? 
                <Skeleton >
                    <Carousel classNames={{root:style.slideshow, container:style['slides-container'], control:'slide-button'}} styles={{root:{overflow:'hidden'},control:{height:'2rem', width:'2rem', borderRadius:'100px', opacity:0.6}} } w={'100%'} mx="auto" withIndicators loop>
                        {   
                            <Carousel.Slide className={style.slide}>
                                <img src="" alt="" />
                            </Carousel.Slide>
                        }
                    </Carousel>
                </Skeleton>:
                <Carousel classNames={{root:style.slideshow, container:style['slides-container'], control:'slide-button'}} styles={{root:{overflow:'hidden'},control:{height:'2rem', width:'2rem', borderRadius:'100px', opacity:0.6}} } w={'100%'} mx="auto" withIndicators loop>
                    {   
                        slides.map((slide: SlideType): JSX.Element => {
                            return <Carousel.Slide className={style.slide} style={{backgroundImage:slide.fit==='contain'?`url(${slide.src})`:'none', backgroundPosition: 'center'}}>
                                <div className={style['slide-text']}> 
                                    <h1>{slide.title}</h1> 
                                    <p className={'hidden md:block'} style={{marginTop:'0 '}}>{slide.description.length > 30? slide.description.slice(0,40).trim() + '...':  slide.description}</p>
                                    { 
                                        slide.link && 
                                        <a className={'mx-auto'} href={slide.link} target='_blank'>
                                            <button className={' text-white py-2 px-4 w-fit mx-auto mt-2 bg-slate-500 hover:bg-slate-600 rounded-md'}>Read more</button>
                                         
                                        </a>
                                    } 
                                </div>  
                                <img loading='lazy' style={{width:'100%', height:'100%', objectFit:slide.fit ?? 'cover', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)'}} src={slide.src} alt="" />
                            </Carousel.Slide>
                        })
                    }
                </Carousel>
            }                

            <div style={{marginTop:'2rem'}} className={`${style['events']} center`}>
                <h1 className={'text-2xl font-bold'}>Check out what's going on!</h1>

                {   
                    eventFetch.isLoading || eventFetch.error || events.length == 0 ? 
                    <>
                        <EventLoadingCard/>
                        <EventLoadingCard/>
                        <EventLoadingCard/>
                    </>:
                    events.slice(0,3).map((event:EventType)=>{
                        return <>
                                <Card className={style.card} mt={'2rem'} mx={'auto'} withBorder w={'700px'} maw={'100%'} h={'150px'} padding={0} shadow="lg" radius={'lg'}>
                                    <Grid align="center">
                                        <Grid.Col  maw={'40%'} span={'content'}> 
                                            <BackgroundImage src={event?.imgPath || ""}>
                
                                                <CardSection h={'150px'} w={'250px'} style={{overflow:'hidden'}}>
                                                    {/* <Image styles={{image:{objectFit:'contain', objectPosition:'center'}}} src={'/src/pages/Home/images/slideshow/iftar.jpeg'} h={'150px'} width={'250px'}></Image> */}
                                                </CardSection>
                                            </BackgroundImage>
                                        </Grid.Col>
                                        <Grid.Col span={'auto'}>
                                            <Grid gutter={10} align="center" pr={'1rem'}>
                                                <Grid.Col p={0} xs={12} sm={'auto'}>
                                                    <Text weight={500} size={'xl'}>{event.title}</Text>
                                                    <Text className={style['card-description']} size={'md'} color="dimmed">{event.description.slice(0,30) + '...'}</Text>
                                                </Grid.Col>
                                                <Grid.Col p={0} m={10} ml={0} span={'content'}>
                                                    {/* <button>Read more</button> */}
                                                    <button className={' bg-green-600 py-2 px-4 rounded-md text-white hover:bg-green-700  ' } color="green" onClick={()=>{navigate('/events/'+event.id)}}>Read more</button>
                                                </Grid.Col >
                                            </Grid>
                                        </Grid.Col>
                                    </Grid>
                                </Card>                
                        </> 
                    })
                }                              
            </div>
            <Link style={{textDecoration:'none'}} to={"/events"}>
                <Text align="center" size={'xl'} weight={500} color="blue" underline className="center">See all our events here!</Text>
            </Link>
        </div>
     );
}
 
export default Home;