import  styles  from "./footer.module.scss";
import { React } from "react";
export function Footer() {
  let time = new Date();
  return (
    <footer className={styles.footer_main}>
      <p className={styles.footer__paragraph}>{`${time.getFullYear()} г.`}</p>
    </footer>
  )
}


