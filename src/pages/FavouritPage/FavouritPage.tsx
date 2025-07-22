import { useSelector } from "react-redux";
import type { RootState } from "../../services/store";
import style from "./FavoritePage.module.css";
import { Button, Card } from "../../components";
import { remove } from "../../services/favoriteFilm/favoriteFilmSlice";

export const FavoritePage = () => {
  const films = useSelector((state: RootState) => state.films.films);

  return (
    <div className={style.container}>
      {films.map((film) => {
        return (
          <>
            <Card key={film.imdbID} film={film}>
              <Button action={remove} film={film}>
                Удалить
              </Button>
            </Card>
          </>
        );
      })}
    </div>
  );
};
