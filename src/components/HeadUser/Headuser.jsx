import styles from "./styles.module.scss";
import eye from "../../assets/icons/eye.png";
import icon from "../../assets/icons/icon.png";
import ava from "../../assets/images/ava.png";
import dot from "../../assets/icons/dot.png";

const Headuser = () => {
  return (
    <div className={styles.wrapper_headuser}>
      <div className={styles.headuser_parts}>
        <div className={styles.headuser_leftpart}>
          <img src={ava} alt="photo" />
          <div className={styles.text__part}>
            <div className={styles.name__text_part}>
              <div className={styles.name__part}>
                <p>Катя Кравц</p>
                <div className={styles.icon__part}>
                  <img src={icon} />
                  <p className={styles.icon__text}>Эксперт</p>
                </div>
              </div>
            </div>
            <div className={styles.time__part}>
              <p>17м назад</p>
              <img src={dot} />
              <p>Разработка ПО</p>
            </div>
          </div>
        </div>
        <div className={styles.rightpart}>
          <div className={styles.view__part}>
            <img src={eye} alt="eye" />
            <p className={styles.view}>214</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headuser;

{
  /* <div className={styles.wrapper_user}>
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
</div>; */
}
