import "./Events.css";
import { Banner } from "../../components";
import { Link } from "react-router-dom";
import { EventType, checkType } from "al-iman-types";
import { useEffect, useState } from "react";
import { useFetch } from "../../utils";
import { Skeleton } from "@mantine/core";

const EventLoadingCard = () => {
  return (
    <div className="grid-item" style={{marginBottom:'20px'}}>
      <Skeleton>
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </Skeleton>
      <Skeleton my={'10px'} h={'2rem'}>
        <p>Loading now...</p>
      </Skeleton>
    </div>
  );
}

const Events = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const { data, error, isLoading } = useFetch('/events', {}, 1000);
  
  useEffect(()=>{
      if(data && !error){
        setEvents((data.data as any[]).filter((obj: Record<string,any>)=>checkType.isEventType(obj)) as EventType[])
      }
  }, [data])

  return ( 
    <>
      <Banner title="WHAT'S ON"></Banner>
      <div className="events center">
        <h1 className={'font-bold'}>CLASSES</h1>

        <div className="grid-container" style={{marginBottom:'2rem'}}>
          {
          isLoading || error ?
          <>
            <EventLoadingCard/>
            <EventLoadingCard/>
            <EventLoadingCard/>
          </>:
          events.filter(event => event.type === "class").map((event, index) => (
            <div className="grid-item" key={index}>
              <Link to={`/events/${event.id}`}>              
              <div className="image-container" style={{
                backgroundImage: `url(${event.imgPath})`
              }}>
                <img src={event.imgPath} alt=""/>
              </div>
              <h2>{event.title}</h2>
              </Link>
            </div>  
          ))}
        </div>
          {
            !isLoading && !error &&
            events.filter(event => event.type === "class").length === 0 && <h2 style={
              {
                textAlign: "center"
              }
            }>No classes currently scheduled</h2>
          }

        <h1 className="font-bold">EVENTS</h1>
        <div className="grid-container">
        {
          isLoading || error ?
          <>
            <EventLoadingCard/>
            <EventLoadingCard/>
            <EventLoadingCard/>
          </>:
          events.filter(event => event.type === "event").map((event, index) => (
            <div className="grid-item" key={index}>
              <Link to={`/events/${event.id}`}>              
              <div className="image-container" style={{
                backgroundImage: `url(${event.imgPath})`
              }}>
                <img src={event.imgPath} alt=""/>
              </div>
              <h2>{event.title}</h2>
              </Link>
            </div>  
          ))}

        </div>

        {
            !isLoading && !error &&
            events.filter(event => event.type === "class").length === 0 && <h2 style={
              {
                textAlign: "center"
              }
            }>No events currently scheduled</h2>
          }
      </div> 

    </>
   );
}
 
export default Events;