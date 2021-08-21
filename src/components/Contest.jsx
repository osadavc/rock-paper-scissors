import styles from "../styles/contest.module.scss";

const Contest = ({ computerHand, userHand, setResult, result }) => {
  return (
    <div className={styles.contest}>
      <div>
        <h1>YOU PICKED</h1>
        <div className={styles.handImageContainer}>
          <img src={`./images/${userHand}.png`} />
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
          <img src={`./images/${computerHand}.png`} />
        </div>
      </div>
    </div>
  );
};

export default Contest;
