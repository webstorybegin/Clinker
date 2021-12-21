import { Header } from "../Header/Header";
import { TopContent } from "../TopContent/TopContent";
import { BottomContent } from "../BottomContent/BottomContent";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header /> 
       <div className={styles.topContent}>
        <TopContent />
      </div>
      <div className={styles.bottomContent}>
        <BottomContent />
      </div>
    </div>
  );
}

export default App;
