import logoGame from "../../images/logo.svg";
import "./ScoreHeader.css";
const ScoreHeader = ({ score }) => {
  return (
    <div className="scoreHeader">
      <img src={logoGame} alt="logo"></img>
      <div className="scoreHeader__table">
        <p>SCORE</p>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default ScoreHeader;
