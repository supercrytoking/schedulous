import React from "react";
import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import { signup } from "~/api/authentication";
import { paths } from "~/paths";

export default function Signup() {
  const handleSubmit = () => {
    window.location.href = paths.dashboard();
  };

  return (
    <Authentication>
      <Container.Small>
        <Form service={signup} onSubmit={handleSubmit}>
          <Form.Input
            name="user.account_attributes.name"
            path="account.name"
            label="Business Name"
          />
          <Form.Input name="user.name" path="name" label="Your Name" />
          <Form.Input
            name="user.email"
            path="email"
            label="Your Best Email"
            control="text"
          />
          <Form.Input
            name="user.password"
            path="password"
            label="Password"
            control="password"
          />
          <Button type="submit" title="Sign Up" />
        </Form>
      </Container.Small>
    </Authentication>
  );
}
