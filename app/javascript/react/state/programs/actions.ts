import { Program, ProgramTimeslot } from "../../models/program";

export enum ProgramActionTypes {
  SetPrograms,
  InitProgram,
  AddProgramTimeslot,
  RemoveProgramTimeslot,
  GetProgram,
}

export interface SetPrograms {
  type: ProgramActionTypes.SetPrograms;
  payload: Program[];
}

export interface InitProgram {
  type: ProgramActionTypes.InitProgram;
  payload: Program;
}

export interface AddProgramTimeslot {
  type: ProgramActionTypes.AddProgramTimeslot;
  payload: ProgramTimeslot;
}

export interface RemoveProgramTimeslot {
  type: ProgramActionTypes.RemoveProgramTimeslot;
  payload: string;
}

export interface GetProgram {
  type: ProgramActionTypes.GetProgram;
  payload: Program;
}

export type ProgramActions = SetPrograms | InitProgram | AddProgramTimeslot | RemoveProgramTimeslot | GetProgram;
