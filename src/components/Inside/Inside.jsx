import styles from "../Inside/styles.module.scss";
import icon from "../../assets/icons/icon.png";
import ava from "../../assets/images/ava.png";
import dots from "../../assets/icons/dots.png";
import done from "../../assets/icons/done.png";
import up from "../../assets/icons/up.png";
import line from "../../assets/icons/line.png";
import { Best } from "../Buttons/Button.jsx";

const Inside = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__box}>
        <div className={styles.header__container}>
          <div className={styles.parts}>
            <img src={ava} alt="photo" />
            <div className={styles.name__part}>
              <div className={styles.name}>
                <p>Катя Кравц</p>
                <div className={styles.icon__part}>
                  <img src={icon} />
                  <p>Эксперт</p>
                </div>
              </div>
              <div className={styles.time__part}>
                <p className={styles.time}>17м назад</p>
              </div>
            </div>
          </div>
          <img src={dots} alt="dots" />
        </div>
        <p>
          Противоположная точка зрения подразумевает, что предприниматели в сети
          интернет представляют собой не что иное, как квинтэссенцию победы
          маркетинга над разумом и должны быть ассоциативно распределены по
          отраслям. Повседневная практика
        </p>
        <div className={styles.footer__container}>
          <div className={styles.arrows}>
            <img src={done} alt="done" />
            <p className={styles.num}>27</p>
            <img src={line} alt="line" />
            <img src={up} alt="up" />
          </div>
          <Best />
        </div>
      </div>
    </div>
  );
};

export default Inside;
