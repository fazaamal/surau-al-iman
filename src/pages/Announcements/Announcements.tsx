import { useState } from 'react';
import { Banner, Announcement } from '../../components';
import { AnnouncementType } from '../../types';
import style from './Announcements.module.css';

let announcements: AnnouncementType[] = [
  {
    title: 'Flood victim fundraiser',
    imgPath: '/src/pages/Announcements/images/flood.webp',
    description: 'Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MORE',
    time: Date.now(),
    id: 1
  },
  {
    title: 'monthly surau cleaning',
    imgPath: '/src/pages/Announcements/images/poster.jpg',
    description: 'This is the first announcement',
    time: Date.now()-100000,
    id: 2
  },
  {
    title: 'tafseer cancelled',
    description: 'This is the first announcement',
    time: Date.now()-200000,
    id: 3
  },
  {
    title: 'Flood victim fundraiser',
    description: 'Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MORE',
    time: Date.now(),
    id: 1
  },
  {
    title: 'monthly surau cleaning',
    description: 'This is the first announcement',
    time: Date.now()-100000,
    id: 2
  },
  {
    title: 'tafseer cancelled',
    description: 'This is the first announcement',
    time: Date.now()-200000,
    id: 3
  },
  {
    title: 'Flood victim fundraiser',
    description: 'Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MORE',
    time: Date.now(),
    id: 1
  },
  {
    title: 'monthly surau cleaning',
    description: 'This is the first announcement',
    time: Date.now()-100000,
    id: 2
  },
  {
    title: 'tafseer cancelled',
    description: 'This is the first announcement',
    time: Date.now()-200000,
    id: 3
  }
]

// announcements = []
const Announcements = () => {
  announcements.sort((a,b) => b.time - a.time)

  const [chosen, setChosen] = useState<AnnouncementType| null>(null);

  const showAnnouncement = (announcement:AnnouncementType) => {
    console.log(announcement);
    
    setChosen(announcement)
  }

  return ( 
    <> 
      {/* {
        <Announcement announcement={announcements[0]} active={true} setChosen={setChosen}></Announcement>
      } */}
      {
        announcements.length > 0 && chosen &&
        <Announcement announcement={chosen} active={chosen?true:false} setChosen={setChosen}></Announcement>
      }
      <Banner title='ANNOUNCEMENTS' />
      <div className={`${style.announcements} center`}>
        {
          announcements.map((announcement, index) => (
            <div onClick={()=>showAnnouncement(announcement)} className={style.announcement} key={index}>
              <div className={style["grid-item"]}>
                <h1 style={{marginTop:0}}>{announcement.title}</h1>
                <p  >{`${(new Date(announcement.time)).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ${new Date(announcement.time).toLocaleDateString()}`}</p>
              </div>
              {/* <div className={style["grid-item"]}>
                <p>{announcement.description.slice(0,100) + '...'}</p>
              </div> */}
              <div className={style["grid-item"]} style={{fontFamily:'Raleway'}}>
                <p>READ MORE »</p>
              </div>
            </div>
          ))
        }

        {
          announcements.length === 0 && 
          <>
            <h2 style={{textAlign: 'center', fontWeight:400}}>No announcements</h2>
          </>
        }
      </div>
    </>   
  );
} 
 
export default Announcements;