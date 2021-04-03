import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import {CurrentWordCharacterType} from "../state/gameState";

export const Challenge = ({
  currentSet,
}: {
  currentSet: CurrentWordCharacterType[];
}) => {
  //local read state
  return (
    <Box flexGrow={4}>
      <h2 data-testid="currentWordFeedBack">
        {currentSet.map((character, i) => {
          const letterColor =
            character.state === "passed" ? "green.300" : "gray.100";

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
