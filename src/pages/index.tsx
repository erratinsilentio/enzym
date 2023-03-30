import { type NextPage } from "next";
import Head from "next/head";
import About from "../sections/about";
import { Page } from "../sections/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>enzym.vfx</title>
        <meta name="description" content="created by erratinsilentio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main flex flex-col items-start justify-start">
        <Page />
        <About />
      </main>
    </>
  );
};

export default Home;
