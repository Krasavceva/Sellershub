import { Button } from "../Buttons/Button";
import styles from "../Header/styles.module.scss";
import logo from "../../assets/logo.png";
import photo from "../../assets/images/photo.png";
import arrowdone from "../../assets/icons/arrowdone.png";

export default function Header() {
  return (
    <>
      <div className={styles.wrapper__header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <div className={styles.wrapper_link}>
            <a href="#">Каталог</a>
            <a href="#">Вопросы и Ответы</a>
            <a href="#">Поддержка</a>
          </div>
        </nav>
        <div className={styles.wrapper_btn}>
          <Button name={"Задать вопрос"} text="Задать вопрос" />
        </div>
        <div className={styles.user_room}>
          <div className={styles.wrapper_avatar}>
            <img src={photo} alt="avatar" />
          </div>
          <div className={styles.wrapper_arrow}>
            <img src={arrowdone} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
