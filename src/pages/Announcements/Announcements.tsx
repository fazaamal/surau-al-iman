import { useEffect, useState } from 'react';
import { Banner, Announcement } from '../../components';
import { AnnouncementType, checkType } from 'al-iman-types';
import style from './Announcements.module.css';
import { useFetch } from '../../utils';

// let announcements: AnnouncementType[] = [
//   {
//     title: 'Flood victim fundraiser',
//     imgPath: '/src/pages/Announcements/images/flood.webp',
//     description: 'Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MOREShort description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short description blah balha odiuyfb aisyfhjhjkyooif oiudoh iudfh kaiosu short description.Short ... READ MORE',
//     time: Date.now(),
//     id: "1"
//   },
//   {
//     title: 'monthly surau cleaning',
//     imgPath: '/src/pages/Announcements/images/poster.jpg',
//     description: 'This is the first announcement',
//     time: Date.now()-100000,
//     id: "2"
//   },
//   {
//     title: 'tafseer cancelled',
//     description: 'This is the first announcement',
//     time: Date.now()-200000,
//     id: "3"
//   }
// ]

// announcements = []
const Announcements = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const { data, error, isLoading } = useFetch('/announcements');
  const [chosen, setChosen] = useState<AnnouncementType| null>(null);

  useEffect(()=>{
    if(error) {
      console.log(error);
      return;
    }
    if(data){      
      setAnnouncements((data.data as Record<string, unknown>[]).filter((obj: Record<string, unknown>) => checkType.isAnnouncementType(obj)) as unknown as AnnouncementType[])
    }
  }, [data, error]);



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
          announcements.sort((a,b) => b.timeAdded - a.timeAdded).map((announcement, index) => (
            <div onClick={()=>showAnnouncement(announcement)} className={style.announcement} key={index}>
              <div className={style["grid-item"]}>
                <h1 style={{marginTop:0}}>{announcement.title}</h1>
                <p  >{`${(new Date(announcement.timeAdded)).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ${new Date(announcement.timeAdded).toLocaleDateString()}`}</p>
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
          !isLoading &&
          announcements.length === 0 && 
          <>
            <h2 style={{textAlign: 'center', fontWeight:400}}>No announcements</h2>
          </>
        }
        {
          isLoading &&
          <h2 style={{textAlign: 'center', fontWeight:400}}>Loading...</h2>
        }
      </div>
    </>   
  );
} 
 
export default Announcements;