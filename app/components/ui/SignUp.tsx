import React from 'react'
import BlackFooter from './BlackFooter'
import styles from '../../styles/LogIn.module.css'
type Props = {}

import { urbanist, jb_mono } from '@/app/assets/fonts'

function SignUp({}: Props) {
  return (
    <div className={`${styles.LogIn}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.form}`}>
          <h2 className={`${urbanist.className}`}>tour.</h2>
          <div className={`${styles.form_cover}`}>
            <input placeholder='Имя' type="text" className={`${jb_mono.className} ${styles.name_input}`} />
            <input placeholder='Фамилия' type='text' className={`${jb_mono.className} ${styles.sname_input}`} />
            <input placeholder='Телефон' type='tel' className={`${jb_mono.className} ${styles.tel_input}`} />
            <button className={`${jb_mono.className} ${styles.submit_btn}`}>Далее</button>
          </div>
        </div>
        <BlackFooter extended={false} />
      </div>
    </div>
  )
}

export default SignUp