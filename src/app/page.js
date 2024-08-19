import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Adios<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>No soy </span>
            </span>
            <br />
            <span>Carlitos</span>
          </h1>
        </div>
      </header>
    </main>
  );
}