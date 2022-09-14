import { useContext } from "react";
import { AccountContext } from "~/state/account/context";

export default function useAccount() {
  const { state: stateAccount } = useContext(AccountContext);

  return stateAccount?.account;
}
