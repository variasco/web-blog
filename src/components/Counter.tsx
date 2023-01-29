import { useState } from "react";
import styles from "./style.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button className={styles.btn} onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
};
