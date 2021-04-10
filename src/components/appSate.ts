
//  state

import {GameState, initialGameState} from "./game/gameState";

export enum View {
  Start,
  Playing,
  Results,
}

export type AppState = {
  appView: View
  directory: object[];
  stats: object[];
  game: GameState;
};

export const initialState: AppState = {
  appView: View.Start,
  directory: [], // list of all the words and there helpers
  game: initialGameState,
  stats: [], // record of all progress
  // game state
};

