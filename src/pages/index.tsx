import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import { SlMenu } from "react-icons/Sl";
import { useMenuContext } from "../utils/MenuContext";

const Home: NextPage = () => {
  const { toggleOpen, isOpen } = useMenuContext();

  return (
    <>
      <Head>
        <title>enzym.vfx</title>
        <meta name="description" content="created by erratinsilentio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main flex items-start justify-start">
        <Spline
          scene="https://prod.spline.design/PSOHRGJ0t7vihQtp/scene.splinecode"
          className={isOpen ? "splineOpen" : "splineClosed"}
        />
        <SlMenu className="hamburger" onClick={toggleOpen} />
        <article className={isOpen ? "text open" : "text closed"}>
          ABOUT
        </article>
        <article className={isOpen ? "text2 open" : "text2 closed"}>
          MY WORK
        </article>
        <section className={isOpen ? "text3 open" : "text3 closed"}>
          <article className="contact">CONTACT</article>
          <article className="me">ME</article>
        </section>
      </main>
    </>
  );
};

export default Home;
