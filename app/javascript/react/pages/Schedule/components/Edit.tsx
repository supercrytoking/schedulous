import React, { useReducer, useEffect } from "react";
import ProgramForm from "../components/ProgramForm";
import { programReducer, initProgram } from "~/state/programs/reducer";
import { ProgramContext } from "~/state/programs/context";
import { initialProgramState } from "~/state/programs/state";
import { updateProgram, getProgram } from "~/api/program";

export default function EditSchedule({ id, currentTab, onSubmit }) {
  const [state, dispatch] = useReducer(programReducer, initialProgramState);

  useEffect(() => {
    dispatch(
      getProgram(id).then((program) => {
        dispatch(initProgram(program));
      })
    );
  }, []);

  return (
    <ProgramContext.Provider value={{ state, dispatch }}>
      {!!state.program.id && (
        <ProgramForm
          apiService={(data) => updateProgram(id, data)}
          handleSubmit={onSubmit}
          currentTab={currentTab}
        />
      )}
    </ProgramContext.Provider>
  );
}
