import styles from "./styles.module.scss";
import eye from "../../assets/icons/eye.png";
import icon from "../../assets/icons/icon.png";
import ava from "../../assets/images/ava.png";
import dot from "../../assets/icons/dot.png";

const Headuser = () => {
  return (
    <div className={styles.container}>
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
            <p>17м назад</p>
            <img src={dot} />
            <p>Разработка ПО</p>
          </div>
        </div>
      </div>
      <div className={styles.views}>
        <img src={eye} alt="eye" />
        <p>214</p>
      </div>
    </div>
  );
};

export default Headuser;
