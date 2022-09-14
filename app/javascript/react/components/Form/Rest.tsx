import React from "react";
import { AppForm as Form } from "./Form";

interface IProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  model?: string;
  service: any;
}

export default function Rest({ service, model, onSubmit, children }) {
  const submit = async (data, form) => {
    let submitData = {};
    if (model) {
      submitData[model] = data;
    } else {
      submitData = data;
    }

    if (Object.keys(submitData[model]).length == 0) {
      Object.keys(form.getState().modified).map((fieldName) => {
        submitData[model][fieldName] = null;
      });
    }

    const response = await service(submitData);
    if (response.errors) {
      return response.errors;
    } else {
      form.reset();
    }
  };

  return <Form onSubmit={submit}>{children}</Form>;
}
