import * as React from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import {
  View as CurrentWordFeedBack,
  actionGameCharPressed,
} from "./../game/currentWordFeedBack";
import { layoutDebugStyles, Action, ActionType } from "../App";

//  State Types

export type GameStateType = {
  currentIndex: number;
  hint: string;
  timer: number; //60 seconds countdown to zero
  input: string; // current input valuE
  current: CurrentWordType[];
};

export type CurrentWordType = {
  letter: string;
  state: string;
};

// Initial State

export const initialGameState = {
  currentIndex: 0,
  hint: "arch i tec ture ",
  timer: 60, //60 seconds countdown to zero
  input: "", // current input valuE
  current: [
    {
      letter: "a",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "r",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "c",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "h",
      state: "pending", // pending, passed, failed
    },
    {
      letter: "i",
      state: "pending", // pending, passed, failed
    },
  ],
};



// Reducers

export function gameReducer(state:GameStateType, action: ActionType) {
  switch (action.type) {
    case Action.CharPressed:
      return actionGameCharPressed(state, action.payload?.value);
    default:
      return state;
  }
}

// View

function getCurrentWord(state) {
  const result = state.current.reduce(function (carry, char) {
    const letter = char.letter;

    return carry + letter;
  }, "");

  return result;
}

// export const Listings: FC<{ podcasts: PodcastType[] }> = ({
export const Game = ({ state, dispatch }) => {
  // updates
  const onkeyPress = (e) => {
    const input = e.key;
    // do the dispatches
    // start game if not already
    // start tmimer
    // clear other stuff TBC
    //
    // dispatch typed character
    dispatch({
      type: Action.CharPressed,
      payload: { key: "character", value: input },
    });
  };

  //local read state
  return (
    <Flex {...layoutDebugStyles} flexDirection="column" justifyContent="center">
      <Box as="section" flexGrow={2}></Box>
      <CurrentWordFeedBack currentSet={state.current} />
      <Box flexGrow={3}>
        <h3>{state.hint}</h3>
      </Box>
      <Input value={state.value} onKeyDown={onkeyPress} flexGrow={3} />

      <Box flexGrow={2}></Box>
    </Flex>
  );
};
