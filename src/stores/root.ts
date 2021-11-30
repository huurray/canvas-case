import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//stores
import authReducer from "./auth/slice";

const reducers = combineReducers({ auth: authReducer });

export const rootStore = configureStore({
  reducer: reducers,
});

export type IRootState = ReturnType<typeof rootStore.getState>;
export type IAppDispatch = typeof rootStore.dispatch;

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
