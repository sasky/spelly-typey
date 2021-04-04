import * as React from "react";
import { Box, Grid, theme, ChakraProvider } from "@chakra-ui/react";
import { GameTemplate } from "./game/templates/GameTemplate";
import { initialGameState, GameState } from "./game/state/gameState";
import { gameReducer } from "./game/reducers/gameReducers";

//  state

export type AppState = {
  view: string;
  directory: object[];
  stats: object[];
  game: GameState;
};

const initialState: AppState = {
  view: "start", // start. playing, results
  directory: [], // list of all the words and there helpers
  stats: [], // record of all progress
  // game state
  game: initialGameState,
};

// Action Types

export enum Action {
  CharPressed,
  InputChanged,
}
// Action  ActionInitiator
export type ActionInitiator = {
  type: Action;
  payload?: { key: string; value: string };
};

// Reducer

function reducer(state: AppState, action: ActionInitiator) {
  return { ...state, game: gameReducer(state.game, action) };
}

// View

export const layoutDebugStyles = {
  borderWidth: "2",
  borderColor: "yellow.300",
};

export const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //local read state
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        backgroundColor="gray.900"
        color="gray.50"
      >
        <Grid gap={4} templateColumns="auto 90vh auto" templateRows="100vh">
          <Box {...layoutDebugStyles}></Box>
          <GameTemplate state={state.game} dispatch={dispatch} />
          <Box></Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
