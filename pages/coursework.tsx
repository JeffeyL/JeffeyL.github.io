import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

const Coursework: NextPage = () => {
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
            Winter 2023
            <ul>
              <li>CSC301 - Introduction to Software Engineering</li>
              <li>CSC324 - Programming Languages</li>
              <li>CSC367 - Parallel Programming</li>
              <li>MAT235 - Multivariable Calculus</li>
              <li>MAT246 - Abstract Mathematics</li>
            </ul>
          </p>
          <br />
          <p>
            Fall 2022
            <ul>
              <li>CSC369 - Operating Systems</li>
              <li>CSC373 - Algorithm Design & Analysis</li>
              <li>CSC309 - Programming on the Web</li>
              <li>MAT235 - Multivariable Calculus</li>
              <li>NFS284 - Basic Human Nutrition</li>
            </ul>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Coursework;
