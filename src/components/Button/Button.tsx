// import { useDispatch } from "react-redux";
import style from "./Button.module.css";
// import type { TypeFilmParams } from "../../types";
// import type { AppDispatch } from "../../services/store";
// import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";

// type TypeButtonActions = {
//   action: ActionCreatorWithPayload<TypeFilmParams>;
//   film: TypeFilmParams;
//   children: React.ReactNode;
// };

type TypeButtonProps = {
  onClick: (event: React.MouseEvent) => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: TypeButtonProps) => {
  //   const dispatch: AppDispatch = useDispatch();
  return (
    <button type="button" className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};
