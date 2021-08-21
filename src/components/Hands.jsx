import styles from "../styles/hands.module.scss";

const Hands = ({ setUserHand }) => {
  return (
    <div className={styles.hands}>
      <div className={styles.paper} onClick={() => setUserHand("paper")}>
        <img src="./images/Paper.png" />
      </div>

      <div className={styles.scissor} onClick={() => setUserHand("scissors")}>
        <img src="./images/Scissors.png" />
      </div>

      <div className={styles.rock} onClick={() => setUserHand("rock")}>
        <img src="./images/Rock.png" />
      </div>
    </div>
  );
};

export default Hands;
