import styles from "../button/button.module.scss";

export default function Button(props) {
  const { name } = props;
  return <button className={styles.btn}>{name}</button>;
}
