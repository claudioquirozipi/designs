import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import shoes from "../data/shoes";
import type { Shoe } from "../data/shoes";

export default function Shoes() {
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-900">
      {shoes?.length && (
        <div className="grid grid-cols-3 gap-16">
          {shoes.map((shoe, i) => (
            <Card key={i} shoe={shoe} />
          ))}
        </div>
      )}
    </div>
  );
}

interface CardProps {
  shoe: Shoe;
}
function Card(cardProps: CardProps) {
  const { brand, model, size, color, image, background } = cardProps.shoe;
  return (
    <div
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
