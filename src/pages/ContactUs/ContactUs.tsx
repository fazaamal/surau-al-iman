import { Link } from "react-router-dom";
import { Banner } from "../../components";
import style from './ContactUs.module.css';
import { useState } from "react";
import { Group, TextInput, Textarea } from "@mantine/core";
import { fb, ig, tg } from "../../images/icons";
import phone from './images/phone.svg';

const ContactUs = () => {
  return ( 
    <>
      <Banner title="CONTACT US"></Banner>
      <div className={`${style['contact-us']} center mt-4`}>
        <div className={`${style['grid-container']} grid grid-cols-2 gap-2`}>
          <ContactForm/>
          <div className={style["grid-item"] +' hidden' }>
            {/* <h1>Socials</h1> */}
              <div className={'flex mt-3'}>
                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className={style['social-media-icon']} src={fb} alt=""/></Link>
                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className={style['social-media-icon']} src={tg} alt=""/></Link>
                <Link to="https://www.facebook.com/suraualimanpv8" target='_blank'><img className={style['social-media-icon']} src={ig} alt=""/></Link>
              </div>
          </div>
          <div className={style["grid-item"] + ' hidden'}>
            {/* <h1>Chairman of Surau Al-Iman</h1> */}
            <div className={'flex items-center justify-center'}>
              <img className={'w-14'} src={phone} alt="" />
              <p className={'text-center w-fit text-xl font-extralight'}>
                +60123456789 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    const email = `mailto:help@suraualiman.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = email;
  };

  return <>
      <div className={"form-container mx-auto w-[500px] max-w-full sm: col-span-2 row-span-2"}>
          {/* <h1 className={' my-4 text-center'}>Email us!</h1> */}

          <form>
            <TextInput
              classNames={{
                label: 'text-2xl sans left'
              }}
              label="Subject"
              placeholder="Email subject"
              onChange={(e) => setSubject(e.currentTarget.value)}
            />

            <Textarea
              classNames={{
                label: 'text-2xl sans mt-3 left'
              }}
              placeholder="Write your message here"
              label="Message"
              autosize
              minRows={10}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />

            <Group>
              <button className={'mx-auto my-3 bg-green-600 hover:bg-green-700'} onClick={handleSendClick}>Send</button>
            </Group>
          </form>
        </div>
  </>
  return (
    <div className="hidden">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button onClick={handleSendClick}>Send</button>
      </form>
    </div>
  );
};

 
export default ContactUs;