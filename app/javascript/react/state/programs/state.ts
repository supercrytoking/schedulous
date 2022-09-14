import { uniqueId } from "lodash";
import moment from "moment";
import { Program, ProgramTimeslot } from "../../models/program";

export interface ProgramsState {
  programs: Program[];
}

export const initialProgramsState: ProgramsState = {
  programs: [],
};

export interface ProgramState {
  program: Program;
}

export const initialProgramTimeslot: ProgramTimeslot = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  saturday: null,
  sunday: null,
  hour: null,
  meridiem: null,
  minute: null,
  created_at: null,
  updated_at: null,
  account_id: null,
  program_id: null,
  uniqueId: null,
};

export const initialProgramState: ProgramState = {
  program: {
    account_id: null,
    capacity: null,
    description: null,
    image: null,
    name: null,
    start_date: moment().format("DD/MM/YYYY"),
    created_at: null,
    updated_at: null,
    program_timeslots_attributes: [
      { ...initialProgramTimeslot, uniqueId: uniqueId() },
    ],
  },
};
