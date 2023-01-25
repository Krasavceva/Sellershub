import styles from "../footer/footer.module.scss";
import { Answer } from "../../buttons/Button";

import done from "../../../assets/icons/done.png";
import up from "../../../assets/icons/up.png";
import line from "../../../assets/icons/line.png";
import dialogs from "../../../assets/icons/dialog.png";
import arrow from "../../../assets/icons/arrow.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.arrows}>
          <img src={done} alt="done" />
          <p>27</p>
          <img src={line} alt="line" />
          <img src={up} alt="up" />
        </div>
        <div className={styles.dialods}>
          <img src={dialogs} alt="dialogs" />
          <p>12</p>
          <img src={arrow} alt="arrow" />
          <p>6</p>
        </div>
      </div>
      <Answer />
    </div>
  );
};

export default Footer;
