import { TeamMember } from "~/models/team_member";

export enum TeamMemberActionTypes {
  SetTeamMembers,
}

export interface SetTeamMembers {
  type: TeamMemberActionTypes.SetTeamMembers;
  payload: TeamMember[];
}

export type TeamMemberActions = SetTeamMembers;
