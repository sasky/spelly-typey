import {GameStateType} from "../state/gameState";
import {ActionType, Action} from "../../App";
import {actionGameCharPressed, actionChangeInput} from "../actions/gameActions";


export function gameReducer(state: GameStateType, action: ActionType) {
  switch (action.type) {
    case Action.CharPressed:
      return actionGameCharPressed(state, action.payload.value);
    case Action.InputChanged:
      return actionChangeInput(state, action.payload.value);
    default:
      return state;
  }
}

