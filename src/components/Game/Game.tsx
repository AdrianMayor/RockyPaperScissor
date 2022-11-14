import React, { useEffect, useState } from "react";
import GameInitialBox from "../GameBox/GameBox";
import ResultScreen from "../ResultScreen/ResultScreen";
import RulesModal from "../RulesModal/RulesModal";
import RulesModalButton from "../RulesModalButton/RulesModalButton";
import ScoreHeader from "../ScoreHeader/ScoreHeader";
import "./Game.css";
import { Choices } from "./gameChoices.model";

const Game = () => {
  const choices: Choices = {
    paper: { win: ["rock", "spok"], lose: ["scissors", "lizard"] },
    rock: { win: ["lizard", "scissors"], lose: ["paper", "spok"] },
    scissors: { win: ["paper", "lizard"], lose: ["spok", "rock"] },
    lizard: { win: ["spok", "paper"], lose: ["rock", "scissors"] },
    spok: { win: ["scissor", "rock"], lose: ["lizard", "paper"] },
  };

  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [played, setPlayed] = useState(false);
  const [rulesSwitch, setRulesSwitch] = useState(false);

  useEffect(() => {
    const gameResult = (): void => {
      if (
        choices[userChoice].win.find(
          (choice: string) => choice === computerChoice
        )
      ) {
        setResultMessage("YOU WIN");
        setScore(score + 1);
      } else if (
        choices[userChoice].lose.find(
          (choice: string) => choice === computerChoice
        )
      ) {
        setResultMessage("YOU LOSE");
      } else {
        setResultMessage("DRAW");
      }
    };

    if (userChoice !== "" && computerChoice !== "") {
      gameResult();
    }
  }, [userChoice]);

  return (
    <div id="game">
      <ScoreHeader score={score} />
      <section className="mainGameBox">
        {!played ? (
          <GameInitialBox
            setUserChoice={setUserChoice}
            choices={choices}
            setPlayed={setPlayed}
            setComputerChoice={setComputerChoice}
          />
        ) : (
          <ResultScreen
            userChoice={userChoice}
            computerChoice={computerChoice}
            resultMessage={resultMessage}
            setPlayed={setPlayed}
            setUserChoice={setUserChoice}
            setComputerChoice={setComputerChoice}
          />
        )}
      </section>
      {rulesSwitch && <RulesModal setRulesSwitch={setRulesSwitch} />}
      <RulesModalButton
        setRulesSwitch={setRulesSwitch}
        rulesSwitch={rulesSwitch}
      />
    </div>
  );
};

export default Game;
