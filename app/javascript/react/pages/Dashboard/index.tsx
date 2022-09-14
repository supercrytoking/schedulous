import React, { useContext } from "react";
import useUser from "~/hooks/useUser";
import useAccount from "~/hooks/useAccount";

import Admin from "../../layouts/Admin";

export default function Dashboard() {
  const user = useUser();
  const account = useAccount();

  return (
    <Admin title="Dashboard">
      {JSON.stringify(user)}
      {JSON.stringify(account)}
    </Admin>
  );
}
