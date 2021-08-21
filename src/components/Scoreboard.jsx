import styles from "../styles/scoreboard.module.scss";

const Scoreboard = ({ score }) => {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.title}>
        <img src="./images/title.png" />
      </div>
      <div className={styles.score}>
        <p>SCORE</p>
        <h1 className="score-count">{score}</h1>
      </div>
    </div>
  );
};

export default Scoreboard;
