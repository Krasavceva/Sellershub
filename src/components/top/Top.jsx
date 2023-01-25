import styles from "../top/top.module.scss";

import users from "../../Services/users.json";
import User from "../user/User";
import icon from "../../assets/icons/Vector5.png";

const Top = (props) => {
  const { h1 } = props;
  return (
    <div className="container">
      <div className={styles.h1}>
        <h1>{h1}</h1>
        <div>
          <img src={icon} alt="icon" />
        </div>
      </div>
      {users.map((user) => (
        <User photo={user.photo} name={user.name} number={user.number}></User>
      ))}
    </div>
  );
};

export default Top;
