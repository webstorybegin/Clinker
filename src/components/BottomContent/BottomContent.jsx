import styles from "./BottomContent.module.scss";

export const BottomContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>
          Vipklinker is your partner in shaping the public and private space
        </h1>
        <h2 className={styles.subtitle}>
          С другой стороны, социально-экономическое развитие позволяет выполнить
          важные задания по разработке направлений прогрессивного развития. В
          частности, курс на социально-ориентированный национальный проект
          требует анализа форм воздействия.
        </h2>
        <button type="button">Переход</button>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.rightColumnItemLeft}/>
        <div className={styles.rightColumnItemRight}>
          <div className={styles.rightColumnItemRightItem} />
          <div className={styles.rightColumnItemRightItem} />
        </div>
      </div>
    </div>
  );
};
