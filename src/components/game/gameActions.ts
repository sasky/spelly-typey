import {GameState} from "./gameState";

export const actionChangeInput = (state: GameState, value: string) => {
  return {
    ...state,
    input: value,
  };
};
