import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

const Information: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeffrey Luo</title>
        <meta name="description" content="on the net" />
      </Head>
      <main className={styles.main}>
        <div>
          <Nav />
        </div>
        <div>
          <p>Page WIP</p>
          <br />
        </div>
        <div className="page">
          <p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Qi774PfZSVqvNRkdWSGzRwDCug3gDjsw/view?usp=sharing"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Information;
