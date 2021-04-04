import { gameReducer } from "../components/game/reducers/gameReducers";
import { Action } from "../components/App";
import { GameState } from "../components/game/state/gameState";

test("action change character", () => {
  // GIVEN

  // we have a state like this

  const initialState: GameState = {
    hint: "arch i tec ture ",
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
    ],
  };

  // WHEN

  // we send this char to the reducer

  const stateUpdated = gameReducer(initialState, {
    type: Action.CharPressed,
    payload: { key: "character", value: "a" },
  });

  // console.log('STATE UPDATED' , stateUpdated);
  // THEN

  // the state should look like so
  const desired: GameState = {
    ...initialState,
    current: [
      {
        letter: "a",
        state: "passed", // pending, passed, failed
      },
      {
        letter: "r",
        state: "pending", // pending, passed, failed
      },
    ],
  };

  expect(stateUpdated).toStrictEqual(desired);

  // testing correctly entering the next letter
  expect(
    gameReducer(desired, {
      type: Action.CharPressed,
      payload: { key: "character", value: "r" },
    })
  ).toStrictEqual({
    ...desired,
    current: [
      {
        letter: "a",
        state: "passed", // pending, passed, failed
      },
      {
        letter: "r",
        state: "passed", // pending, passed, failed
      },
    ],
  });
});

test("action change character --wrong input character", () => {
  // GIVEN

  // we have a state like this

  const initialState = {
    hint: "arch i tec ture ",
    timer: 60, //60 seconds countdown to zero
    current: [
      {
        letter: "a",
        state: "pending", // pending, passed, failed
      },
      {
        letter: "r",
        state: "pending", // pending, passed, failed
      },
    ],
  };

  // WHEN

  // we send the wrong  input character"

  const stateUpdated = gameReducer(initialState, {
    type: Action.CharPressed,
    payload: { key: "character", value: "b" },
  });

  // THEN

  // the state should not look like this

  const desired = {
    ...initialState,
    current: [
      {
        letter: "a",
        state: "failed", // pending, passed, failed
      },
      {
        letter: "r",
        state: "pending", // pending, passed, failed
      },
    ],
  };

  expect(stateUpdated).toStrictEqual(desired);
});

test("action input change", () => {
  // GIVEN

  // we have a state like this

  const initialState = {
    input: "", // current input valuE
  };

  // WHEN

  // an on change handler fires and sends the input to the game reducer


  const stateUpdated = gameReducer(initialState, {
    type: Action.InputChanged,
    payload: { key: "input", value: "hello" },
  });

  // THEN

  // the state should not look like this

  const desired = {
    ...initialState,
    input: "hello",
  };

  expect(stateUpdated).toStrictEqual(desired);
});
