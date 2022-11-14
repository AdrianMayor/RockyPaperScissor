import React from "react";
import ButtonGame from "../ButtonGame/ButtonGame";
import { Choices } from "../Game/gameChoices.model";
import "./GameBox.css";

interface Props {
  choices: Choices;
  setPlayed: (played: boolean) => void;
  setComputerChoice: (choice: string) => void;
  setUserChoice: (choice: string) => void;
}

const GameInitialBox: React.FunctionComponent<Props> = ({
  setUserChoice,
  choices,
  setPlayed,
  setComputerChoice,
}) => {
  const handleOnClick = (e): void => {
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
              result={""}
            />
          );
        })}
    </div>
  );
};

export default GameInitialBox;
