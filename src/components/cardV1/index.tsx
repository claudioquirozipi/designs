import { type CardV1Props } from "./interface";
import Image from "next/image";
import styles from "./styles.module.css";

export function CardV1(props: CardV1Props) {
  const { size, image, color, background, brand, model } = props.shoe;

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`${styles[background]} ${styles.card}`}
      data-content={brand}
    >
      <div className={styles.imgBx}>
        <Image src={image} alt="" width={300} height={300} />
      </div>
      <div className={styles.contentBx}>
        <h2>{model}</h2>
        <div className={styles.size}>
          <h3>Size: </h3>
          {size.map((size, i) => (
            <span key={i}>{size}</span>
          ))}
        </div>
        <div className={styles.color}>
          <h3>Color: </h3>
          {color.map((color, i) => (
            <span key={i} className={styles[color]} />
          ))}
        </div>
        <a href="#">Buy Now</a>
      </div>
    </div>
  );
}

export default CardV1;
