import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
            From Coquitlam, BC but based in Toronto at the moment. Currently in
            my third year studying computer science (specialist program) at the
            University of Toronto, with a focus on computer systems. Here&apos;s
            my <Link href="/coursework">current coursework</Link>, if
            you&apos;re interested.
          </p>
          <br />
          <p>
            In the past, I&apos;ve worked at Fortinet in cloud DevOps. Starting
            summer 2023, I&apos;ll be working at Red Hat in the Cloud
            Engineering team. You can see my full resume (and other information){" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Qi774PfZSVqvNRkdWSGzRwDCug3gDjsw/view?usp=sharing"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          <br />
          <p>
            When I&apos;m not working, you&apos;ll find me exercising or cooking
            (YouTube channel coming soon?), and here&apos;s my{" "}
            <a
              target="_blank"
              href="https://humanbenchmark.com/users/63b235474cfa9100081d2e56"
              rel="noopener noreferrer"
            >
              human benchmark
            </a>{" "}
            scores (very important).
          </p>
          <br />
          <p>(∩ ͡° ͜ʖ ͡°)⊃━☆ more content will be summoned shortly.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
