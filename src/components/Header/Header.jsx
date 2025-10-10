import styles from "./Header.module.css";
import { Poiret_One, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

const poiretOne = Poiret_One({
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

const navigation = [
  { to: "contact", title: "Контакты" },
  { to: "about", title: "Обо мне" },
];

export function Header() {
  console.log(styles);

  return (
    <header className={`${styles.header}`}>
      <h1 className={`${poiretOne.className}`}>Лиана Веснина</h1>
      {/* <Image width={100} src={logo}/> */}
      <nav className={`${styles.nav}`}>
        <ul className={`flex gap-10`}>
          {navigation.map((item, index) => (
            <li className={`${raleway.className} `} key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </header>
  );
}
