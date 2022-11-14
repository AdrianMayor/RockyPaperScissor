import React from "react";
import "./RulesModalButton.css";

interface Props {
  rulesSwitch: boolean;
  setRulesSwitch: (boolean: boolean) => void;
}

const RulesModalButton: React.FunctionComponent<Props> = ({
  setRulesSwitch,
  rulesSwitch,
}) => {
  return (
    <button
      className="rulesButton"
      onClick={() => setRulesSwitch(!rulesSwitch)}
    >
      RULES
    </button>
  );
};

export default RulesModalButton;
