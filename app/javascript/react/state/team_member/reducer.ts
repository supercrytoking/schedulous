import { TeamMember } from "~/models/team_member";
import { TeamMembersState } from "./state";
import {
  TeamMemberActions,
  TeamMemberActionTypes,
  SetTeamMembers,
} from "./actions";

export const teamMembersReducer = (
  state: TeamMembersState,
  action: TeamMemberActions
): TeamMembersState => {
  switch (action.type) {
    case TeamMemberActionTypes.SetTeamMembers:
      return { team_members: action.payload };
    default:
      return state;
  }
};

export const setTeamMembers = (team_members: TeamMember[]): SetTeamMembers => ({
  type: TeamMemberActionTypes.SetTeamMembers,
  payload: team_members,
});
