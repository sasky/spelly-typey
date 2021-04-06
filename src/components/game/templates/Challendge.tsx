import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CurrentWordCharacter, LetterState } from "../state/gameState";

export const Challenge = ({
  currentSet,
}: {
  currentSet: CurrentWordCharacter[];
}) => {
  //local read state
  return (
    <Box flexGrow={4}>
      <h2 data-testid="currentWordFeedBack">
        {currentSet.map((character, i) => {
          const map = {
            [LetterState.Passed]: "green.300",
            [LetterState.Failed]: "red.500",
            [LetterState.Pending]: "gray.100",
          } as const;
          const letterColor = map[character.state];

          return (
            <Text key={i} as="span" color={letterColor}>
              {character.letter}
            </Text>
          );
        })}
      </h2>
    </Box>
  );
};
