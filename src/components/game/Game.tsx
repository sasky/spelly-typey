import * as React from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { layoutDebugStyles } from "../App";
import {AppState} from "../appSate";
import {Action} from "../appActions";
import {Current} from './current/Current';

export const Game = ({
  state,
  dispatch,
}: {
  state: AppState;
  dispatch: Function;
}) => {
    const game = state.game;
  return (
    <Flex {...layoutDebugStyles} flexDirection="column" justifyContent="center">
      <Box as="section" flexGrow={2}></Box>
      <Current state={state} />
      <Box flexGrow={3}>
        <h3>{game.hint}</h3>
      </Box>
      <Input
        value={game.input}
        onChange={(e) =>{
          // do the dispatches
          // start game if not already
          // start tmimer
          // clear other stuff TBC
          //
          // dispatch typed character
          dispatch({
            type: Action.InputChanged,
            payload: { key: "input", value: e.target.value },
          });
        
        }}
        flexGrow={3}
      />
      <Box flexGrow={2}></Box>
    </Flex>
  );
};
