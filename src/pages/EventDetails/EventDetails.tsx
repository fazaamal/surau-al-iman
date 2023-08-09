import { Banner } from "../../components";
import styles from './EventDetails.module.css'
import { EventType } from "../../types";
import { useParams } from "react-router-dom";
import { events } from "../Events/Events";

const EventDetails = () => {
  const {id} = useParams();
  if(!id){
    return <h1>404</h1>
  }
  const event = events.find(event => event.id === parseInt(id))!;
  if(!event){
    return <h1>404</h1>
  }

  return ( 
    <>
      <Banner title={event.title} text={event.conductor?`By ${event.conductor}`:null} imgPath={event.imgPath}/>
      <div className={`${styles.event} center`}>
        <div className={styles['grid-container']}>
          <div className={styles['event-description']}>
            {event.imgPath && <div className={styles["image-container"]}><img src={event.imgPath} alt=""/></div>}
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
      </div>
    </>
   );
}
  
export default EventDetails;