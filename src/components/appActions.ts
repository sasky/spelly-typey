
// Action Types

export enum Action {
  CharPressed,
  InputChanged,
}

// Action  ActionInitiator
export type ActionInitiator = {
  type: Action;
  payload?: { key: string; value: string };
};

