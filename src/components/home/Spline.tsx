import style from "./spline.module.css";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import RingLoader from "react-spinners/RingLoader";

export const SplineUI = () => {
  return (
    <Suspense
      fallback={<RingLoader color="#e879f9" className={style.loader} />}
    >
      <Spline
        scene="https://prod.spline.design/PSOHRGJ0t7vihQtp/scene.splinecode"
        className={style.closed}
      />
    </Suspense>
  );
};
