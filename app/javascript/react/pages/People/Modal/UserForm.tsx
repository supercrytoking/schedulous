import React from "react";
import Form from "~/components/Form";

export default function UserForm() {
  return (
    <>
      <Form.Input
        label="Email"
        name="person[user_attributes[email]]"
        path="user.email"
      />
      <Form.Input
        label="Phone"
        name="person[user_attributes[phone]]"
        path="user.phone"
      />
      <Form.Input
        name="person[user_attributes[skip_password]]"
        path="user.skip_password"
        type="hidden"
        defaultValue="1"
      />
    </>
  );
}
