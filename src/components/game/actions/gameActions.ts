import { GameStateType } from "../state/gameState";

export const actionGameCharPressed = (
  state: GameStateType,
  charPressed: string
) => {
  // find the current letter

  const value = state.input + charPressed;
  const index = state.currentIndex;
  const CharShouldBe = state.current[index]["letter"];

  const inputIsEqual = charPressed === CharShouldBe;

  const currentIndex = inputIsEqual ? index + 1 : index;

  const current = state.current.map((char, i) =>
    i === index
      ? inputIsEqual
        ? { ...char, state: "passed" }
        : { ...char, state: "failed" }
      : char
  );

  return {
    ...state,
    value,
    currentIndex,
    current,
  };
};

export const actionChangeInput = (state: GameStateType, value: string) => {
  return {
    ...state,
    input: value,
  };
};
