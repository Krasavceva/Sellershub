import style from "./style.module.scss";

export default function BreadCrumbs() {
  return (
    <div className={style.wrapper_crumbs} >
      <div className={style.home}>
        <img src="./assets/icons/home_crumbs.png" alt="home" />
      </div>
      <div className={style.arrow}>
        <img src="./assets/icons/arrow_crumb.png" alt="arrow" />
      </div>
      <div className={style.qusetions}>Вопросы и ответы</div>
      <div className={style.arrow}>
        <img src="./assets/icons/arrow_crumb.png" alt="arrow" />
      </div>
      <div className={style.developers}>Разработка игры и приложений</div>
    </div>
  );
}
