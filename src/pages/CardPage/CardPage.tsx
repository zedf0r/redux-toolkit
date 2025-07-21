import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../api/fetchApi";
import style from "./CardPage.module.css";
import type { TypeFilmCardProps } from "../../types";

export const CardPage = () => {
  const [data, setData] = useState<TypeFilmCardProps | null>(null);

  const { id } = useParams();

  useEffect(() => {
    fetchApi({
      url: `http://www.omdbapi.com/?apikey=64405bd2&i=${id}`,
      method: "GET",
    }).then((response) => {
      setData(response);
    });
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.card__img}>
          <img className={style.img} src={data?.Poster} alt="Постер" />
        </div>
        <div className={style.card__info}>
          <h3 className={style.title}>{data?.Title}</h3>

          <div className={style.card__info_stats}>
            <p>Year: {data?.Year}</p>
            <p>Genre: {data?.Genre}</p>
            <p>Runtime: {data?.Runtime}</p>
            <p>Director: {data?.Director}</p>
            <p>Actors: {data?.Actors}</p>
            <p>imdbRating: {data?.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
