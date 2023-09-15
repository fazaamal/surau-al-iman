import { useEffect, useState } from "react";
import { Banner, ImageFrame } from "../../components";
import { callApi } from "../../utils";
import styles from './EventDetails.module.css'
import { useParams } from "react-router-dom";
import { EventType } from "al-iman-types";
// import { events } from "../Events/Events";

const EventDetails = () => {
  const {id} = useParams();
  const [event, setEvent] = useState<EventType>();
  const [loading, setLoading] = useState(true);
  if(!id){
    return <h1>404</h1>
  }
  
  useEffect(()=>{
    callApi(`/events/${id}`).then(res => {
      
      setEvent(res.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err);
    })  
  }, [])

  return ( 
    <>
      { !loading && event && <> <Banner title={event.title} text={event.conductor?`By ${event.conductor}`:null} imgPath={event.imgPath}/>
      <div className={`${styles.event} center`}>
        <div className={styles['grid-container']}>
          <div className={styles['event-description']}>
            {event.imgPath && <ImageFrame imgPath={event.imgPath} ratio={9/16} styles={{marginBottom:'1rem'}}/>}
            {event.description.split ('\n').map ((item, i) => (
              <p key={i}>{item}</p>
            ))}
            {/* <p>{event.description}</p> */}
          </div>
          <div className={styles['event-details']}>
            <div className={styles['event-time']}>
              <h2>WHEN</h2>
              <p>{event.time}</p>
            </div>
            <div className={styles['event-venue']}>
              <h2>WHERE</h2>
              <p>{event.location}</p>
            </div>
          </div>
        </div>
      </div> </>}
    </>
   );
}
  
export default EventDetails;