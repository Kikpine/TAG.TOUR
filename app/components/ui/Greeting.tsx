import React from 'react'
import styles from '../../styles/Greeting.module.css';
import {ubuntu, urbanist, jb_mono} from '../../assets/fonts'
type Props = {}



function Greeting({}: Props) {
  return (
    <div className={styles['Greeting']}>
      <div className={styles.content}>
        <div className={`${styles['glowing-text']} ${urbanist.className}`}>tour.</div>
        <p className={`${styles['white-small-text']} ${ubuntu.className}`}>Чето крутая соц сеть с картами ивентами и много чем крутым, но это в планах, пока что ничего из этого нет, но обязательно будет.</p>
        <button className={`${styles['gray-button']} ${jb_mono.className}`}>Узнать больше</button>
      </div>
    </div>
  )
}

export default Greeting