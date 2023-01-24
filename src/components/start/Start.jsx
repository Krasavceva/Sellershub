import styles from "../start/start.module.scss";
import pict from "../../assets/images/pict_woman.png";

const Start = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={pict} alt="logo" />
      <div className={styles.text__container}>
        <h1>Вы менеджер?</h1>
        <p>Продвигайтесь у нас и получите море клиентов</p>
      </div>
      <button className={styles.btn}>Начать</button>
    </div>
  );
};

export default Start;