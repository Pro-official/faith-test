import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "https://ordere.sgp1.cdn.digitaloceanspaces.com/store/demo.store.ordere.com/menu.json"
  );
  const categories = await res.json();
  // Pass data to the page via props
  return { props: { categories } };
}

export default function Home({ categories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {categories.categories.map((category) => (
          <div
            key={category.id}
            href="https://nextjs.org/docs"
            className={styles.card}
          >
            <h2>{category.name} &rarr;</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
