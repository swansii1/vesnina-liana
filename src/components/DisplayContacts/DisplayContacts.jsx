import { contacts } from "@/utils/data";
import styles from "@/components/DisplayContacts/DisplayContacts.module.css";
import Image from "next/image";
import whatsap from "@/../public/image/whatsapp-icon.png";
import { montserrat } from "@/fonts/fonts";

export function DisplayContacts() {
  return (
    <>
      {contacts.map((item, idx) => (
        <div key={idx} className={`${styles.link} ${montserrat.className}`}>
          <a href={item.link} target="_blank">
            {item.text}
          </a>
          <div className={`${styles.photo}`}>
            <Image src={whatsap} width={30} alt="whatsap photo" />
          </div>
        </div>
      ))}
    </>
  );
}
