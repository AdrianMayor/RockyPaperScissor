import ButtonGame from "..//ButtonGame/ButtonGame";
import "./GameBox.css";

const GameInitialBox = ({
  setUserChoice,
  choices,
  setPlayed,
  setComputerChoice,
}) => {
  const handleOnClick = (e) => {
    let choice = e.target.className;

    if (choice.includes("rock")) setUserChoice("rock");
    if (choice.includes("paper")) setUserChoice("paper");
    if (choice.includes("scissors")) setUserChoice("scissors");

    setPlayed(true);

    const CPUChoice = () => {
      let value = Object.keys(choices).slice(0, 3)[
        Math.round(Math.random() * 2)
      ];
      if (value === choice) {
        CPUChoice();
      } else {
        setComputerChoice(value);
      }
    };
    CPUChoice();
  };

  return (
    <div className="mainGameBox__initial">
      {Object.keys(choices)
        .slice(0, 3)
        .map((choice) => {
          return (
            <ButtonGame
              button={choice}
              key={choice}
              handleOnClick={handleOnClick}
            />
          );
        })}
    </div>
  );
};

export default GameInitialBox;
