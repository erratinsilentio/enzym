import style from "./gallery.module.css";

const images = [
  { id: 1, src: "/screen1.png" },
  { id: 2, src: "/screen1.png" },
  { id: 3, src: "/screen1.png" },
  { id: 4, src: "/screen1.png" },
  { id: 5, src: "/screen1.png" },
];

export const Gallery = () => {
  return (
    <section className={style.gallery}>
      {images.map((image) => (
        <img
          src={image.src}
          alt="image"
          className={style.image}
          draggable="false"
          key={image.id}
        />
      ))}
    </section>
  );
};
