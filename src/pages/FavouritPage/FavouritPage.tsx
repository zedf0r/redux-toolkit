import style from "./FavoritePage.module.css";
import { Card } from "../../components";
import { remove } from "../../services/favoriteFilm/favoriteFilmSlice";
import { useAppSelector } from "../../hooks/hooks";

export const FavoritePage = () => {
  const { films } = useAppSelector((state) => state.films);
  return (
    <div className={style.container}>
      {films.map((film) => {
        return (
          <Card key={film.imdbID} film={film} action={remove} type="favorite" />
        );
      })}
    </div>
  );
};
