import { type NextPage } from "next";
import Head from "next/head";
import { SlMenu } from "react-icons/Sl";
import { useMenuContext } from "../utils/MenuContext";
import { Menu } from "../components/home/Menu";
import { SplineUI } from "../components/home/Spline";

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
        <SplineUI isOpen={isOpen} />
        <SlMenu className="hamburger" onClick={toggleOpen} />
        <Menu isOpen={isOpen} />
      </main>
    </>
  );
};

export default Home;
