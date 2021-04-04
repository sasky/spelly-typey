import { GameState, CurrentWordCharacterType } from "../state/gameState";

const isResetChar = (char: string): boolean => char === "Backspace";

const resetWord = (
  current: CurrentWordCharacterType[]
): CurrentWordCharacterType[] => {
  return current.map((char: CurrentWordCharacterType) => ({
    ...char,
    state: "pending",
  }));
};

const evaluateChar = (
  current: CurrentWordCharacterType[],
  charPressed: string
): CurrentWordCharacterType[] => {
  const index = current.findIndex(
    (char: CurrentWordCharacterType) => char.state === "pending"
  );
  if (index === -1) {
    // TODO: this should never happen. Maybe just crash here;
    return current;
  }
  const CharShouldBe = current[index];

  const inputIsEqual = charPressed === CharShouldBe.letter;

  // also if there is a previous failed char, then all next chars should also fail
  const hasWordAlreadyFailed =
    current.findIndex(
      (char: CurrentWordCharacterType) => char.state === "failed"
    ) !== -1;

  return current.map((char, i) =>
    i === index
      ? hasWordAlreadyFailed
        ? { ...char, state: "failed" }
        : inputIsEqual
        ? { ...char, state: "passed" }
        : { ...char, state: "failed" }
      : char
  );
};

export const actionGameCharPressed = (
  state: GameState,
  charPressed: string
) => {
  // find the current letter
  const doReset = isResetChar(charPressed);
  return doReset
    ? { ...state,input: '', current: resetWord(state.current) }
    : { ...state, current: evaluateChar(state.current, charPressed) };
};

export const actionChangeInput = (state: GameState, value: string) => {
  return {
    ...state,
    input: value,
  };
};
