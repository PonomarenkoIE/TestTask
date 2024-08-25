import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/RootStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector