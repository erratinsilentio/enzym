"use client";
import style from "./home.module.css";
import { motion } from "framer-motion";

export const Page = () => {
  return (
    <section className={style.section}>
      <article className={style.box}>
        <motion.p
          initial={{ opacity: 0, y: "100px" }}
          animate={{
            opacity: 1,
            translateY: "-100px",
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className={style.logo}
        >
          enzym
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 2.0 }}
          className={style.menu}
        >
          <li className={style.menubtn}>home</li>
          <li className={style.menubtn}>about</li>
          <li className={style.menubtn}>portfolio</li>
          <li className={style.menubtn}>contact</li>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, width: "0px" }}
          animate={{
            opacity: 1,
            width: "90vw",
          }}
          transition={{ duration: 1, delay: 1.25 }}
          className={style.line}
        ></motion.span>
      </article>
      <img src="/squik2.svg" alt="fractal" className={style.fractal} />
    </section>
  );
};
