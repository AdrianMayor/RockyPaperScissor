export interface Choices {
  paper: GameOptions;
  rock: GameOptions;
  scissors: GameOptions;
  lizard: GameOptions;
  spok: GameOptions;
}

interface GameOptions {
  win: string[];
  lose: string[];
}
