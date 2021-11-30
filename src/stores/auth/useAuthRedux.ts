import { useAppDispatch, useAppSelector } from "stores/root";
import { authSlice } from "stores/auth/slice";

export default function useAuthRedux() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  function setInit() {
    dispatch(authSlice.actions.setInit());
  }

  return {
    state: auth,
    setInit,
  };
}
