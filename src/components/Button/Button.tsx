import { useDispatch } from "react-redux";
import style from "./Button.module.css";
import type { TypeFilmParams } from "../../types";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type TypeButtonActions = {
  action: ActionCreatorWithPayload<TypeFilmParams>;
  film: TypeFilmParams;
  children: React.ReactNode;
};

export const Button = ({ action, film, children }: TypeButtonActions) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={style.button}
      onClick={(event) => {
        event.preventDefault();
        dispatch(
          action({
            imdbID: film.imdbID,
            Title: film.Title,
            Poster: film.Poster,
          })
        );
      }}
    >
      {children}
    </button>
  );
};
