import { useState, useEffect } from "react";

import Head from "next/head";
import Scoreboard from "../components/Scoreboard";
import Hands from "../components/Hands";

import { referee } from "../utils";
import Contest from "../components/Contest";

const Home = () => {
  const hands = ["rock", "paper", "scissors"];

  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const [computerHand, setComputerHand] = useState(null);
  const [userHand, setUserHand] = useState(null);

  useEffect(() => {
    if (result === 0) {
      setResult("YOU LOSE!");
    } else if (result === 1) {
      setResult("YOU WIN!");
      setScore((prevScore) => prevScore + 1);
    } else if (result === 5) {
      setResult("It's a tie!");
    }
  }, [result]);

  const userHandSelection = (hand) => {
    const computerSelection = hands[Math.floor(Math.random() * hands.length)];

    setUserHand(hand);
    setComputerHand(computerSelection);

    setResult(referee(hand, computerSelection));
  };

  return (
    <div>
      <Head>
        <title>Rock Paper Scissor</title>
        <link rel="shortcut icon" href="favicon.jpg" type="image/x-icon" />
      </Head>

      <div className="main">
        <Scoreboard score={score} />
        {result ? (
          <Contest
            computerHand={computerHand}
            userHand={userHand}
            setResult={setResult}
            result={result}
          />
        ) : (
          <Hands setUserHand={userHandSelection} />
        )}
      </div>
    </div>
  );
};

export default Home;
