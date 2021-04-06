//  State Types

// timer: number; //60 seconds countdown to zero

export type GameState = {
  hint: string;
  input: string; // current input valuE
  current: CurrentWordCharacter[];
};

export enum LetterState {
  Pending = "PENDING",
  Failed = "FAILED",
  Passed = "PASSED",
}

export type CurrentWordCharacter = {
  letter: string;
  state: LetterState;
};

// Initial State

export const initialGameState = {
  hint: "arch i tec ture ",
  timer: 60, //60 seconds countdown to zero
  input: "", // current input valuE
  current: [
    {
      letter: "a",
      state: LetterState.Pending,
    },
    {
      letter: "r",
      state: LetterState.Pending,
    },
    {
      letter: "c",
      state: LetterState.Pending,
    },
    {
      letter: "h",
      state: LetterState.Pending,
    },
    {
      letter: "i",
      state: LetterState.Pending,
    },
  ],
};
