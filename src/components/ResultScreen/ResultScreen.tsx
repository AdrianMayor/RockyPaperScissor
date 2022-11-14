import React from "react";
import ButtonGame from "../ButtonGame/ButtonGame";
import "./ResultScreen.css";

interface Props {
  userChoice: string;
  computerChoice: string;
  resultMessage: string;
  setPlayed: (played: boolean) => void;
  setUserChoice: (choice: string) => void;
  setComputerChoice: (choice: string) => void;
}

const ResultScreen: React.FunctionComponent<Props> = ({
  userChoice,
  computerChoice,
  resultMessage,
  setPlayed,
  setUserChoice,
  setComputerChoice,
}) => {
  const handleReset = () => {
    setPlayed(false);
    setUserChoice("");
    setComputerChoice("");
  };

  return (
    <div className="mainGameBox__result">
      <div className="mainGameBox__result--card">
        <p>YOU PICKED</p>
        <ButtonGame button={userChoice} result={"__result"} />
      </div>
      <div className="mainGameBox__result--resultPlayAgain">
        <p>{resultMessage}</p>
        <button
          className={
            resultMessage === "YOU LOSE"
              ? "resultPlayAgainButton__lose"
              : "resultPlayAgainButton__win"
          }
          onClick={() => handleReset()}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="mainGameBox__result--card">
        <p>THE HOUSE PICKED</p>
        <ButtonGame button={computerChoice} result={"__result"} />
      </div>
    </div>
  );
};

export default ResultScreen;
