import * as React from "react";
import { Box } from "@chakra-ui/react";
import { AppState } from "../../appSate";

export const Current = ({ state }: { state: AppState }) => {
  const input = state.game.input;
  const current = state.game.current;
  const processed = current;

  //local read state
  return (
    <Box flexGrow={4}>
      <h2 data-testid="currentWordFeedBack">{processed}</h2>
    </Box>
  );

  // {currentSet.map((character, i) => {
  // const map = {
  //   [LetterState.Passed]: "green.300",
  //   [LetterState.Failed]: "red.500",
  //   [LetterState.Pending]: "gray.100",
  // } as const;
  // const letterColor = map[character.state];

  // return (
  //   <Text key={i} as="span" color={letterColor}>
  //     {character.letter}
  //   </Text>
  // );
  // })}
};
