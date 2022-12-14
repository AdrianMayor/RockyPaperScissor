import React from "react";
import RulesVanillaGame from "../../images/image-rules.svg";
import "./RulesModal.css";

interface Prop {
  setRulesSwitch: (boolean: boolean) => void;
}

const RulesModal: React.FC<Prop> = ({ setRulesSwitch }) => {
  return (
    <aside className="rulesModalPanel">
      <div className="rulesModalPanel__container">
        <h2 className="rulesModalPanel__title">RULES</h2>
        <button
          onClick={() => setRulesSwitch(false)}
          className="rulesModalPanel__closeButton"
        >
          X
        </button>

        <img
          className="rulesModalPanel__img"
          src={RulesVanillaGame}
          alt="Game Rules"
        ></img>
      </div>
    </aside>
  );
};
export default RulesModal;
