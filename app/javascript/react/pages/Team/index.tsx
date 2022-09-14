import React from "react";
import { getAllTeamMembers } from "~/api/team_members";
import { paths } from "~/paths";
import SettingsLayout from "~/layouts/SettingsLayout";
import BreadCrumb from "~/components/BreadCrumbs";
import EditIcon from "~/icons/Edit";
import { initialTeamMembersState } from "~/state/team_member/state";

import {
  teamMembersReducer,
  setTeamMembers,
} from "~/state/team_member/reducer";

export default function Team() {
  const [state, dispatch] = React.useReducer(
    teamMembersReducer,
    initialTeamMembersState
  );

  React.useEffect(() => {
    getAllTeamMembers().then((teamMembers) => {
      dispatch(setTeamMembers(teamMembers));
    });
  }, []);

  const breadCrumbData = [
    {
      title: "Settings",
      url: paths.settings.index(),
    },
    {
      title: "Team",
      url: "",
    },
  ];

  return (
    <SettingsLayout
      title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
      full={true}
    >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.team_members.map((teamMember) => (
            <tr key={teamMember.id}>
              <td>{teamMember.name}</td>
              <td>{teamMember.role}</td>
              <td>
                <EditIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SettingsLayout>
  );
}
