import { useEffect, useState } from "react";
import { Banner, ImageFrame } from "../../components";
import { callApi, formatEpochTime } from "../../utils";
import styles from './EventDetails.module.css'
import { useParams } from "react-router-dom";
import { EventType } from "al-iman-types";
import { Text } from "@mantine/core";
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
      { 
      
      !loading && event && 
      <> 
        <Banner blur title={event.title} text={event.conductor?`By ${event.conductor}`:null} imgPath={event.imgPath}/>
        
        <div className={`${styles.event} center`}>
          {/* <h1 style={
            {
              fontWeight:400
            }
          }>{event.title}</h1> */}
          <Text py={5} color="dimmed">Posted at {formatEpochTime(event.timeAdded)}</Text>

          <div className={styles['grid-container']}>
            <div className={styles['event-description']}>
              {event.imgPath && <ImageFrame className={styles['event-image']} backgroundImage={true} imgPath={event.imgPath} ratio={9/16} styles={{marginBottom:'1rem'}}/>}   

              <div className={styles['event-details-mobile']} style={{marginBottom:'1.5rem'}}>
                <div className={styles['event-time']} >
                  <h2 style={{padding:0,margin:0}}>Time</h2>
                  <p style={{padding:0,margin:0, fontSize:'1.25rem'}}>{event.time}</p>
                </div>
                <div className={styles['event-venue']} style={{marginTop:'10px'}}>
                  <h2 style={{padding:0,margin:0}}>Location</h2>
                  <p style={{padding:0,margin:0,fontSize:'1.25rem'}}>{event.location}</p>
                </div>
              </div>

              {event.description.split ('\n').map ((item, i) => (
                <p className={'mb-4'} key={i}>{item}</p>
                ))}
              {/* <p>{event.description}</p> */}
            </div>
            <div className={styles['event-details']}>
              <div className={styles['event-time']}>
                <h2>Time</h2>
                <p>{event.time}</p>
              </div>
              <div className={styles['event-venue']}>
                <h2>Location</h2>
                <p>{event.location}</p>
              </div>
            </div>
          </div>
        </div> 
      </>
      
      }
    </>
   );
}
  
export default EventDetails;