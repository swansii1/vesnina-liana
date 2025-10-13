import { poiretOne } from "@/fonts/fonts";
import styles from "./Header.module.css";
import { DisplayContacts } from "../DisplayContacts/DisplayContacts";

export function Header() {
  console.log(styles);

  return (
    <header className={`${styles.header}`}>
      <h1 className={`${poiretOne.className} ${styles.name}`}>
        Веснина Лиана Анатольевна
      </h1>
      <div className={`${styles.icons_wrapper}`}>
        <DisplayContacts />
      </div>
    </header>
  );
}
