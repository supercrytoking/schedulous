import React from "react";
import {
  ProgramsState,
  initialProgramsState,
  ProgramState,
  initialProgramState,
} from "./state";
import { ProgramActions } from "./actions";

export const ProgramsContext = React.createContext<{
  state: ProgramsState;
  dispatch: React.Dispatch<ProgramActions>;
}>({
  state: initialProgramsState,
  dispatch: () => undefined,
});

export const ProgramContext = React.createContext<{
  state: ProgramState;
  dispatch: React.Dispatch<ProgramActions>;
}>({
  state: initialProgramState,
  dispatch: () => undefined,
});
