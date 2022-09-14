import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import Autocomplete, { IResult } from "~/components/Form/Controls/Autocomplete";
import { autocompletePeople } from "~/api/people";
import PeopleLineItem from "./PeopleLineItem";
import { get } from "lodash";
import Error from "~/components/Form/Error";

import { useForm } from "react-hook-form";

export default function UserForm() {
  const {
    formState: { errors },
  } = useForm();

  const [currentResult, setCurrentResult] = React.useState<IResult | null>(
    null
  );

  const handleSelect = (newResult: IResult, field) => {
    field.onChange(newResult.id);
    setCurrentResult(newResult);
  };

  const error = get(errors, "person.user_id");

  return (
    <>
      <Controller
        name={"person[user_id]"}
        render={({ field }) => (
          <Autocomplete
            label="Select person"
            service={autocompletePeople}
            lineItem={PeopleLineItem}
            onSelect={(newResult) => handleSelect(newResult, field)}
          />
        )}
      />
      {error && <Error messages={error.message} />}
      <input type="hidden" value={currentResult?.id} />
    </>
  );
}
