import { useContext } from "react";
import { UserContext } from "~/state/user/context";

export default function useUser() {
  const { state: stateUser } = useContext(UserContext);

  return stateUser?.user;
}
