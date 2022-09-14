import React from "react";
import Form from "~/components/Form";
import Modal from "~/components/Modal";

import Person from "~/icons/toggle/Person";
import People from "~/icons/toggle/People";

import Button from "~/components/Button";
import UserForm from "./UserForm";
import PersonForm from "./PersonForm";
import { paths } from "~/paths";
import { createPerson } from "~/api/people";
import CheckToggle, { ICheckToggleItem } from "~/components/CheckToggle";

const TOGGLE_ITEMS: ICheckToggleItem[] = [
  { title: "New User", icon: <Person />, key: "user" },
  { title: "Add to Family", icon: <People />, key: "person" },
];

export default function PeopleModal({ isOpen, onClose }) {
  const [currentToggle, setCurrentToggle] = React.useState("user");

  const handleSubmit = () => {
    window.location.href = paths.people.index();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Person">
      <Form service={createPerson} onSubmit={handleSubmit}>
        <Form.Input label="Name" name="person[name]" path="name" />
        <Form.Input label="Date of birth" name="person[dob]" path="dob" />

        <CheckToggle
          items={TOGGLE_ITEMS}
          selectedKey={currentToggle}
          onChange={setCurrentToggle}
        />

        {currentToggle === "user" && <UserForm />}
        {currentToggle === "person" && <PersonForm />}
        <hr />
        <Button title="Create Person" type="submit" />
      </Form>
    </Modal>
  );
}
