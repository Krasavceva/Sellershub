import styles from "./styles.module.scss";
import icon from "../../assets/icons/Vector5.png";
import icon2 from "../../assets/icons/icon2.png";

export default function ListTopUsers({ title, items }) {
  return (
    <>
      <div className={styles.title}>
        <h6>{title}</h6>
        <img src={icon} alt="title" />
      </div>
      <div className="list_users">
        {items.map((item) => (
          <div className={styles.wrapper_user}>
            <div className={styles.avatar}>
              <img src={item.photo} alt="photo" />
            </div>
            <div className={styles.info_user}>
              <p>{item.name}</p>
              <div className={styles.number_user}>
                <img src={icon2} alt="number" />
                <span>{item.number}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
