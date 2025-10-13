import Image from "next/image";
import liana_photo from "@/../public/liana.jpg";
import styles from "@/components/MainCard/MainCard.module.css";
import { mainData } from "@/utils/data";
import { raleway } from "@/fonts/fonts";
import { contacts } from "@/utils/data";

export function MainCard() {
  return (
    <main className={`${styles.wrapper_main}`}>
      <div className={`${styles.container}`}>
        <Image
          src={liana_photo}
          className={`${styles.photo}`}
          alt="photo Liana"
        />

        <div className={`${styles.icons_wrapper}`}>
          {contacts.map((item, idx) => (
            <a
              className={`${styles.icon}`}
              key={idx}
              href={item.link}
              target="_blank"
            >
              <Image className={`${styles.icons}`} src={item.img} alt="icon" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <section className={`${styles.section} ${raleway.className}`}>
          <h2 className={`${styles.about}`}>Обо мне:</h2>
          <ul className={`${styles.list}`}>
            {mainData.map((info, ind) => (
              <li className={`${styles.list_item}`} key={ind}>
                {info}
              </li>
            ))}
          </ul>
        </section>
        <section></section>
      </div>
    </main>
  );
}
