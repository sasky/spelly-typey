import {GameState} from "./gameState";
import { actionChangeInput} from "./gameActions";
import {Action, ActionInitiator} from "../appActions";


export function gameReducer(state: GameState, action: ActionInitiator) {
  switch (action.type) {
    case Action.InputChanged:
      return actionChangeInput(state, action.payload.value);
    default:
      return state;
  }
}

