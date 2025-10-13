import styles from "./Footer.module.css";
import { poiretOne } from "@/fonts/fonts";
import whatsap from "../../app/whatsapp-icon.png";
import telegram from "../../app/telegram.png";
import Image from "next/image";

const contacts = [
  { img: whatsap, link: "https://wa.me/79169268737" },
  { img: telegram, link: "https://t.me/Vesnina_Liana" },
];

export function Footer() {
  return (
    <footer className={`${styles.header}`}>
      <h1 className={`${poiretOne.className}`}>Веснина Лиана Анатольевна</h1>
      <div className={`${styles.icons_wrapper}`}>
        {contacts.map((item, idx) => (
          <a key={idx} href={item.link} target="_blank">
            <Image className={`${styles.icons}`} src={item.img} alt="icon" />
          </a>
        ))}
      </div>
      <div></div>
    </footer>
  );
}
