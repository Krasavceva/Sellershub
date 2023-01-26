import styles from "../../components/Aside/styles.module.scss";
import Question from "../Questions/Question";
import Pushes from "../Pushes/Pushes";
import Start from "../Start/Start";

export default function Aside() {
  return (
    <div className={styles.wraper}>
      <Question />
      <Pushes />
      <Start />
    </div>
  );
}
