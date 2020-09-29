import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
              maintenance, and more!
            </p>
          </p>
        </div>
      </main>
    </div>
  );
}
