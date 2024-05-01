import Greeting from "./components/ui/Greeting";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Greeting />
    </main>
  );
}
