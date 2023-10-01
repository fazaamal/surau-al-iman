import { useEffect, useState } from 'react';
import { Banner, Announcement } from '../../components';
import { AnnouncementType, checkType } from 'al-iman-types';
import style from './Announcements.module.css';
import { formatEpochTime, useFetch } from '../../utils';
import { Skeleton, Text,  } from '@mantine/core';

const AnnouncementLoadingCard = () => {
  return <>
    <div className={style.announcement + ' hover:bg-white'}>
      <div className={style["grid-item"]}>
        <Skeleton>
          <h1 style={{marginTop:0}}>Title goes here, loading loading</h1>
        </Skeleton>

        <Skeleton mt={5} h={'sm'} w={200}>
          <Text color='dimmed' size={'sm'} >Loading the date</Text>
        </Skeleton>
      </div>
      {/* <div className={style["grid-item"]}>
        <p>{announcement.description.slice(0,100) + '...'}</p>
      </div> */}
      <div className={style["grid-item"]}>
        <Skeleton>
          <p>READ MORE »</p>
        </Skeleton>
      </div>
    </div>

  </>
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const { data, error, isLoading } = useFetch('/announcements', {}, 1000);
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
        {/* <AnnouncementLoadingCard/> */}

        {
          announcements.sort((a,b) => b.timeAdded - a.timeAdded).map((announcement, index) => (
            <div onClick={()=>showAnnouncement(announcement)} className={style.announcement} key={index}>
              <div className={style["grid-item"]}>
                <h1 style={{marginTop:0}}>{announcement.title}</h1>
                <Text color='dimmed' size={'sm'} >{formatEpochTime(announcement.timeAdded)}</Text>
              </div>
              {/* <div className={style["grid-item"]}>
                <p>{announcement.description.slice(0,100) + '...'}</p>
              </div> */}
              <div className={style["grid-item"]}>
                <p>READ MORE »</p>
              </div>
            </div>
          ))
        }

        {/* {
          !isLoading &&
          announcements.length === 0 && 
          <>
            <h2 style={{textAlign: 'center', fontWeight:400}}>No announcements</h2>
          </>
        } */}
        {
          (isLoading || announcements.length === 0) &&
          <>
            <AnnouncementLoadingCard/>
            <AnnouncementLoadingCard/>
            <AnnouncementLoadingCard/>
            <AnnouncementLoadingCard/>
            <AnnouncementLoadingCard/>
          </>
        }
      </div>
    </>   
  );
} 
 
export default Announcements;