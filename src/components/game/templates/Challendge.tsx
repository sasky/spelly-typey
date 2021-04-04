import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import {CurrentWordCharacter} from "../state/gameState";

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
            const map = {"passed" : "green.300",
                        "failed" : "red.500",
                        "pending": "gray.100"}
          const letterColor = map[character.state] ;

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
