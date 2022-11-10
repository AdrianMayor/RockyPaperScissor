import paperIcon from "../../images/icon-paper.svg";
import rockIcon from "../../images/icon-rock.svg";
import scissorsIcon from "../../images/icon-scissors.svg";
import "./ButtonGame.css";

const ButtonGame = ({ button, handleOnClick, result = "" }) => {
  return (
    <>
      {button === "scissors" && (
        <button
          id={button}
          className={`buttonGame buttonGame${result} ${button}`}
          onClick={handleOnClick}
        >
          <img src={scissorsIcon} alt={button} className={button}></img>
        </button>
      )}
      {button === "rock" && (
        <button
          id={button}
          className={`buttonGame buttonGame${result} ${button}`}
          onClick={handleOnClick}
        >
          <img src={rockIcon} alt={button} className={button}></img>
        </button>
      )}
      {button === "paper" && (
        <button
          id={button}
          className={`buttonGame buttonGame${result} ${button}`}
          onClick={handleOnClick}
        >
          <img src={paperIcon} alt={button} className={button}></img>
        </button>
      )}
    </>
  );
};

export default ButtonGame;
