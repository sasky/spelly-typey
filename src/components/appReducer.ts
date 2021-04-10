
// Reducer

import {ActionInitiator} from "./appActions";
import {AppState} from "./appSate";
import {gameReducer} from "./game/gameReducers";


export function reducer(state: AppState, action: ActionInitiator) {
  return { ...state, game: gameReducer(state.game, action) };
}
