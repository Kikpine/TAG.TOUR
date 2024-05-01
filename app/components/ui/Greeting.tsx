import React from 'react'
import styles from '../../styles/Greeting.module.css';
type Props = {}



function Greeting({}: Props) {
  return (
    <div className={styles['Greeting']}>
      <div className={styles['glowing-text']}>tour.</div>
      <p className={styles['white-small-text']}>Чето крутая соц сеть с картами ивентами и много чем крутым, но это в планах, пока что ничего из этого нет, но обязательно будет.</p>
      <button className={styles['gray-button']}>Узнать больше</button>
    </div>
  )
}

export default Greeting