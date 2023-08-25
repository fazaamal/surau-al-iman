import "./Events.css";
import { Banner } from "../../components";
import { Link } from "react-router-dom";
import { EventType }  from "al-iman-types";

export let events: EventType[] = [
  {
    title: "Tajwid Class For Kids",
    time: "Every Saturday, 8.30am - 10.30am",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Vivamus faucibus metus quis arcu mollis, vitae imperdiet mauris vulputate. Cras vitae tellus et nisi consectetur ullamcorper. Aliquam turpis mi, tempus quis efficitur a, molestie et eros. Praesent vitae est tortor. Nunc ac turpis ac mi tristique porttitor non eget diam. Donec in dolor vel odio finibus dictum ut ac enim. Aliquam vehicula, turpis blandit efficitur vulputate, odio augue finibus felis, quis tincidunt nulla mi in ante. Ut placerat lacus risus, vel laoreet erat commodo at. Pellentesque id diam commodo, eleifend libero in, sollicitudin urna. Aliquam sagittis vehicula finibus. \nEtiam viverra finibus malesuada. Suspendisse erat lectus, volutpat ut venenatis non, posuere eget augue. Nulla ultricies tristique nunc, eget dignissim purus tincidunt non. Aenean nisl felis, suscipit non nisl et, dapibus finibus dolor. Nam in ipsum vel quam finibus semper sit amet vitae massa. Suspendisse vitae ex eget tortor lobortis tincidunt at ut sapien. Maecenas id viverra nisl, et lobortis augue. Proin accumsan, ligula et egestas posuere, tortor turpis cursus risus, eget ornare lorem eros ut odio. Donec porta rutrum mollis. Donec augue libero, dapibus ut risus eu, viverra eleifend dolor. Morbi tristique elit et turpis sollicitudin suscipit. Nunc vel tortor quam. Nullam sed nulla risus. Integer purus nunc, sollicitudin non iaculis nec, accumsan ut lorem. \nSed elit tortor, sagittis eget eleifend ut, sagittis sit amet dui. Mauris ac enim a purus viverra lobortis. Maecenas faucibus, urna a pharetra imperdiet, eros est iaculis risus, et placerat enim nunc sed urna. Curabitur pretium ac orci ac finibus. Ut sit amet tellus ac arcu tristique venenatis. Aliquam vel lorem at eros eleifend maximus. Nulla eu eros molestie, elementum odio non, efficitur quam. Vestibulum eget lorem ut purus porttitor convallis eget ut odio. Nam nec sem suscipit, porttitor eros nec, ultricies quam\nDuis ultrices sapien sed dolor feugiat viverra. In accumsan rutrum fermentum. Nulla quis varius purus. Mauris ante leo, congue nec sem non, venenatis dapibus metus. Quisque at arcu nec lacus commodo cursus. Donec at malesuada purus. Mauris elit libero, vehicula vitae scelerisque ac, convallis at felis. Morbi faucibus lacinia justo at semper. Donec fermentum ex diam, nec tincidunt felis tincidunt sit amet. Phasellus ornare, justo ac laoreet semper, neque nulla maximus orci, at luctus velit leo vel ex.Sed condimentum vehicula elit sodales dignissim. Morbi eget purus fermentum, dictum nisi nec, accumsan eros. In tempor sodales hendrerit. Nam dignissim nisi vel lorem cursus varius. Integer sed lectus blandit, molestie mauris sed, tincidunt sem. Aenean ornare risus sed odio pretium iaculis. Proin augue odio, feugiat in mauris quis, sodales maximus velit. Morbi imperdiet quam et sem condimentum, at lobortis elit tempus. Proin sollicitudin sed ipsum sit amet pretium. Cras egestas mauris nec ullamcorper lobortis. Vestibulum velit odio, malesuada et faucibus tincidunt, venenatis eget metus. Vestibulum eu pellentesque ligula, non dictum felis.",
    imgPath: "/src/pages/Events/images/tajwid.webp",
    location: "Surau Al-Iman",
    conductor: "Sheikh Fuad",
    type: "class",
    id: "1"
  },
  {
    title: "Tahfiz Class",
    time: "Every Thursday, 8.30am - 10.30am",
    description: "Learn to memorise the Quran with our tahfiz class. Open to all ages.",
    imgPath: "/src/pages/Events/images/tahfiz.jpeg",
    location: "The Institute",
    conductor: "Sayeed Amir",
    type: "class",
    id: "2"
  },
  {
    title: "Futsal Tournament",
    time: "30th August 2023",
    description: "Join our futsal tournament and stand a chance to win RM1000!",
    imgPath: "/src/pages/Events/images/futsal.jpeg",
    location: "Futsal Court",
    conductor: 'Daniel',
    contact: "Daniel - 012-3456789",
    type: "event",
    id: "3"
  }
]

// events = [];

const Events = () => {
  return ( 
    <>
      <Banner title="WHATS ON" imgPath="/src/pages/Events/images/banner.jpeg"></Banner>
      <div className="events center">
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
          {
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
                <div className="image-container">
                  <img src={event.imgPath} alt="" />
                </div>
                <h2>{event.title}</h2>
              </Link>
            </div>
          ))}

        </div>

          {
            events.filter(event => event.type === "event").length === 0 && <h2 style={{
              textAlign: "center"
            }}>No events currently scheduled</h2>
          }
      </div> 

    </>
   );
}
 
export default Events;