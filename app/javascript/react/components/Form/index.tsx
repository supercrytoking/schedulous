import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import BtnCheckbox from "./BtnCheckbox";
interface IProps {
  children: React.ReactNode;
  service: any;
  onSubmit?: (data: any) => void;
  onError?: (data: any) => void;
  formOptions?: any
}

let methods;
export default function Form({ service, children, formOptions={}, onSubmit, onError }: IProps) {
  methods = useForm(formOptions);

  const onFormSubmit = (data) => {
    service(data).then((response) => {
      if (response.errors) {
        Object.keys(response.errors).map((fieldName) => {
          methods.setError(fieldName, {
            type: "api",
            message: response.errors[fieldName],
          });
        });

        if (onError) {
          onError(response.errors);
        }
      } else {
        if (onSubmit) {
          onSubmit(data);
        }
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onFormSubmit)}>{children}</form>
    </FormProvider>
  );
}

export const getFormMethods = () => {
  return methods
}

Form.Input = Input;
Form.Select = Select;
Form.BtnCheckbox = BtnCheckbox;
