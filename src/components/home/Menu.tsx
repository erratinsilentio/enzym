import Link from "next/link";
import style from "./menu.module.css";

export const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <article
        className={`${style.text} ${isOpen ? style.open : style.closed}`}
      >
        <Link href="/about">ABOUT</Link>
      </article>
      <article
        className={`${style.text2} ${isOpen ? style.open : style.closed}`}
      >
        <Link href="/work">MY WORK</Link>
      </article>
      <section
        className={`${style.text3} ${isOpen ? style.open : style.closed}`}
      >
        <article className={style.contact}>
          <Link href="/contact">CONTACT </Link>
        </article>
        <article className={style.me}>
          <Link href="/contact">ME</Link>
        </article>
      </section>
    </>
  );
};
