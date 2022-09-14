import { uniqueId, findIndex } from "lodash";
import { Program } from '../../models/program';
import { ProgramsState, ProgramState, initialProgramTimeslot } from './state';
import {
  ProgramActions,
  ProgramActionTypes,
  SetPrograms,
  InitProgram,
  AddProgramTimeslot,
  RemoveProgramTimeslot
} from './actions';

export const programsReducer = (state: ProgramsState, action: ProgramActions): ProgramsState => {
  switch (action.type) {
    case ProgramActionTypes.SetPrograms:
      return { programs: action.payload };
    default:
      return state;
  }
};

export const setPrograms = (programs: Program[]): SetPrograms => ({
  type: ProgramActionTypes.SetPrograms,
  payload: programs,
});

export const programReducer = (state: ProgramState, action: ProgramActions): ProgramState => {
  switch (action.type) {
    case ProgramActionTypes.InitProgram:
      return { program: action.payload };
    case ProgramActionTypes.AddProgramTimeslot:
      state.program.program_timeslots_attributes.push(action.payload);
      return { ...state };
    case ProgramActionTypes.RemoveProgramTimeslot:
      const index = findIndex(state.program.program_timeslots_attributes, {
        uniqueId: action.payload
      })
      state.program.program_timeslots_attributes[index]._destroy = true;
      return { ...state };
    default:
      return state;
  }
};

export const initProgram = (program: Program): InitProgram => {
  program.program_timeslots_attributes.forEach((attr, index) => {
    if (!attr.uniqueId) {
      program.program_timeslots_attributes[index]['uniqueId'] = uniqueId();
    }
  });

  return {
    type: ProgramActionTypes.InitProgram,
    payload: program,
  }
};

export const addAddProgramTimeslot = (): AddProgramTimeslot => {
  return {
    type: ProgramActionTypes.AddProgramTimeslot,
    payload: {...initialProgramTimeslot, uniqueId: uniqueId()},
  }
};

export const removeProgramTimeslot = (uniqueId): RemoveProgramTimeslot => {
  return {
    type: ProgramActionTypes.RemoveProgramTimeslot,
    payload: uniqueId,
  }
};
