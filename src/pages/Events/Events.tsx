import "./Events.css";
import { Banner } from "../../components";
import { Link } from "react-router-dom";
import { EventType, checkType } from "al-iman-types";
import { useEffect, useState } from "react";
import { useFetch } from "../../utils";

const Events = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const { data, error, isLoading } = useFetch('/events');
  
  useEffect(()=>{
      if(data && !error){
        setEvents((data.data as any[]).filter((obj: Record<string,any>)=>checkType.isEventType(obj)) as EventType[])
      }
  }, [data])

  return ( 
    <>
      <Banner title="WHATS ON" imgPath="/src/pages/Events/images/banner.jpeg"></Banner>
      <div className="events center">
        <h1>CLASSES</h1>

        <div className="grid-container">
          {events.filter(event => event.type === "class").map((event, index) => (
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
            isLoading? <h2 style={{textAlign:'center', height: '14rem'}}>Loading...</h2>: 
            events.filter(event => event.type === "class").length === 0 && <h2 style={
              {
                textAlign: "center"
              }
            }>No classes currently scheduled</h2>
          }

        <h1>EVENTS</h1>
        <div className="grid-container">
        {events.filter(event => event.type === "event").map((event, index) => (
            <div className="grid-item" key={index}>
              <Link to={`/events/${event.id}`}>              
              <div className="image-container" style={{
                backgroundImage: `url(${event.imgPath})`
              }}>
                  <img src={event.imgPath} alt="" />
                </div>
                <h2>{event.title}</h2>
              </Link>
            </div>
          ))}

        </div>

          {
            isLoading? <h2 style={{textAlign:'center'}}>Loading...</h2>: 
            events.filter(event => event.type === "event").length === 0 && <h2 style={{
              textAlign: "center"
            }}>No events currently scheduled</h2>
          }
      </div> 

    </>
   );
}
 
export default Events;