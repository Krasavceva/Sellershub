import styles from "./styles.module.scss";
import { Answer } from "../Buttons/Button";

import done from "../../assets/icons/done.png";
import up from "../../assets/icons/up.png";
import line from "../../assets/icons/line.png";
import dialogs from "../../assets/icons/dialog.png";
import arrow from "../../assets/icons/arrow.png";

const Footer = () => {
  return (
    <div className={styles.wraper_footer}>
      <div className={styles.footer__container}>
        <div className={styles.arrows}>
          <img src={done} alt="done" />
          <p className={styles.num}>27</p>
          <img src={line} alt="line" />
          <img src={up} alt="up" />
        </div>
        <div className={styles.dialods}>
          <img src={dialogs} alt="dialogs" />
          <p className={styles.num}>12</p>
          <img src={arrow} alt="arrow" />
          <p className={styles.num}>6</p>
        </div>
      </div>
      <Answer />
    </div>
  );
};

export default Footer;
