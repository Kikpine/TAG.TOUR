'use client'
import React, { useRef } from 'react'
import BlackFooter from './BlackFooter'
import styles from '../../styles/LogIn.module.css'
import { useRouter } from 'next/navigation'
type Props = {}
import Link from 'next/link'
import { urbanist, jb_mono } from '@/app/assets/fonts'

function SignUp({}: Props) {

  const router = useRouter();

  const first_name: any = useRef(null);
  const last_name: any = useRef(null);
  const login: any = useRef(null);
  const password: any = useRef(null);

  const signupUser = () => {
    localStorage.setItem(login.current.value, JSON.stringify({
      password: password.current.value,
      name: first_name.current.value + " " + last_name.current.value,
      img: '',
      objects: [],
    }))

    router.push(`/interface?login=${login.current.value}`);

    console.log(localStorage.getItem(login.current.value));
  }

  return (
    <div className={`${styles.LogIn}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.form}`}>
          <h2 className={`${urbanist.className}`}>tour.</h2>
          <div className={`${styles.form_cover}`}>
            <input ref={first_name} placeholder='Имя' type="text" className={`${jb_mono.className} ${styles.name_input}`} />
            <input ref={last_name} placeholder='Фамилия' type='text' className={`${jb_mono.className} ${styles.sname_input}`} />
            <input ref={login} placeholder='Логин' type='text' className={`${jb_mono.className} ${styles.tel_input}`} />
            <input ref={password} placeholder='Пароль' type='password' className={`${jb_mono.className} ${styles.tel_input}`} />
            <button onClick={signupUser} className={`${jb_mono.className} ${styles.submit_btn}`}>Далее</button>
          </div>
        </div>
        <BlackFooter extended={false} />
      </div>
    </div>
  )
}

export default SignUp