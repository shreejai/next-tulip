import Image from "next/image";
import styles from "./page.module.css";
import Navbar1 from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-danger">Hello Bootstrap</h1>
      <Navbar1/>
    </main>
  );
}
