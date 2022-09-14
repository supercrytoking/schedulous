export interface ProgramTimeslot {
  id?: number | null;
  monday?: boolean | null;
  tuesday?: boolean | null;
  wednesday?: boolean | null;
  thursday?: boolean | null;
  friday?: boolean | null;
  saturday?: boolean | null;
  sunday?: boolean | null;
  hour?: number | null;
  meridiem?: number | null;
  minute?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  account_id?: number | null;
  program_id?: number | null;
  _destroy?: boolean | null;
  uniqueId: string | null;
}

export interface Program {
  id?: number;
  account_id: number | null;
  capacity: number | null;
  duration: number | null;
  description: string | null;
  image: string | null;
  name: string | null;
  start_date: string | null;
  created_at: string | null;
  updated_at: string | null;
  frequency: string | null;
  program_timeslots_attributes: ProgramTimeslot[];
}
