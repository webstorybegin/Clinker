import styles from "./TopContent.module.scss";

export const TopContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1>О компании</h1>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.rightColumnItemTop}>
          <div className={styles.rightColumnItem} />
          <div className={styles.rightColumnItem}>
            Закрываем весь ваш объект по керамике под ключ
          </div>
        </div>
        <div className={styles.rightColumnItemBottom}>
          <span>Эксклюзивно <br /> в Украине</span>
          <span>18</span>
          <span>европейских <br /> брендов</span>
        </div>
      </div>
    </div>
  );
};
