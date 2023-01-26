import styles from "./styles.module.scss";
import photo from "../../assets/images/photo.png";
import { Button } from "../Buttons/Button";

import icon from "../../assets/icons/icon.png";
import icon2 from "../../assets/icons/icon2.png";

const Question = () => {
  return (
    <div className={styles.container}>
      <div className={styles.connoisseur}>
        <img src={photo} alt="photo" />
        <div className={styles.photo__text}>
          <div className={styles.info_connois}>
            <img className={styles.icon} src={icon} alt="icon" />
            <p className={styles.connois__name}>Знаток</p>
          </div>
          <p className={styles.p__name}>Владимир Савостенко</p>
          <div className={styles.karma}>
            <div>
              <img className={styles.icon} src={icon2} alt="icon" />
            </div>
            <p>123</p>
            <p className={styles.karma__name}>Карма</p>
          </div>
        </div>
      </div>
      <Button className={styles.btn} name={"Задать вопрос"} />
    </div>
  );
};

export default Question;
