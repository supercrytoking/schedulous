import React, { useEffect, useState } from "react";
import Admin from "../../../layouts/Admin";
import { getPerson } from "../../../api/people";
import { useParams } from "react-router-dom";

export default function Person() {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPerson(id).then((data) => setPerson(data));
  }, []);
  return (
    <Admin title={data && `Edit ${person.name_familiar}`}>
      <div className="card">{JSON.stringify(person)}</div>
    </Admin>
  );
}
