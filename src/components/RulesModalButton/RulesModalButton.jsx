import "./RulesModalButton.css";

const RulesModalButton = ({ setRulesSwitch, rulesSwitch }) => {
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
