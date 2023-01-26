import styles from "../Pushes/pushes.module.scss";
import logo1 from "../../assets/icons/Vector.png";
import logo2 from "../../assets/icons/Vector2.png";
import logo3 from "../../assets/icons/Vector3.png";
import logo4 from "../../assets/icons/Vector4.png";

const Right_menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.new}>
        <div className={styles.box}>
          <img src={logo1} />
        </div>
        <p className={styles.p__new}>Новые и поппулярные</p>
      </div>
      <div className={styles.my__quest}>
        <div className={styles.box}>
          <img src={logo2} />
        </div>
        <p className={styles.p__quest}>Мои вопросы</p>
      </div>
      <div className={styles.my__answers}>
        <div className={styles.box}>
          <img src={logo3} />
        </div>
        <p className={styles.p__answers}>Мои ответы</p>
      </div>
      <div className={styles.notifications}>
        <div className={styles.box}>
          <img src={logo4} />
        </div>
        <p className={styles.p__notifications}>Уведомления</p>
      </div>
    </div>
  );
};

export default Right_menu;
