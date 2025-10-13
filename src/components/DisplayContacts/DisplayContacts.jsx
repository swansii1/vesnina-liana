import { contacts } from "@/utils/data";
import styles from "@/components/DisplayContacts/DisplayContacts.module.css";
import Image from "next/image";


export function DisplayContacts() {
  return (
    <>
      {contacts.map((item, idx) => (
        <a key={idx} href={item.link} target="_blank">
          <Image className={`${styles.icons}`} src={item.img} alt="icon" />
        </a>
      ))}
    </>
  );
}
