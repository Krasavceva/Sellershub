import styles from "./styles.module.scss";
import Headuser from "../HeadUser/Headuser";
import Inside from "../Inside/Inside";
import Footerblock from "../Footerblock/Footerblock";
import img from "../../assets/images/img.png";

export default function Main() {
  return (
    <div className={styles.wrapper_main}>
      <div className={styles.wrapper_firstblock}>
        <div className={styles.container__box}>
          <Headuser />
          <div className={styles.text}>
            <p>
              Но перспективное планирование однозначно фиксирует необходимость
              первоочередных требований. В частности, укрепление и развитие
              внутренней структуры позволяет оценить значение благоприятных
              перспектив.
            </p>
            <img className={styles.img} src={img} alt="photo" />
          </div>
          <Footerblock />
          <Inside />
        </div>
      </div>

      <div className={styles.wrapper_secondblock}>
        <div className={styles.header}>
          <Headuser />
          <div className={styles.text}>
            Противоположная точка зрения подразумевает, что предприниматели в
            сети интернет представляют собой не что иное, как квинтэссенцию
            победы маркетинга над разумом и должны быть ассоциативно
            распределены по отраслям. Повседневная практика показывает, что
            экономическая повестка сегодняшнего дня говорит о возможностях
            глубокомысленных рассуждений. Приятно, граждане, наблюдать, как
            ключевые особенности структуры проекта и по сей день остаются уделом
            либералов, которые жаждут быть ограничены исключительно образом
            мышления. Имеется спорная точка зрения, гласящая примерно следующее:
            сторонники тоталитаризма в науке набирают популярность среди
            определенных слоев населения, а значит, должны быть преданы
            социально-демократической анафеме. В целом, конечно, существующая
            теория однозначно определяет каждого участника как способного
            принимать собственные решения касаемо глубокомысленных рассуждений.
          </div>
          <Footerblock />
        </div>
      </div>

      <div className={styles.wrapper_thirdblock}>
        <div className={styles.container__box}>
          <Headuser />
          <div className={styles.text}>
            <p>
              Но перспективное планирование однозначно фиксирует необходимость
              первоочередных требований. В частности, укрепление и развитие
              внутренней структуры позволяет оценить значение благоприятных
              перспектив.
            </p>
          </div>
          <Footerblock />
          <Inside />
        </div>
      </div>
    </div>
  );
}
