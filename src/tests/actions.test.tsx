import { Action, gameReducer } from "./../components/home";

test("action change character", () => {
  // GIVEN

  // we have a state like this

  const initialState = {
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
    ],
  };

  // WHEN

  // we send this char to the reducer

  const stateUpdated = gameReducer(initialState, {
    type: Action.CharPressed,
    payload: { key: "character", value: "a" },
  });

  // THEN

  // the state should look like so
  const desired = {
    ...initialState,
    currentIndex: 1,
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
    currentIndex: 2,
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
  // currentIndex is reset to 0, as we wil need to start typing again

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
