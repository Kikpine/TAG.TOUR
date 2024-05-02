import React from 'react'
import BlackFooter from './BlackFooter'
import styles from '../../styles/LogIn.module.css'
type Props = {}

import { urbanist, jb_mono } from '@/app/assets/fonts'

function LogIn({}: Props) {
  return (
    <div className={`${styles.LogIn}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.form}`}>
          <h2 className={`${urbanist.className}`}>tour.</h2>
          <div className={`${styles.form_cover}`}>
            <input placeholder='Телефон' type="tel" className={`${jb_mono.className} ${styles.tel_input}`} />
            <input placeholder='Пароль' type='password' className={`${jb_mono.className} ${styles.pass_input}`} />
            <button className={`${jb_mono.className} ${styles.submit_btn}`}>Далее</button>
          </div>
        </div>
        <BlackFooter extended={false} />
      </div>
    </div>
  )
}

export default LogIn