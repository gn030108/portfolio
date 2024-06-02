import emailjs from "@emailjs/browser";
import {useState } from "react";

import styles from '../styles/Contact.module.scss'



const Contact = () => {

  const [name,setName] = useState('');
  const [title,setTitle] = useState('');
  const [message,setMessage] = useState('');

  const onNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  }
  const onTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  }

  const onMessageChange = (e) => {
      const value = e.target.value;
      setMessage(value);
  }
  const onSubmit= (e)=>{
    e.preventDefault();

    emailjs.send('pww-portfolio','gn030108',{
      name:name,
      title:title,
      message:message
    },{
      publicKey:"YbEFqfIl3MsiB7cKF"
    })
    .then((response) => {
      console.log('정상적으로 보내졌습니다',response.status)
    })
    .catch((error) => {
      console.log('전송 실패',error)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Contact</div>
      <div className={styles.box}>
        <div className={styles.contact}>
          <img src="https://cdn.pixabay.com/photo/2018/09/20/06/51/thank-you-3690116_1280.jpg"/>
        </div>
        <form onSubmit={onSubmit}>
          <input onChange={onNameChange} placeholder="NAME" defaultValue={name}/>
          <input onChange={onTitleChange} placeholder="TITLE" defaultValue={title}/> 
          <textarea onChange={onMessageChange} placeholder="MESSAGE" defaultValue={message}/>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Contact


//https://cdn.pixabay.com/photo/2014/11/03/17/45/thank-you-515514_1280.jpg