import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import email from '../assests/logo/mail.png'
import Location from '../assests/logo/location.jpg'
import Phone from '../assests/logo/phone.jpg'
const Contact = () => {
  const [name,setname]=useState('');
  const [mail,setmail]=useState('');
  const [msg,setmsg]=useState('');
  const [numb,setnumb]=useState('');

  const handlesub=(e)=>{
    e.preventDefault();
    const serviceid= 'service_1jpsttl';
    const tempid= 'template_hnqkm2j';
    const publickey='UlrugSUeVE_d3Z3Sf';
    const temp={
      from_name:name,
      f_email:mail,
      to_me:'Ezhil',
      phnnum: numb,
      message:msg
    };
    emailjs.send(serviceid,tempid,temp,publickey)
      .then((response)=>{
      console.log("Message sended Sucessfully",response);
      setname('');
      setmail('');
      setmsg('');
      setnumb('');
      })
      .catch((error)=>{
      console.log("Error sending message",error);
      });
  }
  return (
    <div className ='contact'>
        <span>Contact Me</span>
        <h1>I Want To Hear From You</h1>
        <div className="con-box">
        <div className="c-left">
            <div className="icons">
              <img src={Location} alt="" />
              <div className="left-con">
                <p>Address</p>
                <h4>Puducherry</h4>
              </div>
            </div>
            <div className="icons">
              <img src={email} alt="" />
              <div className="left-con">
                <p>Email</p>
                <h4>ezhilharish23@gmail.com</h4>
              </div>
            </div>
            <div className="icons">
              <img src={Phone} alt="" />
              <div className="left-con">
                <p>Phone</p>
                <h4>9940799738</h4>
              </div>
            </div>
        </div>
        <div className="c-right" onClick={handlesub}>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="email" placeholder='Gmail' value={mail} onChange={(e)=>setmail(e.target.value)}/>
            <input type="text" value={numb} onChange={(e)=>setnumb(e.target.value)} placeholder='phone number'/>
            <textarea name="" id="" cols="50" rows="10" placeholder='Write your message here' value={msg} onChange={(e)=>setmsg(e.target.value)}></textarea>
            <button type='submit'>Send</button>
        </div>
        </div>
        
    </div>
  )
}

export default Contact