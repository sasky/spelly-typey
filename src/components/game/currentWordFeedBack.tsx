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

// TYPES

export type CurrentWordCharacterType = {
  letter: string;
  state: string;
};

// STATE


// updates

export const  actionGameCharPressed  = (state,charPressed) =>{
      // find the current letter

      const index = state.currentIndex;
      const CharShouldBe = state.current[index]["letter"];

      const inputIsEqual = charPressed === CharShouldBe;

      const currentIndex = inputIsEqual ? index + 1 : index;

      const current = state.current.map((char, i) =>
        i === index
          ? inputIsEqual
            ? { ...char, state: "passed" }
            : { ...char, state: "failed" }
          : char
      );

      return {
        ...state,
        currentIndex,
        current,
      };
  }

// VIEW



export const View = ({ currentSet }) => {
  //local read state
  return (
    <Box flexGrow={4}>
      <h2 data-testid="currentWordFeedBack">
        {currentSet.map((character, i) => {
          const letterColor = character.state === "passed" ? "green.300" : "gray.100";

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
