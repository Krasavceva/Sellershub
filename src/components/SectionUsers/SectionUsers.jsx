import styles from "./styles.module.scss";
import users from "../../users.json";
import ListTopUsers from "../ListTopUsers/ListTopUsers";

export default function SectionUsers() {
  return (
    <div className={styles.wrapper_section_users}>
      <div className={styles.wrapper_top_expert}>
        <ListTopUsers title="Топ знатоков" items={users} />
      </div>
      <div className="wrappet_top_acitve">
        <ListTopUsers title="Топ активных" items={users} />
      </div>
    </div>
  );
}
