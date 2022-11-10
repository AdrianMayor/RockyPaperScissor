import ButtonGame from "../ButtonGame/ButtonGame";
import "./ResultScreen.css";

const ResultScreen = ({
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
  console.log("computerchoice", computerChoice);
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
