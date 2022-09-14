import React from "react";
import { filter, findIndex } from "lodash";
import { useNavigate } from "react-router-dom";

import { paths } from "~/paths";
import { Program } from "~/models/program";
import Form, { getFormMethods } from "~/components/Form";
import Button from "~/components/Button";
import {
  addAddProgramTimeslot,
  removeProgramTimeslot,
} from "~/state/programs/reducer";
import { ProgramContext } from "~/state/programs/context";
import { ProgramActions } from "~/state/programs/actions";
import TrashIcon from "~/icons/Trash";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  apiService: any;
  handleSubmit?: any;
  currentTab?: string;
}

export default function ProgramForm({
  apiService: apiService,
  handleSubmit: handleSubmit,
  currentTab: currentTab,
}: IProps) {
  let dispatch: React.Dispatch<ProgramActions>;
  let program: Program;

  const daynames = [
    { name: "monday", label: "MON" },
    { name: "tuesday", label: "TUES" },
    { name: "wednesday", label: "WED" },
    { name: "thursday", label: "THU" },
    { name: "friday", label: "FRI" },
    { name: "saturday", label: "SAT" },
    { name: "sunday", label: "SUN" },
  ];

  const range = (start, end) => {
    let nums = [];
    for (let i = start; i < end; i++)
      nums.push({
        label: i < 10 ? "0" + i.toString() : i.toString(),
        value: i.toString(),
      });
    return nums;
  };

  const munites = range(0, 60);
  const listHours = range(1, 13);

  const addProgramTimeslotsAttributes = () => {
    dispatch(addAddProgramTimeslot());
  };

  const removeProgramTimeslotsAttributes = (uniqueId) => {
    if (confirm("Are you sure you want to delete this schedule?")) {
      const { setValue } = getFormMethods();
      const index = findIndex(program.program_timeslots_attributes, {
        uniqueId: uniqueId,
      });
      setValue(
        `program[program_timeslots_attributes][${index}][_destroy]`,
        true
      );
      dispatch(removeProgramTimeslot(uniqueId));
    }
  };

  return (
    <ProgramContext.Consumer>
      {(context) => {
        program = context.state.program;
        dispatch = context.dispatch;

        return (
          <Form
            service={apiService}
            onSubmit={handleSubmit}
            formOptions={{ defaultValues: { program: program } }}
          >
            <div className={currentTab == "Class Details" ? "" : styles.hidden}>
              <Form.Input label="Class Name" name="program[name]" path="name" />
              <Form.Input
                label="Description"
                name="program[description]"
                path="description"
                type="textarea"
              />
              <div className={styles.flex}>
                <div className={styles.flexItem}>
                  <Form.Input
                    label="Capacity"
                    name="program[capacity]"
                    path="capacity"
                    type="number"
                  />
                </div>
                <div className={styles.flexItem}>
                  <Form.Input
                    label="Start Date"
                    name="program[start_date]"
                    path="start_date"
                  />
                </div>
                <div className={styles.flexItem}>
                  <Form.Input
                    label="Class Duration"
                    name="program[duration]"
                    path="duration"
                  />
                </div>
              </div>
            </div>

            <div className={currentTab == "Schedule" ? "" : styles.hidden}>
              {filter(
                program.program_timeslots_attributes,
                (o) => !o._destroy
              ).map((programTimeslotAttributes, index) => {
                const attrNamePrefix = `program[program_timeslots_attributes][${index}]`;
                const attrPathPrefix = `program_timeslots[${index}].`;

                return (
                  <div className={styles.timeslot}>
                    <div className={styles.daynameWrapper}>
                      {daynames.map((dayname, index) => {
                        return (
                          <Form.BtnCheckbox
                            label={dayname.label}
                            name={`${attrNamePrefix}[${dayname.name}]`}
                            key={index}
                          />
                        );
                      })}
                    </div>

                    <div className={styles.hourWrapper}>
                      <div className={styles.select}>
                        <Form.Select
                          label="Hour"
                          name={`${attrNamePrefix}[hour]`}
                          path={`${attrPathPrefix}hour`}
                          options={listHours}
                        />
                      </div>
                      <div className={styles.select}>
                        <Form.Select
                          label="Minute"
                          name={`${attrNamePrefix}[minute]`}
                          path={`${attrPathPrefix}minute`}
                          options={munites}
                        />
                      </div>
                      <div className={styles.select}>
                        <Form.Select
                          label="AM/PM"
                          name={`${attrNamePrefix}[meridiem]`}
                          path={`${attrPathPrefix}meridiem`}
                          options={[
                            { label: "PM", value: "pm" },
                            { label: "AM", value: "am" },
                          ]}
                        />
                      </div>
                      {program.program_timeslots_attributes.length > 1 && (
                        <div
                          className={classNames(
                            styles.select,
                            styles.selectTrash
                          )}
                          onClick={() => {
                            removeProgramTimeslotsAttributes(
                              programTimeslotAttributes.uniqueId
                            );
                          }}
                        >
                          <TrashIcon />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className={styles.btnAddMoreWrapper}>
                <Button
                  type="button"
                  style="tertiary"
                  size="small"
                  onClick={addProgramTimeslotsAttributes}
                  title="Add Schedule"
                />
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                className={styles.btnSubmit}
                title="Submit"
                type="submit"
              />
            </div>
          </Form>
        );
      }}
    </ProgramContext.Consumer>
  );
}
