import { SplineUI } from "../../components/home/Spline";
import style from "./about.module.css";

export default function About() {
  return (
    <section className={style.section}>
      <SplineUI />
      <div className={style.hero}>
        <h1 className={style.first}>Your next</h1>
        <h1 className={style.second}>
          creative <span className={style.vfx}>VFX</span> artist
        </h1>
        <h1 className={style.third}>my work</h1>
      </div>
    </section>
  );
}
