import styles from "../styles/contest.module.scss";
import { capitalizeFirstLetter } from "../utils.js";

const Contest = ({ computerHand, userHand, setResult, result }) => {
  return (
    <div className={styles.contest}>
      <div>
        <h1>YOU PICKED</h1>
        <div className={styles.handImageContainer}>
          <img src={`./images/${capitalizeFirstLetter(userHand)}.png`} />
        </div>
      </div>

      <div className={styles.referee}>
        <div>
          <h1>{result}</h1>
        </div>

        <div
          className={styles.newGame}
          onClick={() => {
            setResult(null);
          }}
        >
          PLAY AGAIN
        </div>
      </div>

      <div>
        <h1>THE HOUSE PICKED</h1>
        <div className={styles.handImageContainer}>
          <img src={`./images/${capitalizeFirstLetter(computerHand)}.png`} />
        </div>
      </div>
    </div>
  );
};

export default Contest;
