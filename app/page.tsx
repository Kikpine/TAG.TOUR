import Greeting from "./components/ui/Greeting";
import BlackFooter from "./components/ui/BlackFooter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Greeting />
      <BlackFooter extended={true} />
    </main>
  );
}


