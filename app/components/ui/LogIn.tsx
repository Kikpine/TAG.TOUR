'use client'

import React, { useRef, useState } from 'react'
import BlackFooter from './BlackFooter'
import styles from '../../styles/LogIn.module.css'
type Props = {}
type intIO = {
  password: String,
  name: String,
  img: String,
  objects: [Object]
}
import Link from 'next/link'
import { urbanist, jb_mono } from '@/app/assets/fonts'
import { useRouter } from 'next/navigation'



function LogIn({}: Props) {

  const login = useRef<any>(null)
  const password = useRef<any>(null);
  const router = useRouter();
  const [message, setMessage] = useState('');

  const loginUser = () => {
    if (localStorage.getItem(login.current.value) != null) { 
      let user: any = JSON.parse(localStorage.getItem(login.current.value));
      if (user.password == password.current.value) {
        router.push(`/interface?login=${login.current.value}`)
      } else {
        setMessage('Неправильный логин или пароль!')
      }
    } else {
      setMessage('Нет пользователя с таким логином!');
    }
    
  }


  return (
    <div className={`${styles.LogIn}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.form}`}>
          <h2 className={`${urbanist.className}`}>tour.</h2>
          <div className={`${styles.form_cover}`}>
            <input ref={login} placeholder='Логин' type="text" className={`${jb_mono.className} ${styles.tel_input}`} />
            <input ref={password} placeholder='Пароль' type='password' className={`${jb_mono.className} ${styles.pass_input}`} />
            <button onClick={loginUser} className={`${jb_mono.className} ${styles.submit_btn}`}>Далее</button>
            <span className={`${styles.error_message}`}>{message}</span>
          </div>
        </div>
        <BlackFooter extended={false} />
      </div>
    </div>
  )
}

export default LogIn