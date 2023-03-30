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
        <motion.div className={style.menu}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
    </section>
  );
};
