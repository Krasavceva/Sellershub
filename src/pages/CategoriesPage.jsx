import styles from "../styles/categoriespage.module.scss";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import SectionUsers from "../components/SectionUsers/SectionUsers";
import Main from "../components/Main/Main";

export default function CategoriesPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.wrapper_main}>
        <div className={styles.sectionusers}>
          <SectionUsers />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div className={styles.aside}>
          <Aside />
        </div>
      </div>
    </div>
  );
}
