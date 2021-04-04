import {GameState} from "../state/gameState";
import {ActionInitiator, Action} from "../../App";
import {actionGameCharPressed, actionChangeInput} from "../actions/gameActions";


export function gameReducer(state: GameState, action: ActionInitiator) {
  switch (action.type) {
    case Action.CharPressed:
      return actionGameCharPressed(state, action.payload.value);
    case Action.InputChanged:
      return actionChangeInput(state, action.payload.value);
    default:
      return state;
  }
}

