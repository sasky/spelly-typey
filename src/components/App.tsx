import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  SimpleGrid,
  Flex,
  Input,
} from "@chakra-ui/react";
import {
  GameStateType,
  initialGameState,
  Game,
  gameReducer,
} from "./game/Game";

//  state

export type StateType = {
  view: string;
  directory: object[];
  stats: object[];
  game: GameStateType;
};

const initialState: StateType = {
  view: "start", // start. playing, results
  directory: [], // list of all the words and there helpers
  stats: [], // record of all progress
  // game state
  game: initialGameState,
};


// Action Types

export enum Action {
    CharPressed,
}

export type ActionType = {
    type: Action;
    payload?: { key: string; value: boolean };
};

// Reducer

function reducer(state:StateType, action: ActionType) {
  return { ...state, game: gameReducer(state.game, action) };
}

// View

export const layoutDebugStyles = {
  borderWidth: "2",
  borderColor: "yellow.300",
};

// export const Listings: FC<{ podcasts: PodcastType[] }> = ({
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
          <Game state={state.game} dispatch={dispatch} />
          <Box></Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
