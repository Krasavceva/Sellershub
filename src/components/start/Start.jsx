import styles from "../Start/start.module.scss";
import pict from "../../assets/images/pict_woman.png";
import { Button } from "../Buttons/Button";

export default function Start() {
  return (
    <div className={styles.wraper_start}>
      <img className={styles.img} src={pict} alt="logo" />
      <div className={styles.text__container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Вы менеджер?</h2>
          <p>Продвигайтесь у нас и получите море клиентов</p>
        </div>
      </div>
      <Button name={"Начать"} title="button"></Button>
    </div>
  );
}
