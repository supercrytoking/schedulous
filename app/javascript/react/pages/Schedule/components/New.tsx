import React, { useReducer } from "react";
import ProgramForm from "../components/ProgramForm";
import { programReducer } from "~/state/programs/reducer";
import { ProgramContext } from "~/state/programs/context";
import { initialProgramState } from "~/state/programs/state";
import { createProgram } from "~/api/program";

export default function NewSchedule({ onSubmit, currentTab }) {
  const [state, dispatch] = useReducer(programReducer, initialProgramState);

  return (
    <ProgramContext.Provider value={{ state, dispatch }}>
      <ProgramForm
        apiService={createProgram}
        handleSubmit={onSubmit}
        currentTab={currentTab}
      />
    </ProgramContext.Provider>
  );
}
