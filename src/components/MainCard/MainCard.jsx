import Image from "next/image";
import liana_photo from "@/../public/liana.jpg";
import styles from "@/components/MainCard/MainCard.module.css";

export function MainCard() {
  return (
    <main className={`${styles.wrapper_main}`}>
      <Image
        width={300}
        src={liana_photo}
        className={`${styles.photo}`}
        alt="photo Liana"
      />
      <div>
        <section></section>
        <section></section>
      </div>
    </main>
  );
}
