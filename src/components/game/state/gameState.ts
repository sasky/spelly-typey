
//  State Types

export type GameStateType = {
  currentIndex: number;
  hint: string;
  timer: number; //60 seconds countdown to zero
  input: string; // current input valuE
  current: CurrentWordCharacterType[];
};


export type CurrentWordCharacterType = {
  letter: string;
  state: string;
};


// Initial State

export const initialGameState = {
  currentIndex: 0,
  hint: "arch i tec ture ",
  timer: 60, //60 seconds countdown to zero
  input: "", // current input valuE
  current: [
    {
      letter: "a",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "r",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "c",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "h",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "i",
      state: "pending", // pending, passed, failed
    },
  ],
};
