import { Link } from "react-router-dom";
import style from "./Card.module.css";
import type { TypeFilmParams } from "../../types";

export const Card = ({
  film,
  children,
}: {
  film: TypeFilmParams;
  children: React.ReactNode;
}) => {
  return (
    <Link to={`/${film.imdbID}`} className={style.card}>
      <div className={style.imgBox}>
        <img className={style.img} src={film.Poster} alt="Постер" />
      </div>

      <h2 className={style.cardTitle}>{film.Title}</h2>
      {children}
    </Link>
  );
};
