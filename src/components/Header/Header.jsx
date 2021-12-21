

import styles from './Header.module.scss';

export const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.nav}>
        <span>Решение</span>
        <span>О Вип Клинкер</span>
        <span>Акции на складе</span>
        <span>Контакты</span>
      </div>
      <div className={styles.contacts}>
        <span>Рус</span>
        <a href="tel:0443443567">(044) 344 35 67</a>
      </div>
      <div className={styles.burger}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}