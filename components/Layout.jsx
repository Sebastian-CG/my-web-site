import Head from "next/head";
import { Fragment } from "react";
import styles from "../styles/Layout.module.scss";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Hello my name is sebastian, I am a frontend programmer and here you can find alugnos projects that I have done, more doing me and ways to contact millet"
        />
        <meta
          name="keywords"
          content="portfolio, frontend, developer, programmer, code, react developer, javascript developer"
        />
        <meta name="author" content="Luis Sebastian Gonzalez Cordero" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0099ff" />
        <title>Portfolio | Sebastian Frontend Developer</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className={styles.main_container}>{children}</main>
      <Footer />
    </Fragment>
  );
}
