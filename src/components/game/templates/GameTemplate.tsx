import * as React from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { layoutDebugStyles, Action } from "../../App";
import { Challenge } from "./Challendge";
import { GameStateType } from "../state/gameState";

export const GameTemplate = ({
  state,
  dispatch,
}: {
  state: GameStateType;
  dispatch: Function;
}) => {
  return (
    <Flex {...layoutDebugStyles} flexDirection="column" justifyContent="center">
      <Box as="section" flexGrow={2}></Box>
      <Challenge currentSet={state.current} />
      <Box flexGrow={3}>
        <h3>{state.hint}</h3>
      </Box>
      <Input
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: Action.InputChanged,
            payload: { key: "input", value: e.target.value },
          })
        }
        onKeyDown={(e) => {
          // do the dispatches
          // start game if not already
          // start tmimer
          // clear other stuff TBC
          //
          // dispatch typed character
          dispatch({
            type: Action.CharPressed,
            payload: { key: "character", value: e.key },
          });
        }}
        flexGrow={3}
      />
      <Box flexGrow={2}></Box>
    </Flex>
  );
};
