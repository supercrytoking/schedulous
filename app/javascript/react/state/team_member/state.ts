import { TeamMember } from "~/models/team_member";

export interface TeamMembersState {
  team_members: TeamMember[];
}

export const initialTeamMembersState: TeamMembersState = {
  team_members: [],
};

export interface TeamMemberState {
  team_member: TeamMember;
}

export const initialTeamMemberState: TeamMemberState = {
  team_member: {
    id: null,
    name: null,
    role: null,
  },
};
