'use client'
import BusinessInfo from "../components/api/BusinessInfo";
import BusinessList from "../components/api/BusinessList";
import UserInfo from "../components/api/UserInfo";
import styles from "../styles/interface.module.css"


export default function Interface() {

  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <UserInfo />
          <BusinessList />
          <BusinessInfo />
        </div>
      </div>
    </main>
  );
}
