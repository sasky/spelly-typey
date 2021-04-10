import * as React from "react";
import { Box, Grid, theme, ChakraProvider } from "@chakra-ui/react";
import { reducer } from "./appReducer";
import { initialState } from "./appSate";
import { Game } from "./game/Game";

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
          <Game state={state} dispatch={dispatch} />
          <Box></Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
