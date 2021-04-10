//  State Types

// timer: number; //60 seconds countdown to zero

export type GameState = {
  hint: string;
  input: string; // current input valuE
  current: string;
  next: string[];
};

// Initial State

export const initialGameState = {
  hint: "arch i tec ture ",
  input: "", // current input valuE
  current: "architecture",
  // todo: app state that challenge consumes
  next: ["hierarchy"],
};
