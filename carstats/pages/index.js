import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CarStats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to CarStats!</h1>

        <p className={styles.description}>
          Get started by creating an account to save your data.
        </p>

        <div className={styles.grid}>
          <p className={styles.card}>
            <h3>What is CarStats?</h3>
            <p>
              A quick way to track vehicle milage, miles per gallon of gas,
              maintenance, and more!{" "}
            </p>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
