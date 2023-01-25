import styles from "../buttons/button.module.scss";

function Button(props) {
  const { name } = props;
  return <button className={styles.btn}>{name}</button>;
}

function Answer() {
  return <button className={styles.btn__answer}>Ответить</button>;
}

function Best() {
  return <button className={styles.btn__best}>Лучший ответ</button>;
}

export { Button, Answer, Best };
