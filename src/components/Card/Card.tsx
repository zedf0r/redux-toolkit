import { Link } from "react-router-dom";
import style from "./Card.module.css";
import type { TypeFilmParams } from "../../types";
import { Button } from "../Button/Button";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../hooks/hooks";

type TypeCardProps = {
  film: TypeFilmParams;
  action: ActionCreatorWithPayload<TypeFilmParams>;
  type?: string;
};

export const Card = ({ film, action, type }: TypeCardProps) => {
  const dispatch = useAppDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(
      action({
        imdbID: film.imdbID,
        Poster: film.Poster,
        Title: film.Title,
      })
    );
  };
  return (
    <Link to={`/${film.imdbID}`} className={style.card}>
      <div className={style.imgBox}>
        <img className={style.img} src={film.Poster} alt="Постер" />
      </div>

      <h2 className={style.cardTitle}>{film.Title}</h2>
      <Button
        onClick={(event) => {
          handleOnClick(event);
        }}
      >
        {type === "favorite" ? "Удалить" : "В избранное"}
      </Button>
    </Link>
  );
};
