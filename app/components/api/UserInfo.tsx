'use client'
import { useSearchParams } from "next/navigation"

import { useEffect, useRef, useState } from "react"
import styles from '../../styles/UserInfo.module.css'
export default function UserInfo({}: any) {
  const searchParams = useSearchParams();
  const [user, setUser] = useState({});
  const [url, setUrl] = useState('');

  useEffect(() => {
    changeDate()
  }, [])

  const changeDate = () => {
    let local = JSON.parse(localStorage.getItem(searchParams.get('login')));
    if (local) {
      setUser(local);
      setUrl(local.img)
    }

  }
  const loadImage = (input: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      let changed_user = user;
      changed_user.img = reader.result;
      setUser(changed_user);
      setUrl(reader.result);
      localStorage.setItem(searchParams.get('login'), JSON.stringify(changed_user))
    }
  }


  return (
    <div className={`${styles.UserInfo}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.image}`}>
          <label for='pic-file'>
            <img src={url} alt="profile picture" />
          </label>
          <input id="pic-file" type={'file'} onChange={loadImage} />
        </div>
        <div className={`${styles.info}`}>
          <h2>{user.name}</h2>
        </div>
      </div>
    </div>
  )
}