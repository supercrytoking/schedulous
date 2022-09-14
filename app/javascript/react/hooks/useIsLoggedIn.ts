import useUser from "~/hooks/useUser";

export default function useIsLoggedIn() {
  const user = useUser();

  return user?.id !== null;
}
