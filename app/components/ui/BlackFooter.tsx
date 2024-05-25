'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
  extended: boolean
}
import { urbanist, ubuntu, jost, jb_mono } from '@/app/assets/fonts'
import styles from '../../styles/BlackFooter.module.css'
import vk_icon from '../../assets/vk-icon.png'
import in_icon from '../../assets/instagram-icon.png'
import you_icon from '../../assets/youtube-icon.png'
import gm_icon from '../../assets/gmail-icon.png'



function BlackFooter({extended}: Props) {
  console.log(extended);
  return (
    <footer className={`${styles.BlackFooter}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.leftbar} ${extended ? '' : styles.hidden}`}>
          <p className={`${styles["gray-small-text-1"]} ${jost.className}`}>Создавайте уникальный контент и продвигай свой бизнес с помощью инструментов <span className={`${styles["cyan-italic-text"]} ${urbanist.className}`}>tour+</span></p>
          <div className={`${styles['btnbar']}`}>
            <Link href={'/reg'}>
              <button className={`${styles["black-button"]} ${jb_mono.className}`}>Зарегистрироваться</button>
            </Link>
            <Link href={'/auth'}>
              <button className={`${styles["black-button"]} ${jb_mono.className}`}>Войти</button>
            </Link>
          </div>
        </div>

        <div className={`${styles.rightbar}`}>
          <svg className="concept-logo-1" width="74.000000" height="74.000000" viewBox="45 45 80 80" fill="black">
            <path d="M87.52 52.54L87.26 53.58L87.26 54.1L87.26 54.61L87.26 55.13L87 55.65L87 56.16L87 56.68L87 57.2L87 57.71L87 58.23L87 58.49L87 59L87 60.04L87 60.55L87 61.07L87 61.85L87.26 63.14L87.26 64.17L87.52 65.21L87.52 66.24L88.05 69.86L88.58 71.15L88.58 71.66L88.85 72.44L89.11 73.47L89.38 74.25L89.64 75.28L90.17 76.57L90.44 77.09L91.5 79.16L92.29 80.45L93.08 81.74L94.14 82.52L94.94 83.55L96.26 84.33L98.38 85.36L99.44 85.36L100.23 85.62L100.76 85.62L101.55 85.62L102.08 85.62L103.14 85.36L104.73 85.1L106.05 84.58L107.64 83.81L109.5 82.52L111.08 81.23L112.41 79.67L113.2 78.64L113.73 77.61L114 78.9L114 79.93L114 81.48L114 83.81L113.73 85.62L113.2 87.94L112.67 90.53L111.61 93.63L109.76 97.25L107.91 99.83L105.52 102.67L102.35 105.77L97.05 109.13L93.08 110.94L88.32 111.97L83.55 112.49L79.58 112.49L74.55 111.46L69.26 109.65L63.7 106.55L60.52 103.7L57.35 100.35L55.23 96.99L52.85 92.34L51.26 86.39L51 83.03L51.26 78.64L51.52 75.54L52.58 72.44L53.64 69.08L55.23 66.24L57.61 63.14L60 60.04L63.44 57.2L66.61 55.39L69.52 53.84L72.17 52.8L75.61 51.77L79.05 51L81.97 51L85.41 51.25L87.52 51.51L87.52 52.54Z" stroke="#30D5C8" stroke-opacity="1.000000" stroke-width="3.000000"/>
          </svg>
          <div className={`${styles["gray-small-text-2"]} ${styles.concept} ${urbanist.className}`}>concept</div>
          <div className={`${styles["images-links-set"]}`}>
            <Image src={vk_icon} alt="vk-icon" />
            <Image src={in_icon} alt="instagram-icon" />
            <Image src={you_icon} alt="youtube-icon" />
            <Image src={gm_icon} alt="gmail-icon" />
          </div>
          <div className={`${styles["gray-small-text-2"]} ${urbanist.className}`}>© Concept. 2024 All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default BlackFooter