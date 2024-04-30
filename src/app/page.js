import Image from "next/image";
import styles from "./page.module.css";
import TopMenu from "./components/TopMenu";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <main>
      <TopMenu/>
      <HeroSlider/>
    </main>
  );
}
