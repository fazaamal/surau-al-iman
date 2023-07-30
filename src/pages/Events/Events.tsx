import "./Events.css";
import { Banner } from "../../components";
import { Link } from "react-router-dom";

type Event = {
  title: string,
  time: string,
  id: number,
  description: string,
  imgPath?: string,
  conductor?: string,
  location: string,
  contact?: string,
  type: "event" | "class"
};

const Events = () => {
  const events: Event[] = [
    {
      title: "Tajwid Class For Kids",
      time: "Every Saturday, 8.30am - 10.30am",
      description: "Learn the proper way of reciting the Quran with our tajwid class. Open to all ages.",
      imgPath: "src/pages/Events/images/tajwid.webp",
      location: "Surau Al-Iman",
      conductor: "Sheikh Fuad",
      type: "class",
      id: 1
    },
    {
      title: "Tahfiz Class",
      time: "Every Thursday, 8.30am - 10.30am",
      description: "Learn to memorise the Quran with our tahfiz class. Open to all ages.",
      imgPath: "src/pages/Events/images/tahfiz.jpeg",
      location: "The Institute",
      conductor: "Sayeed Amir",
      type: "class",
      id: 2
    },
    {
      title: "Futsal Tournament",
      time: "30th August 2023",
      description: "Join our futsal tournament and stand a chance to win RM1000!",
      imgPath: "src/pages/Events/images/futsal.jpeg",
      location: "Futsal Court",
      contact: "Daniel - 012-3456789",
      type: "event",
      id: 3
    }
  ]

  return ( 
    <>
      <Banner text="WHATS ON" imgPath="src/pages/Events/images/banner.jpeg"></Banner>
      <div className="events">
        <h1>CLASSES</h1>
        <div className="grid-container">
          {events.filter(event => event.type === "class").map((event, index) => (
            <div className="grid-item" key={index}>
              <Link to={`/events/${event.id}`}>              
                <div className="image-container">
                  <img src={event.imgPath} alt="" />
                </div>
                <h2>{event.title}</h2>
              </Link>
            </div>  
          ))}
        </div>

        <h1>EVENTS</h1>
        <div className="grid-container">
        {events.filter(event => event.type === "event").map((event, index) => (
            <div className="grid-item" key={index}>
              <Link to={`/events/${event.id}`}>              
                <div className="image-container">
                  <img src={event.imgPath} alt="" />
                </div>
                <h2>{event.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div> 

    </>
   );
}
 
export default Events;