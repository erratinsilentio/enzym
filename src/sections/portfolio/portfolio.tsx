import { Gallery } from "../../components/gallery/Gallery";
import style from "./portfolio.module.css";

export const Portfolio = () => {
  return (
    <section className={style.section}>
      <Gallery />
    </section>
  );
};
