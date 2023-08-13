import style from './Announcement1.module.css';
import { AnnouncementType } from '../../types';


// const Announcement = ({announcement}: {announcement: AnnouncementType}) => {
//   return ( 
//     <>
//       <div className={style.overlay}> 
        
//       </div>
//       <img className={style.close} src="/src/images/icons/close.svg" alt="" />
//       <div className={style.announcement}>

//         {
//           // announcement.imgPath && <div className={style['announcement-image-container']}><img src={announcement.imgPath} alt="" /></div> 
//         announcement.imgPath &&
//         <div className={style['.announcement-image-container']} style={{backgroundColor:'black'}}>
//           <img src={announcement.imgPath} alt="" />
//         </div>
//         }
//         <div className={style['announcement-details-container']}>
//           <div></div>
//           <div className={style['details']}>

//             <h1>{announcement.title}</h1>
//             <p style={{margin:0, textAlign:'center', paddingBottom:'1rem', color:'grey'}} >Posted {`${(new Date(announcement.time)).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ${new Date(announcement.time).toLocaleDateString()}`}</p>
//             <p>{announcement.description}</p>
//           </div>
//         </div>
//       </div>
//     </> 
//   );
// }

const Announcement = ({announcement, active, setChosen}: {announcement: AnnouncementType, active: boolean, setChosen: React.Dispatch<AnnouncementType|null>}) => {
  const close = ()=> {
    document.getElementById('announcement-overlay')?.classList.toggle('hidden')
    setChosen(null)
  }

  return ( 
    <>
      <div id='announcement-overlay' className={`${style['announcement-overlay']} ${active?'show':'hidden'}`}>
        <img onClick={()=>close()} src="/src/images/icons/close.svg" alt="" />
        <div className={`${style['grid-container']} ${style['image-container']}`}>
          {
            announcement.imgPath &&
              <div className={style['grid-item']} style={{
                backgroundImage: `url(${announcement.imgPath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
              <img src={announcement.imgPath} alt="" />
            </div>
          }
          <div className={`${style['grid-item']} ${style['description-container']}`} style={{
            backgroundColor: 'white',
            padding: '1rem',
            overflowY: 'scroll',
          }}>
            <h1>{announcement.title}</h1>
            <p style={{margin:0, textAlign:'center', paddingBottom:'1rem', color:'grey'}} >Posted {`${(new Date(announcement.time)).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ${new Date(announcement.time).toLocaleDateString()}`}</p>
            <p style={{
              margin: 0,
              textAlign: 'justify',
            }}>{announcement.description}</p>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Announcement;