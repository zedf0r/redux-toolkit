import type { TypeFilmCardProps } from "../../types";

export const CardPage = (props: TypeFilmCardProps) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.Poster} alt="Постер" />
      </div>
      <div className="card__info">
        <div className="card__info-title">
          <h3>{props.Title}</h3>
        </div>
        <div className="card__info-main">
          <p>{props.Year}</p>
          <p>{props.Genre}</p>
          <p>{props.Runtime}</p>
          <p>{props.Directory}</p>
          <p>{props.Actors}</p>
          <p>{props.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};
