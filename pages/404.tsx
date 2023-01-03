import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

const NotFound: NextPage = () => {
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
        <div className="page">
          <p>
            <strong>404 - Not Found (aggressive)</strong>
            <br />
            (⌐▀͡ ̯ʖ▀) what&apos;re you looking at, buddy?
            <br />
            (⌐▀͡ ̯ʖ▀)⊃ <Link href="/">click here</Link> to go back or you&apos;ll
            regret it, kid.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
