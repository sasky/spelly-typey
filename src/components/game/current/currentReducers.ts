import {Action, ActionInitiator} from "../../appActions";
import {GameState} from "../gameState";
import {actionGameCharPressed} from "./currentActions";


export function gameReducer(state: GameState, action: ActionInitiator) {
  switch (action.type) {
    case Action.CharPressed:
      return actionGameCharPressed(state, action.payload.value);
    default:
      return state;
  }
}

