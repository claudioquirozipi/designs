import { MainProps } from "./interface";
import Link from "next/link";
import styles from "./styles.module.css";

function Main(props: MainProps) {
  const { pages } = props;
  return (
    <main className={styles.main}>
      <ul className={styles.menu}>
        {pages.map((page, i) => (
          <li key={i} className={styles.item}>
            <Link href={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.sunContainer}>
        <div className={styles.sun} />
      </div>
      <div className={styles.cityImg} />
      {/* <div className={`${styles.cityImg} ${styles.cityImgRight}`} /> */}
      <div className={styles.imgContainer}>
        <div className={styles.image}></div>
      </div>
    </main>
  );
}

export default Main;
