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
            <b>Winter 2023 (Current)</b>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://artsci.calendar.utoronto.ca/course/csc301h1"
                  rel="noopener noreferrer"
                >
                  CSC301
                </a>{" "}
                - Introduction to Software Engineering
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://artsci.calendar.utoronto.ca/course/csc324h1"
                  rel="noopener noreferrer"
                >
                  CSC324
                </a>{" "}
                - Programming Languages
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://artsci.calendar.utoronto.ca/course/csc367h1"
                  rel="noopener noreferrer"
                >
                  CSC367
                </a>{" "}
                - Parallel Programming
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://artsci.calendar.utoronto.ca/course/mat235y1"
                  rel="noopener noreferrer"
                >
                  MAT235
                </a>{" "}
                - Multivariable Calculus
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://artsci.calendar.utoronto.ca/course/mat246h1"
                  rel="noopener noreferrer"
                >
                  MAT246
                </a>{" "}
                - Abstract Mathematics
              </li>
            </ul>
          </p>
          <br />
          <p>Links to past courses not provided (courses change every year)</p>
          <br />
          <p>
            Fall 2022 (Y3)
            <ul>
              <li>CSC369 - Operating Systems</li>
              <li>CSC373 - Algorithm Design & Analysis</li>
              <li>CSC309 - Programming on the Web</li>
              <li>MAT235 - Multivariable Calculus</li>
              <li>NFS284 - Basic Human Nutrition</li>
            </ul>
          </p>
          <br />
          <p>
            Winter 2022 (Y2)
            <ul>
              <li>CSC209 - Software Tools & Systems Programming</li>
              <li>CSC263 - Data Structures & Analysis</li>
              <li>CSC343 - Introduction to Databases</li>
              <li>ENT200 - Innovation & Entrepreneurship</li>
            </ul>
          </p>
          <br />
          <p>
            Fall 2021 (Y2)
            <ul>
              <li>CSC207 - Software Design</li>
              <li>CSC236 - Introduction to Theory of Computation</li>
              <li>CSC258 - Computer Organization</li>
              <li>STA247 - Probability with Computer Applications</li>
            </ul>
          </p>
          <br />
          <p>
            Winter 2021 (Y1)
            <ul>
              <li>CSC111 - Foundations of Computer Science II</li>
              <li>MAT137 - Calculus with Proofs</li>
              <li>MAT223 - Linear Algebra I</li>
              <li>PSY100 - Introduction to Psychology</li>
              <li>VIC172 - Physical Sciences Today</li>
              <li>VIC173 - Philosophy of Science for Physical Sciences</li>
            </ul>
          </p>
          <br />
          <p>
            Fall 2020 (Y1)
            <ul>
              <li>CSC110 - Foundations of Computer Science I</li>
              <li>MAT137 - Calculus with Proofs</li>
              <li>VIC172 - Physical Sciences Today</li>
              <li>VIC173 - Philosophy of Science for Physical Sciences</li>
            </ul>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Coursework;
