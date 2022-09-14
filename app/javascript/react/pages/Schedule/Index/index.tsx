import React, { useEffect, useState, useReducer } from "react";
import SettingsLayout from "~/layouts/SettingsLayout";
import EditIcon from "~/icons/Edit";
import MoreIcon from "~/icons/More";
import Box from "~/components/Box";
import Flex from "~/components/Flex";
import Button from "~/components/Button";
import { ProgramsContext } from "~/state/programs/context";
import { initialProgramsState } from "~/state/programs/state";
import { programsReducer, setPrograms } from "~/state/programs/reducer";
import { getAllPrograms } from "~/api/program";
import BreadCrumb from "~/components/BreadCrumbs";
import ScheduleModal from "../components/Modal";

export default function Schedule() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedSchedule, setSelectedSchedule] = React.useState(null);

  useEffect(() => {
    getAllPrograms().then((programs) => {
      dispatch(setPrograms(programs));
    });
  }, []);

  const showEditForm = (id) => {
    setSelectedSchedule(id);
    setIsOpen(true);
  };

  const showNewForm = () => {
    setSelectedSchedule(null);
    setIsOpen(true);
  };

  const [state, dispatch] = useReducer(programsReducer, initialProgramsState);
  const breadCrumbData = [
    {
      title: "Class Schedule",
      url: "",
    },
  ];

  return (
    <>
      <ScheduleModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        id={selectedSchedule}
      />

      <SettingsLayout
        title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
        full={true}
        cta={
          <Button title="New Schedule" style="primary" onClick={showNewForm} />
        }
      >
        <ProgramsContext.Provider value={{ state, dispatch }}>
          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Frequency</th>
                <th>Instructor</th>
                <th>Capacity</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.programs.map((program) => (
                <tr key={program.id}>
                  <td>{program.name}</td>
                  <td>{program.frequency}</td>
                  <td>
                    <p>Michael Landon</p>
                  </td>
                  <td>{program.capacity + " m"}</td>
                  <td>{program.duration}</td>
                  <td>
                    <Flex.Row responsive={false} justify="flex-start">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => showEditForm(program.id)}
                      >
                        <Box>
                          <EditIcon />
                        </Box>
                      </a>
                      <Box ml="medium">
                        <MoreIcon />
                      </Box>
                    </Flex.Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ProgramsContext.Provider>
      </SettingsLayout>
    </>
  );
}
