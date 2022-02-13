import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";


// типизированые поля, чтоб подхватывал то что в есть в редусере 
// (к примеру: вместо useSelector будет useAppSelector)

export const useAppDispatch = () => useDispatch<AppDispatch> ()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
