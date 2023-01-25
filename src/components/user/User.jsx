import styles from "../user/user.module.scss";
import icon from "../../assets/icons/icon2.png";

export default function User(props) {
  const { photo, name, number } = props;
  return (
    <div className={styles.container}>
      <img src={photo} alt="user"></img>
      <div className={styles.container__text}>
        <p className="name">{name}</p>
        <div className={styles.container__num}>
          <div className={styles.box}>
            <img src={icon} alt="icon" />
          </div>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}
